var points = [10,40,100,1,5,45];
//var points = ["Sunil","Ramesh","Ajay","Dhoni","Kohli"];
document.getElementById("demo").innerHTML = points;

function myFunction(){

    points.sort(function(a,b){

        return a-b;

        /*if (a>b) return -1;
           else if (a<b) return 1;
           else return 0;*/

    });
    //document.getElementById("demo1").innerHTML = points.sort();
     document.getElementById("demo1").innerHTML = points;


}

document.getElementById("btn").addEventListener("click",myFunction);