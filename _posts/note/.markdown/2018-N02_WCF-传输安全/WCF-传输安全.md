
# WCF 传输安全

WCF 安全分为三个主要功能区域：传输安全、访问控制和审核。传输安全提供完整性、保密性和身份验证。传输安全由 Transport,Message 和 TransportWithMessageCredential 实现。

## 系统提供的绑定

参见：[系统提供的绑定][]

## 传输安全方案

WCF 传输安全的常见方案包括：

1. 使用 Windows 确保传输安全。WCF 客户端和服务部署在 Windows 域中。消息包含个人数据，因此要求客户端和服务相互进行身份验证，要求实现消息完整性和消息保密性。此外，还需要有已发生特定事务的证明，例如，消息的接收方应记录签名信息。
2. 使用 UserName 和 HTTPS 确保传输安全。WCF 客户端和服务需要一些开发工作，以便通过 Internet 工作。客户端凭据根据数据库（其中的内容为用户名 / 密码对) 进行身份验证。服务是用受信任的安全套接字层 (SSL) 证书部署在一个 HTTPS 地址的。由于消息是通过 Internet 传输的，因此，客户端和服务需要相互进行身份验证，并且必须在传输过程中保持消息的保密性和完整性。
3. 使用证书确保传输安全。WCF 客户端和服务需要一些开发工作，以便通过公共 Internet 工作。客户端和服务都具有可用于确保 Message 的证书。客户端和服务通过 Internet 进行相互通信，执行要求消息完整性、保密性和相互身份验证的重要事务。

## 完整性、保密性和身份验证

| 函数     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| 完整性   | **完整性** 用于确保数据完整，以免数据被篡改，这通常是由消息的数字签名实现的。 |
| 保密性   | **保密性** 用于确保消息不被预期以外的任何人读取。保密性通常是用公钥 / 私钥方案进行数据加密实现的。 |
| 身份验证 | **身份验证** 用于已声明标识的验证。有多种方式可以实现身份验证。一个常用方法是使用用户 / 密码系统。第二个方法是使用第三方提供的 X.509 证书。 |

## 安全模式

| 模式                           | 描述                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| None                           | 传送层和消息层都不提供安全措施。除 **basicHttpBinding** 外默认情况下预定义的绑定都不使用此模式。 |
| Transport                      | 使用安全传送（如 HTTPS) 实现完整性、保密性和相互身份验证。   |
| Message                        | 使用 SOAP Message 实现完整性、保密性和相互身份验证。 SOAP 消息是按照 WS-Security 标准获得保护的。 |
| TransportWithMessageCredential | 使用 Transport 实现完整性、保密性和服务器身份验证。 使用 Message（WS-Security 和其他标准) 实现客户端身份验证。 |
| Transport 和 Message           | 在消息级别和传送级别都执行保护和身份验证。 此模式可仅用于 **netMsmqBinding** 元素。 |

## 凭证和传输安全

WCF 中支持的两种凭据类型：用户名和 (X.509) 证书凭据。 对于用户名凭据，用户名表示已声明标识，密码表示所有权证明。这种情况下，受信任的颁发机构则是验证用户名和密码的系统。 在证书凭据中，主题名称、主题备用名称或证书中的特定字段可用于表示已声明标识和 / 或功能。凭据中拥有数据的证明是通过使用关联的私钥生成签名实现的。

### Transport 模式客户端凭据类型

| 设置        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| None        | 指定客户端不需要提供任何凭据。这相当于匿名客户端。           |
| Basic       | 指定基本身份验证。                                           |
| Digest      | 指定摘要式身份验证。                                         |
| Ntlm        | 指定在 Windows 域中使用 SSPI 协商进行 Windows 身份验证。要使用 SSPI 协商，就需要使用 Kerberos 协议或 NT LanMan (NTLM)。 |
| Windows     | 指定在 Windows 域中使用 SSPI 进行 Windows 身份验证。SSPI 选择 Kerberos 协议或 NTLM 作为身份验证服务。SSPI 首先尝试 Kerberos 协议；如果失败，则使用 NTLM。 |
| Certificate | 使用证书（通常是 X.509) 执行客户端身份验证。                 |

### Message 模式客户端凭据类型

