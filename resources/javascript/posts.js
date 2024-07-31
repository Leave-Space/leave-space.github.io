
$(function () {
    var pathname = decodeURI(location.pathname).toLowerCase();
    var category = pathname.substring(0, pathname.indexOf("/", 1))
    var href = category.concat("/posts.json");

    $.ajax({
        url: href,
        method: "get",
        success: (data => {
            factory(data);
        }),
        error: (error => {
        })
    })
})

function factory(data) {
    var search = decodeURI(location.search.substring(1)).toLowerCase().replace("/", "");
    var pathname = decodeURI(location.pathname).toLowerCase();
    var url = decodeURI(location.origin + pathname).toLowerCase();
    var hash = decodeURI(location.hash);
    var title = $("title");
    var isLife = false;
    var isNote = false;
    var isTemp = false;
    var dataList;

    if (pathname == "/life/open") {
        title.text("LIFE");
        isLife = true;
        dataList = data.life;
    }
    else if (pathname == "/note/open") {
        title.text("NOTE");
        isNote = true;
        dataList = data.note;
    }
    else if (pathname == "/temp/open") {
        title.text("TEMP");
        isTemp = true;
        dataList = data.temp;
    }
    else {
        dataList = data;
    }

    var html = $("html");
    var contentPanel = $(".content-panel");
    var tocPanel = $(".toc-panel");
    var tocButton = $(".toc-button");
    var tocList = $(".toc-list");
    var tocContent = $(".toc-content");
    var content = $(".content");

    if (search == "") {
        var mainText;
        if (isLife) {
            mainText = "LIFE";
        }
        else if (isNote) {
            mainText = "NOTE";
        }
        else if (isTemp) {
            mainText = "TEMPORARY";
        }
        else {
        }
        listPage(content, mainText, "目录")

        // var downloadhref;
        // if (isLife) {
        //     downloadhref = "Life.png";
        // }
        // else if (isNote) {
        //     downloadhref = "Note.png";
        // }
        // else if (isTemp) {
        //     downloadhref = "Temporary.png";
        // }
        // else {
        // }
        // var download = downloadButton(downloadhref);
        // download.appendTo(contentPanel);

        var year;
        var postList = $("#postlist");

        for (var item of dataList) {
            if ((typeof item) == "object") {
                if (item.year != year) {
                    var header = unitHeader(item.year);
                    header.appendTo(postList);

                    year = item.year;
                }

                var href = url + "?" + item.name;
                var body = unitBody(item.date, href, item.name, item.name);
                body.appendTo(postList);
            }
        };
    }
    else {
        contentPanel.addClass("search");
        tocPanel.addClass("search");

        var postItem;
        for (var item of dataList) {
            if ((typeof item) == "object") {
                if (item.name.toLowerCase() == search) {
                    postItem = item;
                }
            }
        }

        if (!postItem) {
            location.href = pathname;
        }

        $.ajax({
            url: postItem.path,
            method: "get",
            success: (data => {
                if (postItem.type == "markdown") {
                    title.text(postItem.name);
                    content.empty();

                    markdownPage(content, data);

                    if (postItem.download != "") {
                        var download = downloadButton(postItem.download);
                        download.appendTo(contentPanel);
                    }

                    var back = backButton();
                    back.appendTo(contentPanel);
                }
                else if (postItem.type == "html") {
                    // html.html(data);
                    var headStart = data.indexOf("<head>") + 6;
                    var headEnd = headStart + data.substring(headStart).indexOf("</head>");
                    var bodyStart = headEnd + data.substring(headEnd).indexOf("<body>") + 6;
                    var bodyEnd = bodyStart + data.substring(bodyStart).lastIndexOf("</body>");

                    var headContent = data.substring(headStart, headEnd);
                    var bodyContent = data.substring(bodyStart, bodyEnd);

                    var head = html.find("head");
                    var body = html.find("body");
                    head.html(headContent);
                    body.html(bodyContent);


                    contentPanel = $(".content-panel");
                    tocPanel = $(".toc-panel");
                    tocButton = $(".toc-button");
                    tocList = $(".toc-list");
                    tocContent = $(".toc-content");

                    contentPanel.addClass("search");
                    tocPanel.addClass("search");
                }
                else {
                }

                content = $(".content");

                toc(content, tocButton, tocList, tocContent);

                if (hash != "") {
                    var hashTage = $("a[href='" + hash + "']");
                    if (hashTage.length > 0) {
                        hashTage.get(0).click();
                    }
                }
            }),
            error: (error => {
            })
        })
    }
}

