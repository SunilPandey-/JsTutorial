var numbers = [12,1,44,100,123,69,32,23];
document.getElementById("demo").innerHTML = numbers;

function shuffle(a){
    var m = a.length,t,i;
    // While there remain elements to shuffle…
    while(m){
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t=  a[m];
        a[m]=a[i];
        a[i]=t;


    }
    document.getElementById("demo1").innerHTML = a;
    console.log("Hello" + a);
    //return a;
}
function my(){}
document.getElementById("btn").addEventListener("click",function () { shuffle(numbers); },false);