| 设置        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| None        | 允许服务与匿名客户端交互。                                   |
| Windows     | 允许在 Windows 凭据的已通过身份验证的上下文中执行 SOAP 消息交换。使用 SSPI 协商机制选择 Kerberos 协议或 NTLM 作为身份验证服务。 |
| Username    | 允许服务可以要求使用用户名凭据对客户端进行身份验证。请注意，WCF 不允许对用户名进行任何加密操作，例如生成签名或加密数据。因此，WCF 强制要求在使用用户名凭据时确保传输的安全性。 |
| Certificate | 允许服务要求使用证书对客户端进行身份验证。                   |
| CardSpace   | 允许服务要求使用 CardSpace 对客户端进行身份验证。            |

## 实践

以下部分代码来自官方实例，部分代码源于自己的理解，欢迎批评指正。

### 基于 webHttpBinding 的 Transport 安全模式

服务端使用安全套接字（SSL) 保证传输安全，并要求客户端使用 Basic 身份验证方案。

#### 创建自定义消息检查器

创建一个继承 IClientMessageInspector 和 IDispatchMessageInspector 接口的类。并实现以下方法：

IClientMessageInspector.BeforeSendRequest IClientMessageInspector.AfterReceiveReply IDispatchMessageInspector.AfterReceiveRequest IDispatchMessageInspector.BeforeSendReply

```csharp
using System.ServiceModel.Dispatcher;
using System.ServiceModel;
using System.ServiceModel.Channels;
using System.Text;

namespace CustomBasicValidator
{
    public class MyMessageInspector : IClientMessageInspector, IDispatchMessageInspector
    {
        object IClientMessageInspector.BeforeSendRequest(ref Message request, IClientChannel channel)
        {
            throw new NotImplementedException();
        }

        void IClientMessageInspector.AfterReceiveReply(ref Message reply, object correlationState)
        {
            throw new NotImplementedException();
        }

        void IDispatchMessageInspector.BeforeSendReply(ref Message reply, object correlationState)
        {
            //throw new NotImplementedException();
        }

        object IDispatchMessageInspector.AfterReceiveRequest(ref Message request, IClientChannel channel, InstanceContext instanceContext)
        {
            HttpRequestMessageProperty requestMessageProperty = new HttpRequestMessageProperty();
            requestMessageProperty = (HttpRequestMessageProperty)request.Properties.Values.FirstOrDefault(m => m.GetType() == requestMessageProperty.GetType());
            string Authorization = requestMessageProperty.Headers.Get("Authorization");

            if(String.IsNullOrEmpty(Authorization))
            {
                throw new ArgumentNullException();
            }

            if (!("Basic " + Convert.ToBase64String(Encoding.Default.GetBytes("Administrator:000000")) == Authorization))
            {
                throw new FaultException("未知的用户名或不正确的密码(Unknown Username or Incorrect Password)");
            }

            return null;
        }
    }
}
```

#### 将自定义消息检查器应用到 IEndpointBehavior

```csharp
using System.ServiceModel.Dispatcher;
using System.ServiceModel.Channels;
using System.ServiceModel.Description;

namespace CustomBasicValidator
{
    public class MyMessageInspectorEndpointBehavior : IEndpointBehavior
    {
        void IEndpointBehavior.AddBindingParameters(ServiceEndpoint endpoint, BindingParameterCollection bindingParameters)
        {
            //throw new NotImplementedException();
        }

        void IEndpointBehavior.ApplyClientBehavior(ServiceEndpoint endpoint, ClientRuntime clientRuntime)
        {
            MyMessageInspector inspector = new MyMessageInspector();
            clientRuntime.MessageInspectors.Add(inspector);
        }

        void IEndpointBehavior.ApplyDispatchBehavior(ServiceEndpoint endpoint, EndpointDispatcher endpointDispatcher)
        {
            MyMessageInspector inspector = new MyMessageInspector();
            endpointDispatcher.DispatchRuntime.MessageInspectors.Add(inspector);
        }

        void IEndpointBehavior.Validate(ServiceEndpoint endpoint)
        {
            //throw new NotImplementedException();
        }
    }
}
```

#### 将自定义 IEndpointBehavior 扩展到 BehaviorExtensionElement

```csharp
using System.ServiceModel.Configuration;

namespace CustomBasicValidator
{
    public class MyMessageInspectorEndpointBehaviorExtensionElement : BehaviorExtensionElement
    {
        public override Type BehaviorType => typeof(MyMessageInspectorEndpointBehavior);

        protected override object CreateBehavior()
        {
            return new MyMessageInspectorEndpointBehavior();
        }
    }
}
```

