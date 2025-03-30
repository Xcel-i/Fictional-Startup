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
const year = new Date().getFullYear();
$("#date").innerText=year;


//founders
// Array to store image data
const imageData = [
  {
    path: "./images/evan.jpg",
    name : "Ezedike-Egwom Evan",
    title: "Frontend Developer | Co-Founder",
  },
]

// Function to display images dynamically
function displayImages() {
  const container = document.getElementById("cardContainer")
  imageData.forEach((item)=>{
      const card = document.createElement("div")
      card.classList.add("card")

      card.innerHTML = `
        <img src="${item.path}" alt="${item.title}" class="card-img">
        <h3>${item.name}</h3>
        <h5>${item.title}</h5>
      `

      container.appendChild(card) 
  });
}

// Call the function to display the images after the DOM has loaded
document.addEventListener("DOMContentLoaded", displayImages);