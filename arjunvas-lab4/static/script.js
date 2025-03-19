var x = 5;
var y = 7;
var z = x + y;
console.log(z);
var a = "Hello";
var b = " world!";
var c = a + b;
console.log(c);

function SumNPrint(x1, x2) {
    var x3 = x1 + y2;
    log(x3);
}

if(c>z)
{
    console.log(c);
}
else if(c<z)
{
    console.log(z);
}
else{
    console.log("good job!")
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];
L1.forEach(findTheBanana);
L2.forEach(findTheBanana);

function findTheBanana(l)
{
    if(l == "Banana")
    {
        
        alert("Found the banana!");
    }
}

function greetingFunc()
{
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if(h<5)
    {
        E.innerHTML = "Good night!";
    }
    else if(h < 12)
    {
        E.innerHTML = "Good morning!";
    }
    else if(h < 18)
    {
        E.innerHTML = "Good afternoon!";
    }
    else if (h<20)
    {
        E.innerHTML = "Good evening!";
    }
    else
    {
        E.innerHTML = "Good night!";
    }
    
}
if(window.location.href.includes("index.html"))
{
    greetingFunc();
}

function addYear()
{
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyYear").innerHTML = y + " designed & and coded by Arjun Vasudevan";
}



function showList() {
    document.getElementById('funList').style.display = 'block';
    document.getElementById('showList').style.display = 'none';
}

$(document).ready(function() {
    $('.long-bio').hide();
    
    $('.read-more-btn').click(function() {
        $('.short-bio').hide();
        $('.long-bio').show();
    });

    
    $('.read-less-btn').click(function() {
        $('.long-bio').hide();
        $('.short-bio').show();
    });
});