#### 配置使用 Transport 安全模式的服务终结点

```csharp
<system.serviceModel>
    <services>
      <service name="CustomBasicValidator.MySecureService">
        <endpoint address="" binding="webHttpBinding" bindingConfiguration="Secure-webHttpBinding"
          behaviorConfiguration="MessageInspectorEndpointBehavior" contract="CustomBasicValidator.IMySecureService" />
      </service>
      <service name="CustomBasicValidator.MyUnSecureService">
        <endpoint address="" binding="webHttpBinding"
          behaviorConfiguration="MessageInspectorEndpointBehavior" contract="CustomBasicValidator.IMyUnSecureService" />
      </service>
    </services>

    <bindings>
      <webHttpBinding>
        <binding name="Secure-webHttpBinding">
          <security mode="Transport">
            <transport clientCredentialType="None" />
          </security>
        </binding>
      </webHttpBinding>
    </bindings>

    <behaviors>
      <serviceBehaviors>
        <behavior>
          <serviceMetadata httpGetEnabled="true" httpsGetEnabled="true"/>
          <serviceDebug includeExceptionDetailInFaults="false"/>
        </behavior>
      </serviceBehaviors>
    <endpointBehaviors>
        <behavior name="MessageInspectorEndpointBehavior">
          <MessageInspectorEndpointBehaviorExtensionElement />
          <webHttp defaultBodyStyle="Wrapped" defaultOutgoingResponseFormat="Json"/>
        </behavior>
      </endpointBehaviors>
    </behaviors>

  <extensions>
      <behaviorExtensions>
        <add name="MessageInspectorEndpointBehaviorExtensionElement" type="CustomBasicValidator.MyMessageInspectorEndpointBehaviorExtensionElement, CustomBasicValidator"/>
      </behaviorExtensions>
    </extensions>
  </system.serviceModel>
</configuration>
```

完成配置之后，将服务终结点设置为 **https://** 并将端口设置为 **44300-44399** ，配合 "IIS Express Development Certificate" 证书就可以在 Visual Studio 中调试了。 如果 "IIS Express Development Certificate" 证书丢失可以在 **控制面板** 通过 **修复** **IIS Express** 解决

#### 使用 Basic 进行身份验证

因为 MyMessageInspector.cs 中对 **Basic** 进行了验证，所以调用终结点时必须使用 **Basic** 进行身份验证，Basic 最终会包含在请求头内。 而是否应用 **Secure-webHttpBinding** bindingConfiguration 的区别主要在于是请求和响应否会以明文方式传输。

```csharp
using System.Net.Http;
using System.Text;

namespace AuthenticateBasic.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
      string Authorization = "Basic " + Convert.ToBase64String(Encoding.Default.GetBytes("Administrator" + ":" + "000000"));
      HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Add("Authorization", Authorization);


            HttpContent unSecureContent = new StringContent("{'value': 2020}");
      HttpResponseMessage unSecureresponse = client.PostAsync("http://localhost:3048/MySecureService.svc/GetData", unSecureContent).Result;
      ViewBag.myUnSecureServiceClient = unSecureresponse.Content.ReadAsStringAsync().Result;

            HttpContent secureContent = new StringContent("{'value': 2096}");
      HttpResponseMessage secureresponse = client.PostAsync("https://localhost:44301/MySecureService.svc/GetData", secureContent).Result;
      ViewBag.mySecureServiceClient = secureresponse.Content.ReadAsStringAsync().Result;

            return View();
        }
    }
}
```

### 基于 wsHttpBinding 的 Message 安全模式

![WCF 传输安全][]

服务端使用 X.509 证书保证消息安全，并要求客户端提供用户名和密码作为凭据。

#### 创建自定义用户名和密码验证程序

创建一个从 UserNamePasswordValidator 派生的类。通过重写 Validate 方法，实现自定义身份验证方案。

```csharp
using System.IdentityModel.Selectors;

namespace CustomUserNamePasswordValidator
{
    public class MyUserNamePasswordValidator : UserNamePasswordValidator
    {  
        public override void Validate(string userName, string password)
        {
            if(userName == null || password == null)
            {
                throw new ArgumentNullException();
            }

            if(!(userName == "Administrator" && password == "000000"))
            {
                throw new FaultException("未知的用户名或不正确的密码(Unknown Username or Incorrect Password)");
            }
        }
    }
}
```

