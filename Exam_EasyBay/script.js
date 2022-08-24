console.log("sanity check");

function removeCookie(id){
    // console.log('testing', id);
    let elementToRemove = document.querySelector('#'+id)
    elementToRemove.remove();
}

function cartStatus(){
    alert("Your cart is empty!");
}

function switchImg(imgElement){
   
    console.log(imgElement.src);
    if(imgElement.src === 'http://127.0.0.1:5500/Exam_EasyBay/images/assets/succulents-1.jpg'){
        imgElement.src = "./images/assets/succulents-2.jpg"
    }else{
        imgElement.src = "./images/assets/succulents-1.jpg"
    }
}

