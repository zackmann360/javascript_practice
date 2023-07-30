var scrollNav = document.querySelector(".scrolledLayout")
window.onscroll = function() {scrollFunction()}
function scrollFunction() {
  if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 20) {
    scrollNav.style.top = "0";
  } else {
    scrollNav.style.top = "-100px";
  }
}