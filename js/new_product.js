let product_form=document.querySelector("#product_form");
let message=document.querySelector(".message");
let data=document.querySelectorAll(".data")



product_form.addEventListener("submit", (e)=>{
    e.preventDefault();

   const form_data=new FormData(product_form);


   fetch("new_product.php", {
    method: 'POST',
    body: form_data
})

.then(response=>response.json())
.then(data=>{
    if(data.status==="success"){
        message.style.display="flex"
       message.textContent="item inserted";

       setTimeout(() => {
        message.style.display='none';
        }, 7000);
        
        sale_submit.disabled = true;

        data.forEach((datum, i)=> {

            datum.value="";        
           
        });
    }
})
})

