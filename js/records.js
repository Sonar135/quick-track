let branches=document.querySelectorAll(".branch_nav ul li");
let inventory=document.querySelector(".invent")
let sales=document.querySelector(".sales")
let purchases=document.querySelector(".purchases")





branches.forEach((branch, i)=>{
    branch.addEventListener("click", ()=>{
        if(i===0){
            inventory.style.display="block";
            sales.style.display="none";
            purchases.style.display="none";

            fields_block.forEach((field, i) =>{
                setTimeout(() => {
                    field.style.display = 'block';
                  }, i * 100); 
            })


            trs.forEach((tr, i) =>{
              
                tr.style.display = 'none';
           
        })


            
            
        }

        if(i===1){
            inventory.style.display="none";
            sales.style.display="block";
            purchases.style.display="none";

            fields_block.forEach(field_block=>{
                field_block.style.display="none";
            })


            trs.forEach((tr, i) =>{
                setTimeout(() => {
                    tr.style.display = 'table-row';
                  }, i * 100); 
            })
        }

        if(i===2){
            inventory.style.display="none";
            sales.style.display="none";
            purchases.style.display="block";
             fields_block.forEach(field_block=>{
                field_block.style.display="none";
            })


            trs.forEach((tr, i) =>{
              
                    tr.style.display = 'none';
               
            })
        }

 
    })
})



