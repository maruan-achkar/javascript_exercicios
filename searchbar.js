function search() {
    var input, filter, dropdown, li, a, i, textvalue;
    input = document.getElementById('searchbarinput');
    filter = input.value.toUpperCase();
    dropdown = document.getElementById("searchbardropdown");
    li = dropdown.getElementsByTagName('li');
  
    let matches = false;
    for (i = 0; i < li.length; i++) {
      if (li[i].dataset.noSearch !== undefined) continue
      a = li[i].getElementsByTagName("a")[0];
      textvalue = a.textContent || a.innerText;
      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        matches = true
      } else {
        li[i].style.display = "none";
      }
    }
    if (!matches) dropdown.classList.add('noResults');
    else dropdown.classList.remove('noResults');
  }