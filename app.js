const sticky=document.querySelector("#sidebar1")
// const sticky2=document.querySelector("#sidebar2")
var lastscrollY=window.scrollY;
console.log(lastscrollY);
window.addEventListener("scroll",()=>{
    if(lastscrollY>=11314){
      (sticky).classList.add("h")
    //   (sticky2).classList.add("h")
    }else{
        (sticky).classList.remove("h") 
        // sticky2.classList.remove("h")
    }
    lastscrollY=window.scrollY;
})