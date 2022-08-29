var inputText = document.querySelector(".inputText")
var displayText = document.querySelector(".displayText")
let rules = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u", "utat"]]

function encriptar(encrString){
    encrString = encrString.normalize("NFD").replace(/[^\w\s]/gi, '')
    encrString = encrString.toLowerCase();
    for (var i = 0; i < rules.length; i++){
        if (encrString.includes(rules[i][0])){
                encrString=encrString.replaceAll(rules[i][0],rules[i][1])
        }
    }
    return encrString;
}

function desencriptar(DencrString){
    DencrString = DencrString.normalize("NFD").replace(/[^\w\s]/gi, '') 
    DencrString = DencrString.toLowerCase();
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

