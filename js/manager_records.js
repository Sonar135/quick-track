let delay


fetch("get_inventory.php", {
    method:"GET",
})

.then(res=>res.json())
.then(data=>{
  

    data.forEach((datum)=>{
        console.log(datum)



        document.querySelector(".items ul").innerHTML+=`
         <li>${datum.name}</li>
        `
    })

  
    




    let itemss=document.querySelectorAll(".items ul li");







    itemss.forEach((item, i)=>{
        item_sel.addEventListener("mouseleave", ()=>{

            if (delay) clearTimeout(delay);
          delay= setTimeout(()=>{
                document.querySelector(".items").style.display="none";
        
            
        
          
                item.style.display="none";
            }, 200)
         
            
        
        })
    })

    itemss.forEach((item, i)=>{
        item_sel.addEventListener("mouseenter", ()=>{

            if (delay) clearTimeout(delay);
          
            document.querySelector(".items").style.display="block";
        
            
        
            setTimeout(() => {
                item.style.display="block";
            }, i*100);
        
        })
    })
    
    
    



    document.querySelector(".items").addEventListener("mouseenter", ()=>{
        document.querySelector(".items").style.display="block";
    })
    
    
    itemss.forEach((item, i) => {
        item.addEventListener("click", ()=>{
            let item_data=item.textContent;
            // item_h4.classList.add("animate-text");
            product.value=item_data;
            const event = new Event("input", { bubbles: true });
    
            product.dispatchEvent(event);
            item_h4.textContent=item_data;
    
            item_h4.classList.remove("animate-text");
    
            void item_h4.offsetWidth;
            item_h4.classList.add("animate-text");
    
            document.querySelector(".items").style.display="none";
        })
    
    
       
    });

 
})













