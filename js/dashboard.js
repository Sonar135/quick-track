let item_cont=document.querySelector(".item_cont");
let large_select=document.querySelector(".large_select");
let supply_li=document.querySelectorAll(".supply ul li")
let category_li=document.querySelectorAll(".category ul li")
let filter=document.querySelector(".fil");
let cat_input=document.querySelector("#cat_input")
let sup_input=document.querySelector("#sup_input")
let delay;
let datas = document.querySelectorAll(".input_data");
let filterButton = document.querySelector(".filter_button");
let form=document.querySelector("#filter_form")
let sort=document.querySelector(".sort")
let sorter=document.querySelector(".sorter");
let sort_li=document.querySelectorAll(".sort_list ul li")
let order_li=document.querySelectorAll(".order ul li")
let sort_input=document.querySelector("#sort_input")
let order_input=document.querySelector("#order_input")
let sortForm=document.querySelector("#sort_form")

datas.forEach((datum, i) => {
    datum.addEventListener("input", () => {
   
        // let allFilled = Array.from(datas).every((field) => field.value.trim() !== "");

      
        // filterButton.disabled = !allFilled;

        // if(datas[0].value.trim()!=="" || datas[1].value.trim()!==""){
        //     filterButton.disabled=false;
        // }

        // else {
        //     filterButton.disabled=true;
        // }
    });
});











const display_none=(filtrate, filter, large_select)=>{

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




const animate=(filtrate, filter, large_select)=>{
    filtrate.forEach((li, i)=>{
         
        filter.addEventListener("mouseenter", ()=>{


            if(delay) clearTimeout(delay);
            large_select.style.display="block"  
          
                li.style.display="block";
               
         
        })
      
    })
}





display_none(supply_li, filter, large_select)
display_none(category_li, filter, large_select)

animate(supply_li, filter, large_select)
animate(category_li, filter, large_select)


display_none(sort_li, sort, sorter)
display_none(order_li, sort, sorter)

animate(sort_li, sort, sorter)
animate(order_li, sort, sorter)




const get_input=(input_li, input)=>{
    input_li.forEach((li)=>{
        li.addEventListener("click", ()=>{
    
    
            if(li.classList.contains("selected")){
    
                input.value="";
                li.classList.remove("selected")
            }
    
            else{
                input.value=li.textContent;
                li.classList.add("selected")
    
                
        
                input_li.forEach((li_not)=>{
                    if(li_not!==li){
                        li_not.classList.remove("selected");
                    }
                })
            }
       
           
            const event = new Event("input", { bubbles: true });
            input.dispatchEvent(event);
    
        })
    })
    
}



get_input(supply_li, sup_input)
get_input(category_li, cat_input)

get_input(sort_li, sort_input)
get_input(order_li, order_input)



large_select.addEventListener("mouseenter", ()=>{
    large_select.style.display="block";
})


sorter.addEventListener("mouseenter", ()=>{
    sorter.style.display="block";
})



function fetchInventory(filters = {}) {

    item_cont.innerHTML = "";

    const queryParams = new URLSearchParams(filters).toString();

    fetch(`get_inventory.php?${queryParams}`, {
        method:"GET",
    })
    
    .then(res=>res.json())
    .then(data=>{

        if(data.status==="null"){
            console.log(data)

            
            item_cont.innerHTML = "  <h1>No Products</h1>";
            
              
        
        
                      
        


        }

        else{
            // document.querySelector(".null").style.display="none"
            data.forEach((datum)=>{
                console.log(datum)
        
                item_cont.innerHTML+=`
        <div class="item_card">
                          <div class="item">
                              <div class="item_pic">
                                <div class="pic_overlay"></div>
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
        }
      
    
    
    
    
     
    })


}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const filters = Object.fromEntries(formData.entries());
    large_select.style.display="none" 
    sorter.style.display="none"
    fetchInventory(filters);

    let item_cardss=document.querySelectorAll(".item_card")
    item_cardss.forEach((item_card, i)=>{
        void item_card.offsetWidth;
        setTimeout(() => {
            item_card.style.display="block";
        }, i*100);
    })
    
});





fetchInventory()

