const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 3000);
})

function splashlog(x) {
	let splash1=document.getElementById("splash1");
	let splash2=document.getElementById("splash2");
	let splash3=document.getElementById("splash3");
 }
	const uger=["splash1", "splash2", "splash3"];
	//console.log(splashes);

    let hour = new Date().getHours();
if (hour < 20) {
  greeting = "God dag!";
} else {
  greeting = "God aften!";
}
