
window.onwheel=function(){

}


function show_comment_form() {
  document.getElementsByClassName("comment-form")[0].classList.toggle("show-form");
  
}
function close_comment() {
  document.getElementsByClassName("comment-form")[0].classList.remove("show-form");
}