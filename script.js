document.getElementById('learnMoreBtn').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('about').offsetTop,
      behavior: 'smooth'
  });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});
function $(sel){
  return document.querySelector(sel);
}
function $A(sels){
  return document.querySelectorAll(sels);
}
$(".nav-icon").addEventListener("click",()=>{
  $("#sidebar").style.display=="block"?$("#sidebar").style.display="none":$("#sidebar").style.display="block";
  // if($("#sidebar").style.display=="block"){
  //   $("#sidebar").style.display="none";
  // }else{
  //   $("#sidebar").style.display="block";
  //   }
});
