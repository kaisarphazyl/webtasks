function addStu() {
    var name=document.querySelector("#name");
    var surname = document.querySelector("#surname");
    var selector = document.querySelector("#faculty");

    var faculty = selector.options[selector.selectedIndex];
    var x = 1;

    if(surname.value==""){
        surname.style.border="2px solid red";
        x=0
    }
    else{
        surname.style.border="1px solid black";
    }
    if(name.value==""){
        name.style.border ="2px solid red";
        x=0
    }
    else{
        name.style.border = "1px solid black";
    
    }
    if(faculty.text=="Select Faculty"){
        alert("SELECT FACULTY");
        x=0
    }
    if(x==1){
        var doc=document.querySelector("#students");        
        doc.innerHTML=doc.innerHTML+"<tr><td>"+name.value+"</td><td>"+surname.value+"</td><td><strong>"+faculty.text+"</strong></td></tr>"
    }
}
document.querySelector("#addStudent").addEventListener("click", addStu)