#### 创建服务端使用的开发证书

因为 **服务需要使用 X.509 证书进行身份验证** ，所以需要创建一个服务端使用的开发证书

关于证书： 证书的主要功能是向其他各方验证证书所有者的身份。 证书包含所有者的公钥，所有者保留着私钥。 公钥可用来对发送给证书所有者的消息进行加密。 只有所有者才能访问私钥，因此，只有所有者才能解密这些消息。

创建开发证书 以管理员权限运行 "VisualStudio 开发人员命令提示符"

创建一个自签名根证书并导出私钥 -n 指定主题名称。约定是为主题名的 "公用名" 添加前缀 "CN=" -r 指定证书将自签名 -sv 指定包含私钥容器的文件 (.pvk 是微软的双证书文件；.cer 不包含私钥只能用于导入)

```shell
makecert -n "CN=MyRootCA" -r -sv C:\MyRootCA.pvk C:\MyRootCA.cer
```

创建一个由根证书签名的新证书 (不包括私钥) -sk 指定包含私钥容器的文件 -iv 指定颁发者的私钥文件 -n 指定主题名称。 约定是为主题名的 "公用名" 添加前缀 "CN =" -ic 指定颁发者的证书位置 -sr 指定新证书的存储位置 (LocalMachine、CurrentUser) -ss 指定新证书的存储区 (My、TrustedPeople、TrustedPublisher…)

```shell
makecert -sk MyClientCA -iv C:\MyRootCA.pvk -n "CN=MyClientCA" -ic C:\MyRootCA.cer -sr CurrentUser -ss TrustedPeople
```

创建一个由根证书签名的新证书 (包括私钥) -iv 指定颁发者的私钥文件 -n 指定主题名称。 约定是为主题名的 "公用名" 添加前缀 "CN =" -ic 指定颁发者的证书位置 -sr 指定新证书的存储位置 (LocalMachine、CurrentUser) -ss 指定新证书的存储区 (My、TrustedPeople、TrustedPublisher…) -pe 将密钥标记为可导出 -sky 指定密钥类型 (exchange 交换密钥、signature 签名密钥)

```shell
makecert -iv C:\MyRootCA.pvk -n "CN=MyServerCA" -ic C:\MyRootCA.cer -sr LocalMachine -ss TrustedPeople -pe -sky exchange
```

注意： 发布之后访问服务如果提示 "密钥集不存在" 是用户 `IIS_IUSERS` 没有访问密钥的权限 需要在:"C:\DocumentsandSettings\AllUsers\ApplicationData\Microsoft\Crypto\RSA\MachineKeys" 目录下找到导入的密钥并为用户 `IIS_IUSERS` 添加读取权限

#### 配置使用 Message 安全模式的服务终结点

```csharp
<system.serviceModel>
    <services>
      <service behaviorConfiguration="Secure-serviceBehavior" name="CustomUserNamePasswordValidator.MySecureService">
        <endpoint address="" binding="wsHttpBinding" bindingConfiguration="Secure-wsHttpBinding"
          contract="CustomUserNamePasswordValidator.IMySecureService" />
      </service>
      <service behaviorConfiguration="unSecure-serviceBehavior" name="CustomUserNamePasswordValidator.MyUnSecureService">
        <endpoint address="" binding="wsHttpBinding" bindingConfiguration="unSecure-wsHttpBinding"
          contract="CustomUserNamePasswordValidator.IMyUnSecureService" />
      </service>
    </services>

    <bindings>
      <wsHttpBinding>
        <binding name="unSecure-wsHttpBinding">
          <security mode="None" />
        </binding>
        <binding name="Secure-wsHttpBinding">
          <security mode="Message">
            <message clientCredentialType="UserName" />
          </security>
        </binding>
      </wsHttpBinding>
    </bindings>

    <behaviors>
      <serviceBehaviors>
        <behavior name="unSecure-serviceBehavior">
          <serviceMetadata httpGetEnabled="true" httpsGetEnabled="true"/>
          <serviceDebug includeExceptionDetailInFaults="false"/>
        </behavior>
        <behavior name="Secure-serviceBehavior">
          <serviceMetadata httpGetEnabled="true" httpsGetEnabled="true"/>
          <serviceDebug includeExceptionDetailInFaults="false"/>
          <serviceCredentials>
            <userNameAuthentication userNamePasswordValidationMode="Custom" customUserNamePasswordValidatorType="CustomUserNamePasswordValidator.MyUserNamePasswordValidator, CustomUserNamePasswordValidator"/>
            <serviceCertificate  findValue="7740653e507e059545bcb4a3858c9768"
                                 storeLocation="LocalMachine"
                                 storeName="TrustedPeople"
                                 x509FindType="FindBySerialNumber"/>
          </serviceCredentials>
        </behavior>
      </serviceBehaviors>
    </behaviors>
  </system.serviceModel>
</configuration>
```

