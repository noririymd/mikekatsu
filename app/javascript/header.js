window.addEventListener('DOMContentLoaded', event => {
  //display none切り替え
  
  const DropButton = document.getElementById("navbarDropdown");
  const DropMenu = document.getElementById("dropdown-menu");
  DropMenu.style.display ="none";
  DropButton.addEventListener('click', function() {

  if(DropMenu.style.display=="block"){
    DropMenu.style.display ="none";
  }else{
    DropMenu.style.display ="block";
  }
  });

});