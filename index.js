var chars_ = {
    "uppercase":"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "lowercase":"abcdefghijklmnopqrstuvwxyz",
    "numbers":"0123456789",
    "symbols":"~`@#$%^&*()-_+=:;{[}]'|/?"
} 
var charsAvailable = [];
var passLength = 17;

var sldr = $(".customRange");
sldr.on("touchmove", function () {
    passLength = sldr.val();
    $(".passLen").text(passLength);
});

sldr.on("mousemove", function () {
    passLength = sldr.val();
    $(".passLen").text(passLength);
});

$(document).ready(checkBoxes);

$(".generateBtn").click(function () {
    $(".generatedPass").text(generatePass(passLength));
});

$(".copyClipboard").click(function () {
    navigator.clipboard.writeText($(".generatedPass").text()); 
    $(".copiedFeedback").removeClass("hidden");
    setTimeout(function () {
        $(".copiedFeedback").addClass("hidden");
    }, 1500);  
});

$(".checkbox").click(function () {
    checkBoxes();
});


function checkBoxes() {
    charsAvailable = [];
    var boxes = $(".checkbox");
    var box;
    var isChecked;
    for (var a = 0; a < 4; a++) {
        box = boxes[a];
        isChecked = box["checked"];
        if (isChecked) {
            charsAvailable.push(box["name"]);
        }
    }
}

function generatePass(len) {
    len = len*1;
    var randCharTypeIndex;
    var chosenCharType;
    var randCharIndex;
    var chosenChar;
    var generatedPass = "";
    for (var i = 0; i < len; i++) {;
        randCharTypeIndex = Math.random()*charsAvailable.length;
        randCharTypeIndex = Math.floor(randCharTypeIndex);
        chosenCharType = charsAvailable[randCharTypeIndex];
        chosenCharType = chars_[chosenCharType];

        randCharIndex = Math.random()*chosenCharType.length;
        randCharIndex = Math.floor(randCharIndex);
        chosenChar = chosenCharType[randCharIndex];
        generatedPass += chosenChar
    }
    return generatedPass;
}

