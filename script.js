let snowDiv = document.querySelector("#snowDiv")
let nL = document.querySelector("#navLeft")
let IL
let IR
nL.addEventListener("mouseenter", () => {
    IL = setInterval(moveL, 100);
    
})
nL.addEventListener("mouseout", () => {
    clearInterval(IL);

    
})
let nR = document.querySelector("#navRight")
nR.addEventListener("mouseenter", () => {
    IR = setInterval(moveR, 100);
    
})
nR.addEventListener("mouseout", () => {
    clearInterval(IR);

    
})
let B = document.querySelector("#basket")
B.style.left = "100px";
let point = 0

let Loose = document.querySelector("#loose")
let LoosePoint = document.querySelector("#pont")

let I1 = setInterval(genereteSnow, 1500);
let I2 = setInterval(moveSnow, 200);
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
            if (parseInt(element.style.marginLeft) +50 > parseInt(B.style.left) 
             && parseInt(element.style.marginLeft) < parseInt(B.style.left) + parseInt(B.offsetWidth)) {
                element.remove();
                point ++;
            }
            else{
                console.log("vesztettés");
                element.remove();
                loose()
            }
        }
    });

}


function loose() {
    Loose.style.display = "block"
    LoosePoint.innerHTML = point + "pontot értél el!"
    clearInterval(I1);
    clearInterval(I2);
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