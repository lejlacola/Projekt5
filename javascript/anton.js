/*** kontakt script kodet af Kasper og Anton */
function _(id) {return document.getElementById(id);}
function submitForm(){
	_("mybtn").disabled = true;
	_("status").innerHTML = 'vent venligst ...';
	var formdata = new FormData();
	formdata.append( "n", _("n").value );
	formdata.append( "e", _("e").value );
	formdata.append( "m", _("m").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "example_parser.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h2>Tak '+_("n").value+', beskeden er sendt.</h2>';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("mybtn").disabled = false;
			}
		}
	}
	ajax.send( formdata );}

	/*** Hamburger menu starter - kodet af Anton Warming */
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
