





fetch(`get_branches.php`, {
    method:"GET",
})

.then(res=>res.json())
.then(data=>{

    if(data.status==="null"){


        
        document.querySelector(".cont1").innerHTML = "  <h1>No branch</h1>";
        
          
    
    
                  
    


    }

    else{
        // document.querySelector(".null").style.display="none"
        data.forEach((datum)=>{
            // console.log(datum)
    
            document.querySelector(".cont1").innerHTML+=`
    <div class="store field_block">
            <div class="pill">
                    <img src="images/istockphoto-1412353022-612x612.jpg" alt="">
                    <div class="pill_overlay">
                        <a href="branch.html?v=${datum.branch}" class="delete" id="rise">Branch Data</a> 
                        <a href="" class="delete" id="rise"> Delete Branch</a>
                        <a href="assign_manager.html?v=${datum.branch}" class="delete" id="rise">Assign Manager</a>
                    </div>
                </div>

                <h3>${datum.branch}</h3>
                <h3>combined inventory level: ${datum.total}</h3>
          

            
            </div>
    
    
                  
    `
    
        
        })
    
      
        
    

    }
  

    let pills=document.querySelectorAll(".pill")
    
    let timeouts = [];
    let fields_block=document.querySelectorAll(".field_block")

    fields_block.forEach((field, i) =>{
        setTimeout(() => {
            field.style.display = 'block'; 
          }, i * 100); 
    })
    
    
    pills.forEach((pill, i)=>{
        pill.addEventListener("mouseenter", ()=>{
    
            pill.querySelector("img").style.filter="blur(4px)"
            pill.querySelector("img").style.transition="1s"
        
            timeouts.forEach(timeout => clearTimeout(timeout));
            timeouts = [];
            let rise=pill.querySelectorAll(".pill_overlay #rise")
                rise.forEach((li, i)=>{
        
                
              
               
                   const timeout= setTimeout(()=>{
                        li.classList.add("active")
                    },i*100)
        
                    timeouts.push(timeout);
                })
          
         
        })
    })
    

    pills.forEach((pill, i)=>{
        pill.addEventListener("mouseleave", ()=>{
            pill.querySelector("img").style.filter="blur(0)"
            pill.querySelector("img").style.transition="1s"

            timeouts.forEach(timeout => clearTimeout(timeout));
            timeouts = [];
        
            let rise=pill.querySelectorAll(".pill_overlay #rise")
            rise.forEach((li, i)=>{
        
                    li.classList.remove("active")
               
            })
        })
    })
    



 
})


