// Colors JS
(function(n){var h={},k={};h.render=function(a,b){var d={},c;if("object"==typeof a)return"rgb"===b&&(c=["R","G","B","RGB"]),"hsv"===b&&(c=["H","S","V","HSV"]),"hsl"===b&&(c=["H","S","L","HSL"]),d[c[0]]=a[0],d[c[1]]=a[1],d[c[2]]=a[2],d[c[3]]=a[0]+" "+a[1]+" "+a[2],d.a=a,d};h.paddedHex=function(a){a=(10>a?"0":"")+a.toString(16);return 1===a.length?"0"+a:a};k.rgb2hex=function(a,b,d){a=h.paddedHex(a);b=void 0!==b?h.paddedHex(b):a;d=void 0!==d?h.paddedHex(d):a;return"#"+a+b+d};k.hex2rgb=function(a){a=
a.replace("#","");return 6===a.length?h.render([parseInt(a.substr(0,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(4,2),16)],"rgb"):parseInt(a,16)};k.hex2hsv=function(a){a="#"==a.charAt(0)?a.substring(1,7):a;var b=parseInt(a.substring(0,2),16)/255,d=parseInt(a.substring(2,4),16)/255;a=parseInt(a.substring(4,6),16)/255;var c=0,e=0,g=0,e=Math.min(b,d,a),f=Math.max(b,d,a),l=f-e,k,m,g=f;0===l?e=c=0:(e=l/f,k=((f-b)/6+l/2)/l,m=((f-d)/6+l/2)/l,l=((f-a)/6+l/2)/l,b==f?c=l-m:d==f?c=1/3+k-l:a==f&&(c=2/
3+m-k),0>c&&(c+=1),1<c&&(c-=1));return h.render([Math.round(360*c),Math.round(100*e),Math.round(100*g)],"hsv")};k.hsv2rgb=function(a,b,d){var c=[],e,g,f;"object"==typeof a?(e=a[0],b=a[1],a=a[2]):(e=a,a=d);b/=100;a/=100;d=Math.floor(e/60%6);g=e/60-d;e=a*(1-b);f=a*(1-g*b);b=a*(1-(1-g)*b);switch(d){case 0:c=[a,b,e];break;case 1:c=[f,a,e];break;case 2:c=[e,a,b];break;case 3:c=[e,f,a];break;case 4:c=[b,e,a];break;case 5:c=[a,e,f]}return h.render([Math.min(255,Math.floor(256*c[0])),Math.min(255,Math.floor(256*
c[1])),Math.min(255,Math.floor(256*c[2]))],"rgb")};k.rgb2hsl=function(a,b,d){var c,e,g,f,k=(g+e)/2;"object"==typeof a?(c=a[0],b=a[1],a=a[2]):(c=a,a=d);c/=255;b/=255;a/=255;g=Math.max(c,b,a);e=Math.min(c,b,a);if(g==e)f=e=0;else{d=g-e;e=0.5<k?d/(2-g-e):d/(g+e);switch(g){case c:f=(b-a)/d+(b<a?6:0);break;case b:f=(a-c)/d+2;break;case a:f=(c-b)/d+4}f/=6}return h.render([Math.floor(360*f),Math.floor(100*e),Math.floor(100*k)],"hsl")};k.hsv2hsl=function(a,b,d){var c,e,g,f;"object"==typeof a?(c=a[0],e=a[1],
a=a[2]):(c=a,e=b,a=d);a=this.hsv2rgb(c,e,a);c=a.R/255;e=a.G/255;a=a.B/255;g=Math.max(c,e,a);f=Math.min(c,e,a);g!=f&&(b=0.5>L?(g-f)/(g+f):(g-f)/(2-g-f),H=c==g?(e-a)/(g-f):e==g?2+(a-c)/(g-f):4+(c-e)/(g-f));return h.render([Math.floor(H),Math.floor(b),Math.floor(d)],"hsl")};k.name2hex=function(a){a=a.toLowerCase();a={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",
brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",
darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",
khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",
maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",
paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",
teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}[a];return void 0===a?"Invalid Color Name":a};k.name2rgb=function(a){a=this.name2hex(a);return/^[a-fA-F0-9#]{7}$/.test(a)?this.hex2rgb(a):h.render(["Invalid Color Name","Invalid Color Name","Invalid Color Name"],"rgb")};k.name2hsv=function(a){a=this.name2hex(a);return/^[a-fA-F0-9#]{7}$/.test(a)?this.hex2hsv(a):h.render(["Invalid Color Name",
"Invalid Color Name","Invalid Color Name"],"hsv")};k.complement=function(a,b,d){var c;if("string"==typeof a&&/(#([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)/.test(a))return a=a.replace("#",""),b="#",6===a.length&&(b+=h.paddedHex(255-this.hex2rgb(a.substr(0,2))),b+=h.paddedHex(255-this.hex2rgb(a.substr(2,2))),b+=h.paddedHex(255-this.hex2rgb(a.substr(4,2)))),3===a.length&&(b+=h.paddedHex(255-this.hex2rgb(a.substr(0,1)+a.substr(0,1))),b+=h.paddedHex(255-this.hex2rgb(a.substr(1,1)+a.substr(1,1))),b+=h.paddedHex(255-
this.hex2rgb(a.substr(2,1)+a.substr(2,1)))),b;void 0!==a&&void 0!==b&&void 0!==d&&(c=[255-a,255-b,255-d]);"object"==typeof a&&(c=[255-a[0],255-a[1],255-a[2]]);return h.render(c,"rgb")};k.rand=function(a){var b,d;if("hex"===a||void 0===a){a="";for(d=0;6>d;d++)b=Math.floor(16*Math.random()),a+="0123456789abcdef".substring(b,b+1);return"#"+a}if("rgb"==a)return a=Math.floor(-254*Math.random()+255),b=Math.floor(-254*Math.random()+255),d=Math.floor(-254*Math.random()+255),h.render([a,b,d],"rgb")};n.Colors=
n.$c=k})(window);

