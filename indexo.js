


function addItem() {

    var ul = document.getElementById("dynamic-list");
    var inputtext = document.getElementById("inputtext");
    var li = document.createElement("li");
    li.setAttribute("id", inputtext.value);
    li.appendChild(document.createTextNode(inputtext.value));
    ul.appendChild(li);
    inputtext.value = ""

}


function removeItem() {
    var ul = document.getElementById("dynamic-list");
    var inputtext = document.getElementById("inputtext");
    var item = document.getElementById(inputtext.value);
    ul.removeChild(item);
    inputtext.value = "";

}

document.getElementById("aaa").addEventListener("dblclick", function () {
    var ul = document.getElementById("dynamic-list");
    var inputtext = document.getElementById("inputtext");
    var item = document.getElementById(inputtext.value);
    ul.remove(item);
    inputtext.value = "";
})
