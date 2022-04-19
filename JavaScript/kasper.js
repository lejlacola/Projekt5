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
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



/*** Hamburger menu starter */
document.addEventListener('DOMContentLoaded',() =>
{
	mobileMenu_init();

	window.addEventListener('resize', () =>
	{
		mobileMenu_init();
	});
});

function mobileMenu_show()
{
	return (window.matchMedia('(max-width: 1024px)').matches)
}


function mobileMenu_init()
{
	if(mobileMenu_show())
	{
		if(document.querySelector('#mobile-menu') == null)
		{
			document.querySelector('header nav').innerHTML += '<div id="mobile-menu"><span></span><span></span><span></span></div>';
			mobileMenu_build();
			document.querySelector('#mobile-menu').addEventListener('click', function(event)
			{
				mobileMenu_toggle();
			});
		}
	}
	else
	{
		mobileMenu_destroy();
	}
}


function mobileMenu_build()
{
	let menu_content = document.createElement('div');
	menu_content.setAttribute('id', 'mobile-menu-content');
	document.body.append(menu_content);

	let menu_content_overflow = document.createElement('div');
	menu_content.appendChild(menu_content_overflow);

	let navigation_clone = document.querySelector('header nav > ul').cloneNode(true);
	menu_content_overflow.appendChild(navigation_clone)
}


function mobileMenu_toggle()
{
	document.getElementById('mobile-menu').classList.toggle('open');
	document.getElementById('mobile-menu-content').classList.toggle('open');
}


function mobileMenu_destroy()
{
	let mobileMenu = document.getElementById('mobile-menu');
	if(mobileMenu != null)
	{
		mobileMenu.remove();
		document.getElementById('mobile-menu-content').remove();
	}
}

for (let i = 0; i < 5; i++){
const prototype = [
	{ name: 'april 21'},
	{ name: 'Bygger scenen'},
	{ name: 'General prøve'},
	{ name: 'Forestilling'},
]
console.log(prototype);
}