// Prototypes
function ToggleVisibility(node)
{
    node.toggleClass("hide-toggle");
}

function Category(name, clues)
{
    this.Name = name;
    this.Clues = clues;
}

function Clue(clueNode, answerNode, value, column, row)
{
    this.Clue = clueNode.clone();
    this.Answer = answerNode.clone();
    this.Value = value;
    this.Column = column;
    this.Row = row;
    this.IsDailyDouble = false;
}

function Template(node)
{
    if (node != null) {
        this.Node = node.clone();
    }
    this.Spawn = function () {
        return SpawnTemplate(this);
    }
    this.Clone = function () {
        var clone = new Template(null);
        clone.Node = this.Node.clone();
        return clone;
    }
}

function Popup(node, popupName, overlayName)
{
    if (node != null)
    {
        var popup = $("<div class='popup'></div>");
        popup.addClass(popupName + "-popup-container");
        var overlay = templates[overlayName].Spawn().Node;
        overlay.addClass("overlay");
        popup.append(overlay);
        popup.append(node.clone());

        this.Node = popup;
    }

    this.Spawn = function () {
        return SpawnTemplate(this);
    }
    this.CloseCallbacks = [];
    this.Dismiss = function (dismissArgument) {
        for (var i in this.CloseCallbacks) {
            this.CloseCallbacks[i](dismissArgument);
        }
    }
    this.Clone = function () {
        var clone = new Popup(null);
        clone.Node = this.Node.clone();
        return clone;
    }
}

function SpawnTemplate(template)
{
    return template.Clone();
}

function Team(name, startingScore)
{
    this.Name = name;
    this.Score = startingScore;
    this.Node = null;
    this.Wager = 0;
    this.Color = "black";
    this.Opacity = 0.3;
    this.SetName = function (name) {
        this.Name = name;
        this.Node.find(".team-name").addBack(".team-name").val(name);
    }
    this.SetScore = function (score) {
        this.Score = score;
        this.Node.find(".team-score").addBack(".team-score").val(score);
    }
    this.SetWager = function (wager) {
        this.Wager = wager;
        var buttons = this.Node.find(".correct-button, .incorrect-button");
        if (wager > 0) {
            buttons.removeClass("disabled");
        } else {
            buttons.addClass("disabled");
        }
    }
    this.SetColor = function (color) {
        var rgb = $c.hex2rgb(color.Color);
        this.Color = color;
        var opacityColor = "rgba(" + rgb.R + "," + rgb.G + "," + rgb.B + "," + this.Opacity + ")";
        this.Node.find(".team-background").addBack(".team-background").css("background-color", opacityColor);
    }
    this.SetOpacity = function (opacity) {
        this.Opacity = opacity;
        this.SetColor(this.Color);
    }
    this.GetCorrectButton = function() { return this.Node.find(".correct-button"); }
    this.GetIncorrectButton = function() { return this.Node.find(".incorrect-button"); }
    this.ApplyWager = function (multiplier) { this.SetScore(this.Score + this.Wager * multiplier); }
}

