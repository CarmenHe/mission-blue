
//opening and accessing the collapsible news article sections
var collapse = document.getElementsByClassName("collapsible");
var i;

//event listener - for loop is to count the number of times the 
for(i = 0; i < collapse.length; i++){
  collapse[i].addEventListener("click", revealContent);
}

function revealContent(){
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if(content.style.maxHeight){//checks if maxHeight is reached (ie it exists)
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}