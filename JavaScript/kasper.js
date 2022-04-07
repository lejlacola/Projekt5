//kodet af Kasper 

function parallax(){
	let prlx_lyr_1 = document.getElementById('prlx_lyr_1');
	let prlx_lyr_2 = document.getElementById('prlx_lyr_2');
	prlx_lyr_1.style.top = -(window.pageYOffset / 4)+'px';
	prlx_lyr_2.style.top = -(window.pageYOffset / 8)+'px';
}
window.addEventListener("scroll", parallax, false);


 function loopuge(x) {
	let uge1=document.getElementById("uge1");
	let uge2=document.getElementById("uge2");
	let uge3=document.getElementById("uge3");
 }
	const uger=["uge1", "uge2", "uge3"];
	console.log(uger);
	
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("uge");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
  }
  slides[slideIndex-1].style.display = "none";
}