function TeamColor(color, minOpacity, maxOpacity) {
    this.Color = color;
    this.MinOpacity = minOpacity;
    this.MaxOpacity = maxOpacity;
    this.Clone = function() {
        return new TeamColor(this.Color, this.MinOpacity, this.MaxOpacity);
    }
}

// RETRIEVE DATA
function RetrieveClue(clueNode, baseMultiplier, categoryMultiplier, category, categoryIndex, clueIndex) {
    var clueVal = clueNode.find(".clue").clone();
    var answerVal = clueNode.find(".answer").clone();
    var multiplier = 100;
            
    if (baseMultiplier && baseMultiplier > 0) multiplier = baseMultiplier;
    if (categoryMultiplier && categoryMultiplier > 0) multiplier = categoryMultiplier;

    var defaultItemVal = (clueIndex + 1) * multiplier;
    var givenItemVal = parseInt(clueNode.data("value"));

    if (givenItemVal && givenItemVal != 0) {
        defaultItemVal = givenItemVal;
    }
    
    var clueNode = GenerateNodeFromData(clueVal, templates["clue-node"].Spawn().Node);
    clueNode.addClass("clue");
    var answerNode = GenerateNodeFromData(answerVal, templates["clue-node"].Spawn().Node);
    answerNode.addClass("answer");

    var item = new Clue(clueNode, answerNode, defaultItemVal, categoryIndex, clueIndex);
    return item;
}

function RetrieveCategory(categoryNode, baseMultiplier, categoryIndex, items) {
    var category = new Category(categoryNode.data("name"), []);
    var categoryMultiplier = parseInt(categoryNode.data("multiplier"));
    categoryNode.children(":not(.example)").each(function (i, itemVal) {
        var item = RetrieveClue($(itemVal), baseMultiplier, categoryMultiplier, category, categoryIndex, i);
        if (items) items.push(item);
        category.Clues[i] = item;
    });
    return category;
}

function RetrieveCategories(categoriesNode) {
    var items = [];
    var categories = [];
    var baseMultiplier = parseInt(categoriesNode.data("multiplier"));
    categoriesNode.children(":not(#final-jeopardy):not(.example)").each(function (i, catVal) {
        categories[i] = RetrieveCategory($(catVal), baseMultiplier, i, items);
    });

    var numberDailyDoubles = parseInt(categoriesNode.data("daily-doubles"));
    var dailyDoublesList = [];
    for (var i = 0; i < numberDailyDoubles; i++)
    {
        var index;
        do 
        {
            index = Math.floor(Math.random() * (items.length + 1));
        } while (dailyDoublesList.indexOf(index) >= 0);
        
        dailyDoublesList.push(index);
        items[index].IsDailyDouble = true;
    }
    Debug("DAILY DOUBLES: " + dailyDoublesList.map(function(i) { return items[i].Value }));
    return categories;
}

function RetrieveFinalJeopardy(categoriesNode) {
    var category;
    categoriesNode.children("#final-jeopardy").each(function (i, catVal) {
        category = RetrieveCategory($(catVal), 0, 0, null);
    });
    return category;
}

function RetrieveTemplates(templateNode)
{
    var templates = [];
    templateNode.children().each(function (i, value) {
        var name = $(value).data("template");
        templates[name] = new Template($(value).clone());
    });
    templateNode.remove();
    return templates;
}

function RetrievePopups(popupNode, overlayName)
{
    var popups = [];
    popupNode.children().each(function (i, value) {
        var name = $(value).data("popup");
        var popup = new Popup($(value), name, overlayName);
        popups[name] = popup;
    });
    popupNode.remove();
    return popups;
}

