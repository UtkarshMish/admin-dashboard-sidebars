let notClicked = false;
const dropDown = {
  'home': "none",
  'contact': "none",
  'phone': "none"
}
let logo = document.getElementsByClassName("main__logo")[0].innerHTML;
function handleSectionChange(sectionName)
{
  document.getElementById("sidebar_button").checked = false;
  window.scrollTo({ left: 0, top: document.getElementById(sectionName).offsetTop, behavior: "smooth" });
}

function handleToggle()
{
  document.getElementById("left-sidebar").style.animation = `0.7s ${notClicked ? "slideOut" : "slideIn"}  forwards`;
  document.getElementsByClassName("main__logo")[0].innerHTML = !notClicked ? "<i class='fa fa-tachometer' style='color: azure;' aria-hidden='true'></i>" : logo;
  setTimeout(() =>
  {
    document.getElementsByClassName("side-links")[0].style.display = !notClicked ? "flex" : "none";
    document.getElementsByClassName("side-links__full")[0].style.display = notClicked ? "block" : "none";

    notClicked = !notClicked;
  }, 25);
}
function toggleDropDown(value)
{
  dropDown[value] = dropDown[value] == "none" ? "flex" : "none";
  document.querySelector(`.${value}.dropdown-container.noselect`).style.display = dropDown[value];

}