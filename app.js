let  modalBtn = document.querySelector(".modal-btn");
let closeBtn = document.querySelector(".close-btn");
let main2 =document.querySelector(".main2");

modalBtn.addEventListener("click",()=>{
   {
      main2.classList.add("open-model")
    }
    //  main2.classList.toggle("open-model")
})
closeBtn.addEventListener("click",()=>{
   {
        main2.classList.remove("open-model")
    }
})