function listPage(contentElement, mainText, subText) {
    var content = $(contentElement);

    var mainTitle = $('<h1 class="title"></h1>');
    var subtitle = $('<h2 class="subtitle"></h2>');
    var postList = $('<ul id="postlist"></ul>');
    mainTitle.text(mainText);
    subtitle.text(subText);

    mainTitle.appendTo(content);
    subtitle.appendTo(content);
    postList.appendTo(content);
}


function unitHeader(headline) {
    var header = $("<li></li>");
    header.addClass("unit-header");

    if (headline) {
        var title = $("<span></span>");
        title.addClass("unit-title");
        title.text(headline);

        title.appendTo(header);
    }

    return header;
}

function unitBody(key, href, title, text) {
    var body = $("<li></li>");

    var bodyKey = $("<span></span>");
    bodyKey.addClass("unit-key");
    bodyKey.text(key);

    var content = $("<a></a>");
    content.attr("href", href);
    content.attr("target", "_self");
    content.attr("title", title);
    content.text(text);

    bodyKey.appendTo(body);
    body.append(" ");
    content.appendTo(body);

    return body;
}

function downloadButton(href) {
    var download = $("<a></a>");
    download.attr("href", href);
    download.attr("target", "_blank");
    download.attr("title", "下载");
    download.attr("download", href.split("/").pop());

    var downloadImg = $("<img>");
    downloadImg.attr("src", "/resources/images/download.svg");
    downloadImg.addClass("download-button");

    downloadImg.appendTo(download);

    return download;
}

function backButton() {
    var back = $("<a></a>");
    back.attr("href", "javascript: window.history.back();");
    back.attr("target", "_self");
    back.attr("title", "返回");

    var backImg = $("<img>");
    backImg.attr("src", "/resources/images/back.svg");
    backImg.addClass("back-button");

    backImg.appendTo(back);

    return back;
}

var showdownConfig = {
    noHeaderId: "true",
    omitExtraWLInCodeBlocks: "true",
    openLinksInNewWindow: "true",
    strikethrough: "true",
    tables: "false",
    tasklists: "true"
}

function markdownConvert(markdown) {
    var converter = new showdown.Converter(showdownConfig);
    var markdownResult = converter.makeHtml(markdown);
    return markdownResult;
}

function markdownPage(contentElement, markdown) {
    var content = $(contentElement);

    var markdownContent = $("<div></div>");
    markdownContent.addClass("markdown-content");

    var markdownResult = markdownConvert(markdown);
    markdownContent.html(markdownResult);
    markdownContent.find("img").parent("p").addClass("image");
    markdownContent.find("table").each(function (index, item) {
        var row = $("<div></div>");
        row.addClass("markdown-table");

        $(item).wrap(row);
    });

    var placeholder = $("<div></div>");
    placeholder.css("height", "2em");

    markdownContent.appendTo(content);
    placeholder.appendTo(content);
}

