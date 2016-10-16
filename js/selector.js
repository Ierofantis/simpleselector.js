var $ = function(selector) {

  this.selector = selector;
  this.element = document.querySelector(this.selector);

  this.on = function(type, callback) {
    this.element.onclick = callback
  }
   this.out = function(type, callback) {
    this.element.onmouseout = callback
  }
  this.color = function(color) {
    this.element.style.color=color
  }
    this.text = function(text) {
    this.element.innerHTML= text
  }
  return this;

}
$(".html").text("text")

$(".wrap").on("click", function(event) {
  color("blue");
  
})

$(".wrap").out("click", function(event) {
  color("red");
})
