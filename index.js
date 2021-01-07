var list = document.getElementById("new-lists");
var alllist = Object.keys(localStorage);
alllist.forEach(function f(e) {

    list.innerHTML += `
        <div class="newlist" >
    <span class="heading">${e}</span>
    <form class="row width">
    <div class="col-auto">
    <input type="text" class="form-control items container" id="list"  placeholder="Enter the name of new list">
    </div>
    <div class="col-auto ">
    <span class="btn btn-primary mb-3 add-items"  onclick="addnewitem(this)">+</span>
    <span class="btn btn-danger mb-3 remove-list"  onclick="removelist(this)">-</span>
    </div>
    </form>
    </div>
    `
})
var i = 0;
alllist.forEach(function all(e) {
    let arr = (JSON.stringify(localStorage.getItem(e)));
    let name = arr.split(',')

    // console.log(name)
    for (key of name) {
        // var newlist = document.getElementsByClassName("newlist");
        var allitems = document.getElementsByClassName("newlist")
        allitems[i].innerHTML += `<div class=" box">
        <span class="list-items"> ${key} </span>
        <span class="remove-item ${e}" onlick="return removeitem(this,${e})">X</span><br/>
        </div>
        `
    }
    i++;
})

function addnewlist() {
    var listname = document.getElementById("list-name").value;
    if (listname) {
        if(!localStorage.getItem(listname)){
            localStorage.setItem(listname, []);
        }
        // console.log(Object.keys(localStorage)[0]);
        list.innerHTML += `
                <div class="newlist " id="allitems">
        <span class="heading">${listname}</span>
        <form class="row ">
        <div class="col-auto">
        <input type="text" class="form-control container items" id="list"  placeholder="Enter the name of new list">
        </div>
            <div class="col-auto ">
                <span class="btn btn-primary mb-3 add-items "  onclick="addnewitem(this)">+</span>
                <span class="btn btn-danger mb-3 remove-list"  onclick="removelist(this)">-</span>
            </div>
        </form>
        </div>
        `
    }
}
function addnewitem(obj) {
    // var s = new array;
    var lists = document.getElementsByClassName("add-items")
    var newlist = document.getElementsByClassName("newlist")
    var items = document.getElementsByClassName("items")
    var heading = document.getElementsByClassName("heading")
    for (var i = 0; i < lists.length; i++) {
        if (obj == lists[i]) {
            // var i = items[i].value;
            // console.log(items[i].value)
            if (items[i].value) {
                // console.log(heading[i].innerText)
                // let key = localStorage.getItem('heading[i].innerText')
                if (localStorage.getItem(heading[i].innerText)) {
                    // let array = [JSON.parse(localStorage.getItem('heading[i].innerText'))]
                    var a = localStorage.getItem(heading[i].innerText)
                    var array = new Array();
                    array.push(a, items[i].value);
                }
                else {
                    var array = new Array();
                    array.push(items[i].value);
                }
                localStorage.setItem(heading[i].innerText, array)
                newlist[i].innerHTML += `<div class="box">
                                        <span class="list-items"> ${items[i].value} </span>
                                        <span class="remove-item ${heading[i].innerText}" onlick=" return removeitem(this,${heading[i].innerText})">X</span><br/>
                                        </div>
                `
            }
        }
    }
}
function removelist(obj) {
    var heading = document.getElementsByClassName("heading")
    var newlist = document.getElementsByClassName("newlist")
    var lists = document.getElementsByClassName("remove-list")
    for (var i = 0; i < lists.length; i++) {
        if (obj == lists[i]) {
            // console.log(heading[i].innerText)
            // console.log(localStorage.getItem(heading[i].innerText))
            localStorage.removeItem(heading[i].innerText)
            newlist[i].style.display = "none";
        }
    }
}
function removeitem(obj,heading) {
    console.log("match");
    // var click = document.getElementsByClassName("click");
    var removeitem = document.getElementsByClassName(heading);
    for (var i = 0; i < removeitem.length; i++) {
        if (obj == removeitem[i]) {
            removeitem[i].style.display = "none";
        }
    }
}