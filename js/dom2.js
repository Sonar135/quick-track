let items=document.querySelectorAll(".items ul li");
let product=document.querySelector(".product_data");
let item_sel= document.querySelector(".item_selector")
let item_h4=document.querySelector(".item_selector h4")




item_sel.addEventListener("mouseenter", ()=>{
    document.querySelector(".items").style.display="block";
})



item_sel.addEventListener("mouseleave", ()=>{
    document.querySelector(".items").style.display="none";
})




items.forEach(item => {
    item.addEventListener("click", ()=>{
        let item_data=item.textContent;
        // item_h4.classList.add("animate-text");
        product.value=item_data;
        item_h4.textContent=item_data;
        item_h4.classList.remove("animate-text");

        void item_h4.offsetWidth;
        item_h4.classList.add("animate-text");

        document.querySelector(".items").style.display="none";
        
       

        
        
      
    })
});