function GenerateNodeFromData(dataNode, containerNode)
{
    var item = null;
    switch (dataNode.data("type")) {
        default:
        case "text":
            item = dataNode.contents();
            break;

        case "image":
            var imageSource = dataNode.data("source");
            var img = $("<img />");
            img.attr("src", imageSource);
            item = img;
            break;

        case "audio":
            var audioSource = dataNode.data("source");
            var audioType = dataNode.data("audio-type");
            item = $("<audio controls />");
            item.append("<source>");
            item.find("source").attr("src", audioSource).attr("type", audioType);
    }
    containerNode.find(".container-node-target").addBack(".container-node-target").append(item)
    return containerNode;
}


function GenerateClueList(categories)
{
    var outerList = $("<ul />");
    for (var i in categories) {
        var category = categories[i];
        var outerListItem = $("<li />");
        var innerList = $("<ul />");
        outerListItem.append($("<h1>" + category.Name + "</h1>"));
        outerListItem.append(innerList);
        for (var j in category.Clues) {
            var item = category.Clues[j];
            var innerListItem = $("<li />");
            innerListItem.append(item.Clue);
            innerListItem.append(item.Answer);
            innerListItem.append($("<div>" + item.Value + "</div>"));
            innerList.append(innerListItem);
        }
        outerList.append(outerListItem);
    }
    $("body").append(outerList);
}

function GenerateClueTable(clueTable, categories)
{
    var currentNumberOfRows = clueTable.contents(":not(.category-row)").length;
    for (var i in categories) {
        var category = categories[i];
        var categoryTitle = templates["category-cell"].Spawn().Node;
        categoryTitle.find(".container").text(category.Name);
        clueTable.contents(".row.category-row").append(categoryTitle);
        for (var j in category.Clues) {
            var item = category.Clues[j];
            while (j >= currentNumberOfRows)
            {
                clueTable.append(templates["clue-row"].Spawn().Node);
                currentNumberOfRows++;
            }

            var currentRow = clueTable.contents(".row:not(.category-row):eq(" + j +")");
            while (i > currentRow.contents().length)
            {
                currentRow.append(templates["empty-cell"].Spawn().Node);
            }

            var clue = templates["clue-cell"].Spawn().Node;
            clue.find(".container").text(item.Value);
            currentRow.append(clue);
            
            if (item.IsDailyDouble) {
                clue.click(DailyDoubleWagerPopupFunction("daily-double", clue, category, item));
            } else {
                clue.click(ClueBoxClickFunction(clue, category, item, item.Value));
            }
        }
    }
}

