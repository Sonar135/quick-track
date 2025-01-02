let item_cont=document.querySelector(".item_cont");
let large_select=document.querySelector(".large_select");
let supply_li=document.querySelectorAll(".supply ul li")
let category_li=document.querySelectorAll(".category ul li")
let filter=document.querySelector(".fil");
let cat_input=document.querySelector("#cat_input")
let sup_input=document.querySelector("#sup_input")
let delay;



const display_none=(filtrate)=>{

    filtrate.forEach((li, i)=>{
          
     

        filter.addEventListener("mouseleave", ()=>{
         
            if(delay) clearTimeout(delay);
            delay=setTimeout(() => {
                large_select.style.display="none" 
                li.style.display="none";
               
              
            }, 200);
      
   
        })
  
})
}




const animate=(filtrate)=>{
    filtrate.forEach((li, i)=>{
         
        filter.addEventListener("mouseenter", ()=>{


            if(delay) clearTimeout(delay);
            large_select.style.display="block"  
            setTimeout(()=>{
                li.style.display="block";
               
            }, i * 100 )
        })
      
    })
}





display_none(supply_li)
display_none(category_li)

animate(supply_li)
animate(category_li)



supply_li.forEach((li)=>{
    li.addEventListener("click", ()=>{

        sup_input.value=li.textContent;
        li.classList.add("selected")

        supply_li.forEach((li_not)=>{
            if(li_not!==li){
                li_not.classList.remove("selected");
            }
        })
       


    })
})


category_li.forEach((li)=>{
    li.addEventListener("click", ()=>{
      

    
            cat_input.value=li.textContent;
            li.classList.add("selected")

            category_li.forEach((li_not)=>{
                if(li_not!==li){
                    li_not.classList.remove("selected");
                }
            })
            
        
    })
})



large_select.addEventListener("mouseenter", ()=>{
    large_select.style.display="block";
})


fetch("get_inventory.php", {
    method:"GET",
})

.then(res=>res.json())
.then(data=>{
  

    data.forEach((datum)=>{
        console.log(datum)

        item_cont.innerHTML+=`
<div class="item_card">
                  <div class="item">
                      <div class="item_pic">
                          <img src="pictures/${datum.image}" alt="">
                      </div>

                      <div class="item_details">
                        <div class="data"><h4>Stock:</h4> <p>${datum.quantity}</p></div>
                        <div class="data"><h4>Category:</h4> <p>${datum.category}</p></div>
                        <div class="data"><h4>Supplier:</h4> <p>${datum.supplier}</p></div>
                        <div class="data"><h4>Expiration:</h4> <p>${datum.date}</p></div>
                      </div>
                  </div>

                  <div class="item_name">
                     <h4>${datum.name}</h4> 
                  </div>

              </div>


              
`

    
    })

  
    

let item_cardss=document.querySelectorAll(".item_card")
item_cardss.forEach((item_card, i)=>{
    setTimeout(() => {
        item_card.style.display="block";
    }, i*100);
})



 
})