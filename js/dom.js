let cat_call=document.querySelector(".cat_call");
let category=document.querySelector(".categories");
let sup_call=document.querySelector(".sup_call")
let supplier=document.querySelector(".supplier")
let hideTimer
let search=document.querySelector("#search")
let btn=document.querySelector("#btn")
let search_trig=document.querySelector("#search_trig")
let search_bar=document.querySelector(".search_bar")
let data=document.querySelectorAll("#data");
let sale_submit=document.querySelector("#sale_submit")
let item_cards=document.querySelectorAll(".item_card")
let fileInput=document.querySelector("#img")
let img_label=document.querySelector("#img_label")




item_cards.forEach((item_card, i)=>{
    setTimeout(() => {
        item_card.style.display="block";
    }, i*100);
})


data.forEach((datum, i)=> {

    datum.addEventListener("input", ()=>{
        let allFilled = Array.from(data).every((field) => field.value.trim() !== '');
    sale_submit.disabled = !allFilled;

    

    })
 
    
   
});


fileInput.addEventListener("change", ()=>{
    const file = fileInput.files[0]; // Get the first file

    img_label.textContent = `${file.name}`;
    document.querySelector(".img_input").value=`${file.name}`

    const event = new Event("input", { bubbles: true });
    document.querySelector(".img_input").dispatchEvent(event);
        // sale_submit.disabled=false;
 
})




search.addEventListener("input", ()=>{
    if(search.value.trim()===''){
        btn.disabled=true;
    }

   else if(search.value.trim()!==''){
        btn.disabled=false;
    }
})

search_trig.addEventListener("click", ()=>{

    if(search_bar.style.display==="block"){
        search_bar.style.display="none";
    }

    else{
        search_bar.style.display="block";
    }
   
})

cat_call.addEventListener("mouseenter", ()=>{

    category.style.display="block"
})

cat_call.addEventListener("mouseleave", ()=>{


        category.style.display = "none";
  
   
})

category.addEventListener("mouseenter", ()=>{

    category.style.display="block"
    cat_call.style.display="block"
})

category.addEventListener("mouseleave", ()=>{
    
    category.style.display="none"
    // cat_call.style.display="block"
})





sup_call.addEventListener("mouseenter", ()=>{
    supplier.style.display="block"
})

sup_call.addEventListener("mouseleave", ()=>{
    supplier.style.display="none"
})

supplier.addEventListener("mouseenter", ()=>{
    supplier.style.display="block"
    sup_call.style.display="block"
})

supplier.addEventListener("mouseleave", ()=>{
    supplier.style.display="none"
    // cat_call.style.display="block"
})



// table

$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
  }).resize();




