
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




// table

$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
  }).resize();