var revealAnswer = null;
function ClueBoxClickFunction(node, category, item, value)
{
    return function () {
        var popupObject = DisplayPopup("jeopardy");
        if (item.IsDailyDouble) {
            popupObject.Node.addClass("daily-double");
        }
        var popup = popupObject.Node;
        for (var team in teams) {
            teams[team].SetWager(value);
        }
        popup.find("h1").text(category.Name);
        var clue = item.Clue.clone();
        var answer = item.Answer.clone()
        ToggleVisibility(answer);
        popup.find(".container").append(answer);
        popup.find(".container").append(clue);

        var answerButton = popup.find(".answer-button");
        var toggleAnswer = function () {
            var first = popup.find(".container").children(":eq(0)");
            var second = popup.find(".container").children(":eq(1)");
            first.before(second);

            ToggleVisibility(clue);
            ToggleVisibility(answer);
            answerButton.toggleClass("activated");
            answerTimerButton.toggleClass("hide-toggle");
            roundTimerButton.toggleClass("hide-toggle");
            answerTimer.toggleClass("hide-toggle");
            answerTimerButton.toggleClass("disabled");
            roundTimerButton.toggleClass("disabled");
            answerTimer.toggleClass("disabled");

            node.addClass("disabled");

            stopRoundTimer();
            stopAnswerTimer();
        }
        revealAnswer = function () {
            if (!answerButton.hasClass("activated")) { toggleAnswer(); }
        }
        answerButton.click(toggleAnswer);

        // Let's use scoping to keep intervalId fairly local
        var roundTimerIntervalId;
        var roundTimerButton = popup.find(".round-timer-button");
        var roundTimer = popup.find(".round-timer");
        var roundTimerText = roundTimer.find(".timer-value");

        var startRoundTimer = function () {
            if (answerButton.hasClass("activated")) return;

            roundTimerButton.addClass("activated");
            roundTimer.removeClass("hide-toggle");
            var time = parseInt(roundTimerText.text());
            roundTimerText.text(time);
            var decrementTime = function () {
                var timeValue = parseInt(roundTimerText.text());
                if (timeValue > 0) {
                    roundTimerText.text(timeValue - 1);
                }
                else {
                    stopRoundTimer();
                    roundTimerButton.addClass("disabled");
                }
                Debug(roundTimerIntervalId + " " + roundTimerText.text());
            }
            roundTimerIntervalId = setInterval(decrementTime, 1000);
            stopAnswerTimer();
        }

        var stopRoundTimer = function () {
            Debug("HEYEY");
            roundTimerButton.removeClass("activated");
            roundTimer.addClass("hide-toggle");
            clearInterval(roundTimerIntervalId);
        }

        var answerTimerButton = popup.find(".answer-timer-button");
        var answerTimer = popup.find(".answer-timer");
        var answerTimerIntervalId;
        var answerIntervalCount;
        var startAnswerTimer = function () {
            if (answerButton.hasClass("activated")) return;
            answerTimerButton.addClass("activated");
            answerTimer.addClass("activated");
            stopRoundTimer();
            answerIntervalCount = parseInt(answerTimer.data("interval-count"));
            var text = "\u2588 \u2588";
            for (var i = 0; i < answerIntervalCount; i++) {
                text += " \u2588 \u2588"
            }
            answerTimer.text(text);
            answerTimerIntervalId = setInterval(function () {
                var currentText = answerTimer.text();
                currentText = currentText.substring(0, currentText.length - 4);
                if (currentText.length == 0) currentText = "\u00a0";
                answerTimer.text(currentText);
                answerIntervalCount--;
                if (answerIntervalCount < 0) { stopAnswerTimer(); return; }
                Debug(answerIntervalCount);
            }, parseFloat(answerTimer.data("interval-length") * 1000));
        }

        var stopAnswerTimer = function () {
            answerTimerButton.removeClass("activated");
            answerTimer.removeClass("activated");
            clearInterval(answerTimerIntervalId);
        }

        var toggleRoundTimer = function () {
            if (parseInt(roundTimerText.text()) <= 0 && !roundTimerButton.hasClass("activated")) {
                return;
            }

            if (roundTimerButton.hasClass("activated")) {
                stopRoundTimer();
            } else {
                startRoundTimer();
            }
        }

        var toggleAnswerTimer = function () {
            if (answerTimerButton.hasClass("activated")) {
                stopAnswerTimer();
            } else {
                startAnswerTimer();
            }
        }

        var readKeys = function (e) {
            var key = e.which;
            switch (key) {
                case 32:
                    toggleAnswerTimer();
                    break;

                case 97:
                    toggleAnswer();
                    break;

                case 114:
                    toggleRoundTimer();
                    break;

                default:
                    break;
            }
        };

        $(document).keydown(readKeys);

        roundTimerButton.click(toggleRoundTimer);
        answerTimerButton.click(toggleAnswerTimer);
        $(".answer-timer").click(toggleAnswerTimer);
        popupObject.CloseCallbacks.push(function (dismissArguments) {
            stopRoundTimer();
            stopAnswerTimer();
            ClearKeyShortcuts();
            for (var team in teams) { teams[team].SetWager(0); }
            revealAnswer = null;
        });
    }
}

function ClearKeyShortcuts()
{
    $(document).unbind("keypress");
}

function ApplyKeyShortcuts()
{
    
}

function Debug(s)
{
    $("#debug").text(s);
}

var popupCount = 0;
function DisplayPopup(key)
{
    $(".final-jeopardy-button").addClass("hide-toggle");
    popupCount++;
    var popupObject = popups[key].Spawn();
    var popup = popupObject.Node;
    popup.find(".overlay").click(DestroyPopupFunction(popupObject, 0));
    popup.find(".close-button").click(DestroyPopupFunction(popupObject, 0));
    var me = function () {
        DestroyPopupFunction(popupObject, 0)();
        $(".close-popup-button").off("click", me);
    };
    $(".close-popup-button").click(me);
    $("body").append(popup);
    return popupObject;
}

