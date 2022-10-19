var inputText = document.getElementById("inputText");
var displayText = document.getElementById("displayText");
let rules = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u", "utat"]]

inputText.addEventListener("keypress", function (evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 97 || charCode > 122) && charCode != 241 && charCode != 32) {
        evt.preventDefault();
    }
});


function encriptar(encrString){
    for (var i = 0; i < rules.length; i++){
        if (encrString.includes(rules[i][0])){
                encrString=encrString.replaceAll(rules[i][0],rules[i][1])
        }
    }
    return encrString;
}

function desencriptar(DencrString){
    for (var i = 0; i < rules.length; i++){
        if (DencrString.includes(rules[i][1])){
                DencrString=DencrString.replaceAll(rules[i][1],rules[i][0])
        }
    }
    return DencrString;
}



function buttonEncript(){
    var encrText = encriptar(inputText.value)
    displayText.value= encrText;
    inputText.value=""
}

function buttonDencript(){
    var DencrText = desencriptar(inputText.value)
    displayText.value= DencrText;
    inputText.value=""
}

function copy(){
    displayText.select()
    navigator.clipboard.writeText(displayText.value)
    displayText.value=""
}

