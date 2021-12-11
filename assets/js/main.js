function hideMenu(){
  let menu_area = document.querySelector('#menu-area');
  let menu_button = document.querySelector('#menu-opener--img')

  if (menu_area.style.width != '200px'){
    menu_button.style.transform = 'rotate(90deg)';
    menu_area.style.width = '200px';
  } else {
    menu_button.style.transform = 'rotate(0deg)';
    menu_area.style.width = 0;
  }
}