#### 使用用户名和密码进行身份验证

客户端可以直接调用应用了 **unSecure-serviceBehavior** 行为的服务或终结点，但对于应用了 **Secure-serviceBehavior** 行为的服务或终结点则必须提供 **用户名和密码** 以进行身份验证，UserName 和 Password 最终会包含在 SOAP 信封头内。

```csharp
using AuthenticateUserNamePassword.MySecureService;
using AuthenticateUserNamePassword.MyUnSecureService;

namespace AuthenticateUserNamePassword.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            MyUnSecureServiceClient myUnSecureServiceClient = new MyUnSecureServiceClient();
            ViewBag.myUnSecureServiceClient = myUnSecureServiceClient.GetData(2020);

            MySecureServiceClient mySecureServiceClient = new MySecureServiceClient();
            mySecureServiceClient.ClientCredentials.UserName.UserName = "Administrator";
            mySecureServiceClient.ClientCredentials.UserName.Password = "000000";
            ViewBag.mySecureServiceClient = mySecureServiceClient.GetData(2096);

            return View();
        }
    }
}
```

## 参考

* [系统提供的绑定][]
* [Windows Communication Foundation 安全性][]
* [传输安全][]
* [消息检查器][]
* [扩展性][]
* [HTTP 传输安全][]
* [IIS Express 概述][]
* [处理在 IIS Express 中 URL 绑定失败][]
* [使用 SSL 配置承载 IIS 的 WCF 服务][]
* [WCF 中的消息安全][]
* [使用自定义用户名和密码验证程序][]
* [使用证书][]

<!-- links -->
[系统提供的绑定]: https://docs.microsoft.com/zh-cn/dotnet/framework/wcf/system-provided-bindings
[Windows Communication Foundation 安全性]: https://docs.microsoft.com/zh-cn/dotnet/framework/wcf/feature-details/security
[传输安全]: https://docs.microsoft.com/zh-cn/dotnet/framework/wcf/feature-details/transport-security
[消息检查器]: https://docs.microsoft.com/zh-cn/dotnet/framework/wcf/samples/message-inspectors
[扩展性]: https://docs.microsoft.com/zh-cn/dotnet/framework/wcf/samples/extensibility
[HTTP 传输安全]: https://docs.microsoft.com/zh-cn/dotnet/framework/wcf/feature-details/http-transport-security
[IIS Express 概述]: https://docs.microsoft.com/zh-cn/iis/extensions/introduction-to-iis-express/iis-express-overview
[处理在 IIS Express 中 URL 绑定失败]: https://docs.microsoft.com/zh-cn/iis/extensions/using-iis-express/handling-url-binding-failures-in-iis-express
[使用 SSL 配置承载 IIS 的 WCF 服务]: https://docs.microsoft.com/zh-cn/dotnet/framework/wcf/feature-details/how-to-configure-an-iis-hosted-wcf-service-with-ssl
[WCF 中的消息安全]: https://docs.microsoft.com/zh-cn/dotnet/framework/wcf/feature-details/message-security-in-wcf
[使用自定义用户名和密码验证程序]: https://docs.microsoft.com/zh-cn/dotnet/framework/wcf/feature-details/how-to-use-a-custom-user-name-and-password-validator
[使用证书]: https://docs.microsoft.com/zh-cn/dotnet/framework/wcf/feature-details/working-with-certificates
<!-- images -->
[WCF 传输安全]: /_posts/note/.markdown/2018-N02_WCF-传输安全/images/01.gif "WCF-传输安全"
<!-- files -->
