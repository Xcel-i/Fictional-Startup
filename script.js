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
// $(".nav-icon").addEventListener("click",()=>{
//   $("#sidebar").style.display=="block"?$("#sidebar").style.display="none":$("#sidebar").style.display="block";
//   // if($("#sidebar").style.display=="block"){
//   //   $("#sidebar").style.display="none";
//   // }else{
//   //   $("#sidebar").style.display="block";
//   //   }
// });

const year = new Date().getFullYear();
$("#date").innerText=year;


//founders
const foundersData = [
  {
    path: "./images/micheal.jpeg",
    name : "Wojuola Michael Oluwasegun",
    title: "Team Lead Fontend Dveloper | Co-Founder",
  },
  {
    path: "./images/evan.jpg",
    name : "Ezedike-Egwom Evan",
    title: "Frontend Developer | Co-Founder",
  },
]

// Function to display images dynamically
function displayImages() {
  const container = document.getElementById("cardContainer")
  foundersData.forEach((item)=>{
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


let sidebar = $("#sidebar")
let navIcon = $(".nav-icon")
$(".nav-icon").addEventListener("click", () => {

  if (sidebar.style.display === "block") {
    sidebar.style.display = "none"
    navIcon.src = "./images/bars-solid.svg"
  } else {
    sidebar.style.display = "block"
    navIcon.src = "./images/xmark-solid.svg"
  }
})



$A("#sidebar li").forEach(item => {
  item.addEventListener("click", () => {
    sidebar.style.display = "none"
    navIcon.src = "./images/bars-solid.svg"
  })
})
