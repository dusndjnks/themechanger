
const btn = document.querySelector("#btn")
btn.addEventListener("click",()=>{
   if (btn.style.color=="black") {
    document.body.style.backgroundColor="white"
    btn.style.backgroundColor="black"
    btn.style.color="white"
   }else if (btn.style.color="white") {
    document.body.style.backgroundColor="black"
    btn.style.backgroundColor="white"
   btn.style.color="black"
   }
})