function DisplayFinalJeopardyPopup(category, item)
{
    return function () {
        var popupObject = DisplayPopup("final-jeopardy");
        var popup = popupObject.Node;

        popup.find("h1").text(category.Name);
        var clue = item.Clue.clone();
        var answer = item.Answer.clone()
        ToggleVisibility(answer);
        popup.find(".container").append(answer);
        popup.find(".container").append(clue);

        popup.find(".music-container").each(function (i, value) {
            var musicNode = $(value);
            musicNode.append(GenerateNodeFromData($("#final-jeopardy-music"), $("<div class='container-node-target' />")));
            var audio = musicNode.find("audio")[0];
            var toggle = musicNode.find(".play-button");

            toggle.click(function () {
                if (audio.paused) {
                    audio.play();
                    toggle.addClass("activated");
                } else {
                    audio.pause();
                    toggle.removeClass("activated");
                }
            });
        });

        var playButton = popup.find(".music-container .play-button");
        var answerButton = popup.find(".answer-button");
        var toggleAnswer = function () {
            var first = popup.find(".container").children(":eq(0)");
            var second = popup.find(".container").children(":eq(1)");
            first.before(second);

            ToggleVisibility(clue);
            ToggleVisibility(answer);
            answerButton.toggleClass("activated");
            playButton.toggleClass("hide-toggle");
            //node.addClass("disabled");
        }
        revealAnswer = function () {
            if (!answerButton.hasClass("activated")) { toggleAnswer(); }
        }
        answerButton.click(toggleAnswer);
    }
}

function DestroyPopupFunction(popupObject, dismissArgument)
{
    var popup = popupObject.Node;
    return function () {
        popupCount--;
        if (popupCount == 0) $(".final-jeopardy-button").removeClass("hide-toggle");
        popup.addClass("closing");
        popupObject.Dismiss(dismissArgument);
        popup.bind('animationend', function () {
            popup.remove();
        });
    }
}

function AddTeam(teamName, color, delay)
{
    var pos = $(".add-team-position");
    var tempObject = templates["team-cell"].Clone()
    team = new Team(teamName, 0);
    team.Node = tempObject.Node;
    pos.before(team.Node);
    team.SetName(team.Name);
    team.SetScore(team.Score);
    team.SetColor(color);
    team.SetWager(0);
    team.GetCorrectButton().click(TeamAnswerButtonFunction(team, 1, true));
    team.GetIncorrectButton().click(TeamAnswerButtonFunction(team, -1, false));
    team.Node.find("input.team-name").blur(SetTeamNameFunction(team));
    team.Node.find("input").keydown(function (event) {
        if (event.which == 13) $(this).blur();
    }).focus(function () {
        var a = $(this);
        setTimeout(function () { a.select() }, 2);
    });
    team.Node.addClass("hide-toggle");
    setTimeout(TeamAppearFunction(team), delay);
    team.SetOpacity(color.MinOpacity);
    team.Node.find("input.team-score").blur(SetTeamScoreFunction(team));
    team.Node.hover(TeamHoverFunction(team, color.MaxOpacity), TeamHoverFunction(team, color.MinOpacity));
    //team.Node.find(".team-name, .team-score, .team-background").click(OpenTeamEditorFunction(team));
    return team;
}

function TeamAppearFunction(team) {
    return function () {
        team.Node.removeClass("hide-toggle");
    }
}

function TeamHoverFunction(team, opacity) {
    return function () {
        team.SetOpacity(opacity);
    }
}

function SetTeamNameFunction(team) {
    return function () {
        var name = $(this).val();
        if (name != null && name != "") {
            team.SetName(name);
        } else {
            //team.SetName(team.Name);
            DeleteTeamFunction(team)();
        }
    }
}

function SetTeamScoreFunction(team) {
    return function () {
        var score = parseInt($(this).val());
        if (score || score == 0) {
            team.SetScore(score);
        } else {
            team.SetScore(team.Score);
        }
    }
}

