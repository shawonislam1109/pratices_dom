const ul = document.getElementById("names");

const filterInput = document.getElementById("filterInput");

filterInput.addEventListener("input", (e) => {
  [...ul.children].filter( (li) =>{
    if (li.className == "collection-item") {
      const a = li.getElementsByTagName("a")[0];
      console.log(a.innerText);
      if (a.innerText.toLowerCase().startsWith(e.target.value.toLowerCase())) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    }
  });
});
