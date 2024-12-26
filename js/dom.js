let cat_call=document.querySelector(".cat_call");
let categories=document.querySelector(".categories");
let sup_call=document.querySelector(".sup_call")
let supplier=document.querySelector(".supplier")
let hideTimer
let search=document.querySelector("#search")
let btn=document.querySelector("#btn")
let search_trig=document.querySelector("#search_trig")
let search_bar=document.querySelector(".search_bar")

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

    categories.style.display="block"
})

cat_call.addEventListener("mouseleave", ()=>{


        categories.style.display = "none";
  
   
})

categories.addEventListener("mouseenter", ()=>{

    categories.style.display="block"
    cat_call.style.display="block"
})

categories.addEventListener("mouseleave", ()=>{
    
    categories.style.display="none"
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