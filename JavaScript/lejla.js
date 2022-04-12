const tekstfelter = ["tekstfelt1", "tekstfelt2", "tekstfelt3","tekstfelt4"];
for(let i = 0; i < tekstfelter.length; i++){
    console.log(tekstfelter[i]);
}

let boxes = document.getElementsByClassName("tekstfelt");
console.log(boxes);
let btns = document.getElementsByClassName("nyhederknap");


function jstekstfelt(b) {
    let box = boxes[b];
    let height1 = box.offsetHeight;
        if(height1 < 50){
        box.style.height= (height1=100)+"px";
        btns[b].innerHTML = "Læs mindre";
		document.getElementById("tekst1").style.visibility = "hidden";
		document.getElementById("tekst1.1").style.visibility = "visible";
    }
    else{
        let height1 = box.offsetHeight
        box.style.height= (height1=30)+"px";
        btns[b].innerHTML = "Læs mere";
		document.getElementById("tekst1").style.visibility = "visible";
		document.getElementById("tekst1.1").style.visibility = "hidden";
    }
};

function jstekstfelt(b) {
    let box = boxes[b];
	let height2 = box.offsetHeight;
        if(height2 < 50){
        box.style.height= (height2=100)+"px";
        btns[b].innerHTML = "Læs mindre";
		document.getElementById("tekst2").style.visibility = "hidden";
		document.getElementById("tekst2.1").style.visibility = "visible";
    }
    else{
        let height2 = box.offsetHeight
        box.style.height= (height2=30)+"px";
        btns[b].innerHTML = "Læs mere";
		document.getElementById("tekst2").style.visibility = "visible";
		document.getElementById("tekst2.1").style.visibility = "hidden";
    }
};

function jstekstfelt(b) {
    let box = boxes[b];
	let height3 = box.offsetHeight;
        if(height3 < 50){
        box.style.height= (height3=100)+"px";
        btns[b].innerHTML = "Læs mindre";
		document.getElementById("tekst3").style.visibility = "hidden";
		document.getElementById("tekst3.1").style.visibility = "visible";
    }
    else{
        let height3 = box.offsetHeight
        box.style.height= (height3=30)+"px";
        btns[b].innerHTML = "Læs mere";
		document.getElementById("tekst3").style.visibility = "visible";
		document.getElementById("tekst3.1").style.visibility = "hidden";
    }
};


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
	return (window.matchMedia('(max-width: 1024px)').matches) ? true : false;
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
				event.preventDefault();
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
	menu_content_overflow.appendChild(navigation_clone);
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
