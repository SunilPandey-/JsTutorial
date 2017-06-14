var points = [10,40,100,1,5,45];
document.getElementById("demo").innerHTML = points;

function myFunction(){

    points.sort(function(a,b){

        return a-b;

    });
    document.getElementById("demo1").innerHTML = points;
            console.log("Hello");

}

document.getElementById("btn").addEventListener("click",myFunction);