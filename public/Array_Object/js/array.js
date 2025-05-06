function showAll() {
    const list = document.getElementById("list");
    let namelist =[""];
    names.forEach(element => {
        namelist += element + "<br/>";
   });
   list.innerHTML = namelist;
}
function addName(){
    const name = document.getElementById("name").value;
    names.push(name);
    showAll();
    document.getElementById("name").value = "";


 

    
}