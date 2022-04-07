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
    }
    else{
        let height1 = box.offsetHeight
        box.style.height= (height1=30)+"px";
        btns[b].innerHTML = "Læs mere";
    }
};