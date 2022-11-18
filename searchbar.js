function search(){
    var input, filter, dropdown, li, a, i, textvalue;
    input = document.getElementById('searchbarinput');
    filter = input.value.toUpperCase();
    dropdown = document.getElementById("searchbardropdown");
    li = dropdown.getElementsByTagName('li');
    noresult = document.getElementById("searchbarnoresult");

    for(i=0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textvalue = a.textContent || a.innerText;
        if(textvalue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
}