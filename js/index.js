let rise=document.querySelectorAll("#lift")
let after_lift= document.querySelectorAll("#after_lift")




rise.forEach((lifted, i)=>{
   

    setTimeout(()=>{
 lifted.style.display="block"
    }, i*800)
})


setTimeout(()=>{

    after_lift.forEach((lifted, i)=>{
        setTimeout(()=>{
             lifted.style.display="flex"
        }, i*200)
    })

}, 3000)