function toc(contentElement, tocButtonElement, tocListElement, tocContentElement) {
    var headerLine = new Object();

    contentElement.find("h1,h2,h3,h4,h5,h6").each(function (index, item) {
        var that = $(item);
        var tageName = item.localName;
        var tageNumber = tageName.substring(1);

        var headerItem = {
            id: item.innerText,
            type: item.localName,
            text: item.innerText
        };

        var symbol = [
            " ",
            "、"
        ];

        $(symbol).each(function (index, item) {
            headerItem.id = headerItem.id.split(item).join("-");
        })

        var endpoint = headerLine;
        var id = "";
        for (var i = 1; i < tageNumber; i++) {
            endpoint = endpoint.children.slice(-1)[0];
            if (i == 1) {
                id += endpoint.id + "_";
            }
            else {
                id = endpoint.id + "_";
            }
        }
        id += headerItem.id;

        headerItem.id = id;

        if (tageNumber > 1) {
            item.id = id;
            that.empty();
            var itemChildren = $('<a target="_self"></a>');
            itemChildren.text(headerItem.text)
            itemChildren.attr("href", "#" + id);
            itemChildren.appendTo(that);
        }

        if ("children" in endpoint) {
        }
        else {
            endpoint.children = new Array();
        }

        endpoint.children.push(headerItem);
    });

    var tocData = headerLine;
    if (tocData.children.length == 1) {
        tocData = tocData.children[0];
    }
    else if (tocData.children.length > 1) {
        tocData.children = tocData.children.slice(1);
    }

    var menu = tocMenu(tocData, "");

    $(menu).appendTo(tocContentElement);

    tocToggle(contentElement, tocButtonElement, tocListElement, tocContentElement);
}

function tocMenu(data, prefix) {
    var ul = $("<ul></ul>");

    $(data.children).each(function (index, item) {
        var itemPrefix = prefix + (index + 1) + ".";

        var li = $("<li></li>");

        var a = $('<a target="_self"></a>');
        a.attr("href", "#" + item.id);

        var span = $("<span></span>");
        span.text(itemPrefix);

        span.appendTo(a);
        a.html(a.html() + item.text);
        a.appendTo(li);

        if ("children" in item) {
            var children = tocMenu(item, itemPrefix);

            children.appendTo(li);
        }

        li.appendTo(ul);
    })

    return ul;
}

function tocToggle(contentElement, tocButtonElement, tocListElement, tocContentElement) {
    $(window).on("resize", function () {
        var that = tocButtonElement;
        var body = $("body");

        if (window.innerWidth >= 1200) {
            that.removeClass("to-close");

            tocListElement.css("left", "auto");

            body.css("overflow-y", "auto");
        }
        else {
            if (that.hasClass("to-close")) {
                tocListElement.css("left", "0");

                body.css("overflow-y", "hidden");
            }
            else {
                tocListElement.css("left", "-100vw");

                body.css("overflow-y", "auto");
            }
        }
    });

    tocButtonElement.unbind("click");
    tocButtonElement.bind("click", function () {
        var that = $(this);
        var body = $("body");

        if (that.hasClass("to-close")) {
            that.removeClass("to-close");
            tocListElement.css("left", "-100vw");

            body.css("overflow-y", "auto");
        }
        else {
            that.addClass("to-close");
            tocListElement.css("left", "0");

            body.css("overflow-y", "hidden");
        }
    });

    tocContentElement.find("a").unbind("click");
    tocContentElement.find("a").bind("click", function () {
        tocClass(this, tocButtonElement, tocListElement, tocContentElement);
    });

    contentElement.find("a[href^='#']").unbind("click");
    contentElement.find("a[href^='#']").bind("click", function () {
        tocClass(this, tocButtonElement, tocListElement, tocContentElement);
    });
}


function tocClass(tocItemElement, tocButtonElement, tocListElement, tocContentElement) {
    var that = $(tocItemElement);

    var href = that.attr("href");
    var body = $("body");
    var tocItem = tocContentElement.find("a[target='_self'][href='" + href + "']");

    tocContentElement.find("a").removeClass("browse");
    tocItem.addClass("browse");

    var tocNext = tocItem.next("ul");
    var tocParent = tocItem.parents("ul");

    if (tocNext.length > 0) {
        var tocNextDisplay = tocNext.css("display");

        if (tocNextDisplay.toLowerCase() == "block") {
            tocNextDisplay = "none";
        }
        else {
            tocNextDisplay = "block";
        }

        tocNext.css("display", tocNextDisplay);
    }
    if (tocParent.length > 0) {
        tocParent.css("display", "block");
    }

    if (tocNext.length <= 0) {
        if (window.innerWidth >= 1200) {

        }
        else {
            if (tocButtonElement.hasClass("to-close")) {
                tocButtonElement.removeClass("to-close");
                tocListElement.css("left", "-100vw");

                body.css("overflow-y", "auto");
            }
        }
    }
}