function OpenTeamEditorFunction(team)
{
    return function () {
        var popup = DisplayPopup("team-editor");
        popup.Node.find(".team-name")[0].value = team.Name;
        popup.Node.find(".team-score")[0].value = team.Score;
        popup.Node.find(".team-color")[0].value = team.Color;
        popup.Node.find(".header-team-name").text(team.Name);
        popup.Node.find(".color-target").each(function (i, val) {
            $(val).css($(val).data("target-style"), team.Color);
        });

        var submit = function () {
            var name = popup.Node.find(".team-name")[0].value;
            if (name == null || name == "") return;
            var score = parseInt(popup.Node.find(".team-score")[0].value);
            if (!score && score != 0) return;
            var color = popup.Node.find(".team-color")[0].value;
            var colorTester = $("<div />");
            colorTester.css("border-color", color);
            if (!colorTester.css("border-color")) {
                colorTester.remove();
                return;
            }
            colorTester.remove();

            team.SetName(name);
            team.SetScore(score);
            team.SetColor(color);

            DestroyPopupFunction(popup, 0)();
        };
        popup.Node.find("button.save-changes").click(submit);
        popup.Node.find("button.delete-team").click();
        popup.Node.find("input").keydown(function (event) {
            if (event.which == 13) submit();
        });
    }
}

function DeleteTeamFunction(team) {
    return function () {
        team.Node.remove();
        teamColors.unshift(team.Color);
        teams.splice($.inArray(team, teams), 1);
    }
}

function TeamAnswerButtonFunction(team, multiplier, shouldReveal)
{
    return function () {
        team.ApplyWager(multiplier);
        if (team.Wager > 0 && shouldReveal && revealAnswer != null) revealAnswer();
    }
}

function AddTeamPresetColor(teamName, delay)
{
    if (teamColors.length > 0) {
        return AddTeam(teamName, teamColors.shift(), delay);
    } else {
        return AddTeam(teamName, baseColor.Clone(), delay);
    }
}

function RetrieveTeamColors(node)
{
    var colors = [];
    var minOpacity = 0;
    var maxOpacity = 1;

    var dataMinOpacity = parseFloat(node.data("min-opacity"));
    var dataMaxOpacity = parseFloat(node.data("max-opacity"));

    if (dataMinOpacity || dataMinOpacity == 0) minOpacity = dataMinOpacity;
    if (dataMaxOpacity || dataMaxOpacity == 0) maxOpacity = dataMaxOpacity;

    node.contents("[data-color]").each(function (i, value) {
        var colorNode = $(value);
        var color = colorNode.data("color");

        var nodeMinOpacity = parseFloat(colorNode.data("min-opacity"));
        var nodeMaxOpacity = parseFloat(colorNode.data("max-opacity"));

        var effectiveMinOpacity = minOpacity;
        var effectiveMaxOpacity = maxOpacity;

        if (nodeMinOpacity || nodeMinOpacity == 0) effectiveMinOpacity = nodeMinOpacity;
        if (nodeMaxOpacity || nodeMaxOpacity == 0) effectiveMaxOpacity = nodeMaxOpacity;

        if (colorNode.attr("id") == "base-color") {
            baseColor = new TeamColor(color, effectiveMinOpacity, effectiveMaxOpacity);
        } else {
            colors.push(new TeamColor(color, effectiveMinOpacity, effectiveMaxOpacity));
        }
    });
    return colors;
}

function DailyDoubleWagerPopupFunction(popupName, node, category, item) {
    return function () {
        var popupObject = DisplayPopup(popupName);
        popupObject.Node.find(".category-name").text(category.Name);
        popupObject.Node.find("input").bind("input", TeamWagerChangeInput(popupObject.Node));
        popupObject.Node.find("input").keydown(function (event) {
            if (event.which == 13) revealClue();
        });

        var revealClue = function () {
            DestroyPopupFunction(popupObject, 1)();
        };
        popupObject.Node.find(".reveal-clue").click(revealClue);

        popupObject.CloseCallbacks.push(function (dismissArgument) {
            if (dismissArgument == 0) return;
            var value = parseInt(popupObject.Node.find("input")[0].value);
            if (!value) {
                value = 0;
            }
            ClueBoxClickFunction(node, category, item, value)();
        });
    }
}

