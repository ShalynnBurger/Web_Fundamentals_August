console.log("sanity check");

function increaseLikes(elementID){
    console.log("testing", elementID);
   let spanElement = document.querySelector("#"+elementID);
   console.log(spanElement);
   let currentCount = spanElement.innerText;
   currentCount++;
   spanElement.innerText = currentCount;
}

function increaseLikes2(elementID){
    
   let spanElement = document.querySelector("#"+elementID);
   console.log(spanElement);
   let currentCount = spanElement.innerText;
   currentCount++;
   spanElement.innerText = currentCount;
}

function increaseLikes3(elementID){
    
    let spanElement = document.querySelector("#"+elementID);
    console.log(spanElement);
    let currentCount = spanElement.innerText;
    currentCount++;
    spanElement.innerText = currentCount;
 }