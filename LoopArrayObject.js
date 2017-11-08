var array= [
    {fname:"Sunil",lname:"Pandey",Age:26},
    {fname:"John",lname:"dey",Age:36},
    {fname:"Harry",lname:"Doe",Age:16},
    {fname:"Amit",lname:"Tripathi",Age:24},
    {fname:"Roshan",lname:"singh",Age:28},

];

var text='';
var x;
function getArray(input){
//var output = [];
var txt='';
    for (var i=0; i < input.length ; ++i){
        for( x in input[i]){
        txt += input[i][x] + " ";
        //txt += input[i].fname + " ";
       // txt += input[i].lname + " ";

       }
       var txt = txt + ", ";
        }
        //output.push(input[i]);
    return txt;

}

function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

var inp= getArray(array);
var result = getFields(array, "fname");

for(var j=0;j<result.length;j++){

text += result[j] + ", "


}
document.getElementById("p1").innerHTML = inp;
document.getElementById("p2").innerHTML = text;