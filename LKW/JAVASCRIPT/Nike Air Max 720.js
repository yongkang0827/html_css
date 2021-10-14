function readMoreFunction() {
  var blank = document.getElementById("blank");
  var more = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (blank.style.display === "none") {
    blank.style.display = "inline";
    btnText.innerHTML = "Read More"; 
    more.style.display = "none";
  } 
  else {
    blank.style.display = "none";
    btnText.innerHTML = "Read less"; 
    more.style.display = "inline";
  }
  
}

function readMoreFunctionForDelivery() {
  var blankSpace = document.getElementById("blankSpace");
  var moreText = document.getElementById("moreText");
  var btnTextForDelivery = document.getElementById("readMoreBtnForDelivery");

  if (blankSpace.style.display === "none") {
    blankSpace.style.display = "inline";
    btnTextForDelivery.innerHTML = "Read More"; 
    moreText.style.display = "none";
  } else {
    blankSpace.style.display = "none";
    btnTextForDelivery.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
  
}
function addToCartFunction(){
	window.alert("Add To Cart Successfully");
}
function addToWishListFunction(){
	window.alert("Add To Wish List Successfully");}
