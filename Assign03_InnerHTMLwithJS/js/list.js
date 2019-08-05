// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];


window.onload=function(){
    var listContainer=document.querySelector("#list");
    var myListString="<ol>"; // opening <ul>

    for(var i=0; i<fruits.length; i++){ // list items <li></li>
          myListString += "<li>" + fruits[i] + "</li>"
    }

    myListString += "</ol>"; // closing </ul>
    listContainer.innerHTML = myListString;


    var dirContainer=document.querySelector("#dir")
    var myDirectory="<ul>";
    for(var i=0; i<directory.length; i++){
        if(directory[i].type === "file"){
            myDirectory += "<li>" + directory[i].name + "</li>";
        }

        else if(directory[i].type === "directory"){
            myDirectory += "<li>" + directory[i].name + "</li>";
            for(var j=0; j<directory[i].files.length; j++){
                myDirectory += "<ul><li>" + directory[i].files[j].name + "</li></ul>"
            }
        }
    }
    dirContainer.innerHTML = myDirectory;
}