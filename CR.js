function Newaddpj()
{
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("pjfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","Enter here");
    let pjob=document.getElementById("pj");
    
    let pjbtn=document.getElementById("pjadd");
    pjob.insertBefore(newnode,pjbtn);
   
}
function Newaddin()
{
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("infield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","Enter here");
    let inob=document.getElementById("in");
    let inbtn=document.getElementById("inadd");
    inob.insertBefore(newnode,inbtn);
   
}
function Newaddts()
{
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("tsfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","Enter here");
    let tsob=document.getElementById("ts");
    let tsbtn=document.getElementById("tsadd");
    tsob.insertBefore(newnode,tsbtn);
   
}
function Newadded()
{
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("edfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","Enter here");
    let edob=document.getElementById("ed");
    let edbtn=document.getElementById("edadd");
    edob.insertBefore(newnode,edbtn);
   
}
function Newaddlg()
{
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("lgfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","Enter here");
    let lgob=document.getElementById("lg");
    let lgbtn=document.getElementById("lgadd");
    lgob.insertBefore(newnode,lgbtn);
   
}
function generatecv()
{
    let namefield=document.getElementById("namefield").value;
    let nameT1=document.getElementById("nameT");
    nameT1.innerHTML=namefield;
    let nameT2=document.getElementById("nameT2");
    nameT2.innerHTML=namefield;
    document.getElementById("phoneT").innerHTML=document.getElementById("phonefield").value;
    document.getElementById("linkedinT").innerHTML=document.getElementById("linkedinfield").value;
    document.getElementById("gitT").innerHTML=document.getElementById("githubfield").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;
    document.getElementById("mailT").innerHTML=document.getElementById("mailfield").value;
    document.getElementById("profileT").innerHTML=document.getElementById("profilefield").value;
    let lgs=document.getElementsByClassName("lgfield");
    let str='';
    for(let e of lgs)
    {
        str=str+<li> ${e.value} </li>;
    }
document.getElementById("languageT").innerHTML=str;

let pjs=document.getElementsByClassName("pjfield");
let str1='';
for(let e1 of pjs)
{
    str1=str1+<li> ${e1.value} </li>;
}
document.getElementById("projectT").innerHTML=str1;

let ins=document.getElementsByClassName("infield");
let str2='';
for(let e2 of ins)
{
    str2=str2+<li> ${e2.value} </li>;
}
document.getElementById("internshipsT").innerHTML=str2;

let tsss=document.getElementsByClassName(" tsfield");
let str3='';
for(let e3 of tsss)
{
    str3=str3+<li> ${e3.value} </li>;
}
document.getElementById("technicalskillsT").innerHTML=str3;

let eds=document.getElementsByClassName("edfield");
let str4='';
for(let e4 of eds)
{
    str4=str4+<li> ${e4.value} </li>;
}
document.getElementById("educationalT").innerHTML=str4;

document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";
    
    
}
function printcv()
{
    window.print();
}