function FinalJeopardyWagerPopupFunction(popupName, finalJeopardy) {
    return function () {
        var popupObject = DisplayPopup(popupName);
        popupObject.Node.find(".category-name").text(finalJeopardy.Name);
        var listNode = popupObject.Node.find(".wager-list");
        for (var i in teams) {
            var team = teams[i];
            var template = templates["wager-list-item"].Clone();
            var teamNode = template.Node;
            teamNode.find(".team-name").text(team.Name);
            var target = teamNode.find(".color-target");
            target.css(target.data("target-style"), team.Color.Color);
            var input = teamNode.find("input");
            input.bind("input", TeamWagerChangeInput(teamNode));
            input.val("");
            listNode.append(teamNode);
        }
        popupObject.Node.find(".reveal-clue").click(function () {
            DestroyPopupFunction(popupObject, 1)();
        });

        popupObject.CloseCallbacks.push(function (dismissArguments) {
            if (dismissArguments == 0) {
                for (var team in teams) { teams[team].SetWager(0); }
            } else {
                var inputs = listNode.find("input");
                for (var team in teams) {
                    var value = inputs[team].value;
                    if (value) {
                        teams[team].SetWager(value);
                    } else {
                        teams[team].SetWager(0);
                    }
                }
                DisplayFinalJeopardyPopup(finalJeopardy, finalJeopardy.Clues[0])();
            }
        });
    }
}

function TeamWagerChangeInput(teamNode) {
    return function () {
        var value = parseInt($(this).val());
        var dataValid = teamNode.find(".valid-input");
        if ((value || value == 0) && value.toString() == $(this).val()) {
            dataValid.text(String.fromCharCode(parseInt(dataValid.data("valid"))));
            dataValid.addClass("valid");
            $(this).addClass("valid");
        } else {
            dataValid.text(String.fromCharCode(parseInt(dataValid.data("invalid"))));
            dataValid.removeClass("valid");
            $(this).removeClass("valid");
        }
    }
}

function AddTeamPopupFunction(popupName) {
    return function () {
        var addTeamPopup = DisplayPopup(popupName);
        addTeamPopup.Node.find("input")[0].value = "";
        var submit = function () {
            var teamName = addTeamPopup.Node.find("input")[0].value;
            if (teamName == null || teamName == "") return;
            teams.push(AddTeamPresetColor(teamName, 0));

            addTeamPopup.Node.find("input")[0].value = "";
            addTeamPopup.Node.find("input").focus();
        };
        addTeamPopup.Node.find("button").click(submit);
        addTeamPopup.Node.find("input").keydown(function (event) {
            if (event.which == 13) submit();
        });
        addTeamPopup.Node.find("input").focus();
    }
}

function PopulateDefaultTeams(teamNode, delay)
{
    teamNode.children().each(function (i, value) {
        var team = $(value);
        var color = team.data("color");
        if (color) {
            var finalColor = baseColor.Clone();
            finalColor.Color = color;

            var nodeMinOpacity = parseFloat(team.data("min-opacity"));
            var nodeMaxOpacity = parseFloat(team.data("max-opacity"));

            if (nodeMinOpacity || nodeMinOpacity == 0) finalColor.MinOpacity = nodeMinOpacity;
            if (nodeMaxOpacity || nodeMaxOpacity == 0) finalColor.MaxOpacity = nodeMaxOpacity;

            teams.push(AddTeam(team.text(), finalColor, delay + (200 * (i + 1))));
        } else {
            teams.push(AddTeamPresetColor(team.text(), delay + (200 * (i + 1))));
        }
    });
}

var categories;
var templates;
var popups;
var teamColors;
var finalJeopardy;
var baseColor;

var teams = [];

function Jeopardy(clueTableNode)
{
    templates = RetrieveTemplates($("#templates"));
    popups = RetrievePopups($("#popups"), "overlay");
    categories = RetrieveCategories($("#categories"));
    finalJeopardy = RetrieveFinalJeopardy($("#categories"));
    teamColors = RetrieveTeamColors($("#team-colors"));
    GenerateClueTable(clueTableNode, categories, templates)
    
    $(".add-team-button").click(AddTeamPopupFunction("add-team"));
    $(".final-jeopardy-button").click(FinalJeopardyWagerPopupFunction("final-jeopardy-wager", finalJeopardy));
    //teams.push(AddTeamPresetColor("a"));
    //teams.push(AddTeamPresetColor("b"));
    //teams.push(AddTeamPresetColor("c"));
    //teams.push(AddTeamPresetColor("d"));
    PopulateDefaultTeams($("#preset-teams"), 1200);
}

