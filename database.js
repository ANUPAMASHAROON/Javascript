let array=[
    {
        Name:"Anupama Sharoon",
        RollNo:"22A91A05D2",
        Branch:"CSE",
        Age:19,   
    },
    {
        Name:"Pujitha Lakshmi",
        RollNo:"22A91A04D7",
        Branch:"IT",
        Age:20,
       
    },
    {
        Name:"Bhuvana Jagatha ",
        RollNo:"22A91A02C5",
        Branch:"ECE",
        Age:19,
    
    },
    {
        Name:"Shanoor Jahan",
        RollNo:"22A91A12G0",
        Branch:"EEE",
        Age:21,
   
    },
    {
        Name:"Deepthi Priyanka",
        RollNo:"22A91A06A7",
        Branch:"AIML",
        Age:20,
 
    },
]
let newtabel=document.createElement("table");
newtabel.id="taa";
newtabel.innerHTML= "<thead><th>Name</th><th>RollNo</th><th>Branch</th><th>Age</th><th>Update</th><th>Delete</th></thead>";

for(i of array){
    let newRow = document.createElement("tr");
    let tdname = document.createElement("td");
    let tdroll = document.createElement("td");
    let tdbranch = document.createElement("td");
    let tdage = document.createElement("td");
    let tdupdate = document.createElement("td");
    let tddelete = document.createElement("td");
    tdname.textContent = i.Name;
    tdroll.textContent = i.RollNo; 
    tdbranch.textContent = i.Branch;
    tdage.textContent = i.Age; 
    var btn1 = document.createElement('button');
    btn1.innerText = 'Update'; 
    tdupdate.appendChild(btn1);
    var btn = document.createElement('button');
    // btn.type = 'button';
    // btn.className = 'my-button';
    btn.innerText = 'Delete'; 
    tddelete.appendChild(btn);
    newRow.appendChild(tdname);
    newRow.appendChild(tdroll);
    newRow.appendChild(tdbranch);
    newRow.appendChild(tdage);
    newRow.appendChild(tdupdate);
    newRow.appendChild(tddelete);
    newtabel.appendChild(newRow);
    btn.onclick=function deleteRow(button) {
         var index = newRow.rowIndex; 
        document.getElementById("taa").deleteRow(index);
    }
    btn1.onclick=function editRow(button) {
        var a=window.prompt("enter the name");
        var b=window.prompt("enter the rollno");
        var c=window.prompt("enter the branch");
        var d=window.prompt("enter the age");
        tdname.textContent = a;
        tdroll.textContent = b; 
        tdbranch.textContent = c;
        tdage.textContent = d;   
    }       
}
let target = document.getElementById('target');
var first_click=true;
 function display(){
    if(first_click){
    target.appendChild(newtabel);
    document.getElementsByClassName("add")[0].innerHTML="ADD";
    first_click=false;
    }
    else{
        var a1=window.prompt("enter the name");
        var b1=window.prompt("enter the rollno");
        var c1=window.prompt("enter the branch");
        var d1=window.prompt("enter the age");
        let newRow = document.createElement("tr");
       let tdname = document.createElement("td");
       let tdroll = document.createElement("td");
       let tdbranch = document.createElement("td");
       let tdage = document.createElement("td");
       let tdupdate = document.createElement("td");
       let tddelete = document.createElement("td");
        tdname.textContent = a1;
        tdroll.textContent = b1; 
        tdbranch.textContent = c1;
        tdage.textContent = d1; 
        newRow.appendChild(tdname);
         newRow.appendChild(tdroll);
        newRow.appendChild(tdbranch);
        newRow.appendChild(tdage);
        newRow.appendChild(tdupdate);
        newRow.appendChild(tddelete);
        newtabel.appendChild(newRow);
        var btn1 = document.createElement('button');
        btn1.innerText = 'Update'; 
       tdupdate.appendChild(btn1);
        var btn = document.createElement('button');
        btn.innerText = 'Delete'; 
        tddelete.appendChild(btn);
        btn.onclick=function deleteRow(button) {
            var index = newRow.rowIndex; 
           document.getElementById("taa").deleteRow(index);
       }
       btn1.onclick=function editRow(button) {
           var a=window.prompt("enter the name");
           var b=window.prompt("enter the rollno");
           var c=window.prompt("enter the branch");
           var d=window.prompt("enter the age");
           tdname.textContent = a;
           tdroll.textContent = b; 
           tdbranch.textContent = c;
           tdage.textContent = d;   
       } 


    }
 }