let snowDiv = document.querySelector("#snowDiv")
let nL = document.querySelector("#navLeft")
nL.addEventListener("click", moveL)
let nR = document.querySelector("#navRight")
nR.addEventListener("click", moveR)
let B = document.querySelector("#basket")
B.style.left = "100px";
let point = 0

setInterval(genereteSnow, 1500);
setInterval(moveSnow, 200);
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

function genereteSnow() {
        let snow = document.createElement("div")
        snow.innerHTML = "❄"
        snow.className = "snow"
        snow.style.top = "0px"

        let left = Math.floor(Math.random() * 90)
        snow.style.marginLeft = snowDiv.offsetWidth * (left/ 100) + "px"
        let a = document.querySelectorAll(".snow")
        if (a.length == 0) {
            snowDiv.append(snow)
        }
        else{
            snowDiv.prepend(snow)
            

        }
}
function moveSnow() {
    let a = document.querySelectorAll(".snow")
    basketH = height - 260
    a.forEach(element => {
        element.style.top = parseInt(element.style.top) + 10 + "px"
        if (basketH < parseInt(element.style.top)) {
            if (parseInt(element.style.marginLeft) > parseInt(B.style.left) 
             && parseInt(element.style.marginLeft) < parseInt(B.style.left) + parseInt(B.offsetWidth)) {
                element.remove();
                point ++;
            }
            else{
                console.log("vesztettés");
                element.remove();
            
            }
        }
    });

}


function loose() {
    
}





function moveL(){
    let L = parseInt(B.style.left);

   if (L > 10) {
    B.style.left = parseInt(B.style.left) - 10 + "px"; 
    }
}
function moveR(){
    let L = parseInt(B.style.left) + 200;

   if (L < snowDiv.offsetWidth + 10) {
    B.style.left = parseInt(B.style.left) + 10 + "px"; 
    }
}