//product display function
function displayImage(img){
    const displayBox = document.querySelector('.box-wra');
    const displayInnerImage = document.querySelector('.display-img');
    displayBox.style.display = 'block';
    displayInnerImage.src = img.src;
    displayInnerImage.style.transition = '0.7s ease-in';
    displayInnerImage.addEventListener('click', function(){
        toggleBox();
    })
    const close = document.getElementById('close');
    close.addEventListener('click', function(){
        displayBox.style.display = 'none';

    })
}

//toggle
let toggled;
function toggleBox(){
    const displayInnerImage = document.querySelector('.display-img');
    if(!toggled){
        toggled = true;
        displayInnerImage.style.transform = 'scale(2.5)';
        displayInnerImage.style.transition = '0.3s ease-in';
    }
    else{
        if(toggled){
           toggled = false;
           displayInnerImage.style.transform = 'scale(1.0)'; 
        }
    }
}

//Toggle fullscreen
// function toggleFullScreen() {
// if (!document.fullscreenElement) {
//     document.documentElement.requestFullscreen();
//     // document.documentElement.style.zIndex = 123456;
// } else {
//     if (document.exitFullscreen) {
//     document.exitFullscreen();
//     }
// }
// }


let togglee;
function toggleGridBox(){
    const displayGrid = document.querySelector('.grid-wraper');
    console.log(displayGrid);
    if(!togglee){
        togglee = true;
        displayGrid.style.display = 'block';
    }
    else{
        if(togglee){
           togglee = false;
           displayGrid.style.display = 'none'; 
        }
    }
}



//Toggle fullscreen
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        document.style.backgroundColor = '#000';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            document.style.backgroundColor = '#000000c7';
        }
    }
    }



const hiddenDiv = document.querySelector('.hidden-div')
const products = document.querySelector('.galary-products');
const productItems = Array.from(products.children);
const img = document.querySelector('.img');
// console.log(productItems);
products.addEventListener('click', e =>{
    // console.log(e.target.src);
    hiddenDiv.style.display = 'block';
    img.src = e.target.src;
})

let toggle;
function toggleImage(){
    if(!toggle){
        toggle = true;
        img.style.transform = 'scale(2.5)';
        img.style.cursor = 'zoom-out';
    }
    else{
        if(toggle){
           toggle = false;
           img.style.transform = 'scale(1.0)';
           img.style.cursor = 'zoom-in';
        }
    }
}


const product = document.querySelector('.grid');
const productItem = Array.from(product.children);
product.addEventListener('click', e =>{
    img.src = e.target.src;
    e.target.classList.add('active-border');
})

const closed = document.querySelector('.close');
closed.addEventListener('click', e=>{
    hiddenDiv.style.display = 'none';
})



