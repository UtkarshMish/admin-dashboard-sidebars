function handleSectionChange(sectionName)
{
  document.getElementById("sidebar_button").checked = false;
  window.scrollTo({ left: 0, top: document.getElementById(sectionName).offsetTop, behavior: "smooth" });
}