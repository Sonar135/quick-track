









fetch("get_manager.php", {
    method: "GET"
})

.then(res=>res.json())
.then(data=>{

    console.log(data)
    if(data.status==="null"){

    }


    else{

        data.forEach(datum => {
            document.querySelector(".cent").innerHTML+=`
        
            
                <div class="card">
                    <div class="profile_pic">
                        <i class="fa-solid fa-user"></i>
                    </div>

                    <div class="name">
                        <h4>${datum.name}</h4>
                    </div>

                    <div class="branch">
                        <h4>${datum.branch}</h4>
                    </div>

                    <div class="pill">
                        <div class="icons"><i class="fa-solid fa-trash"></i></div>
                        <div class="icons"><i class="fa-solid fa-pen"></i></div>
                        <div class="icons"><i class="fa-regular fa-eye"></i></div>
                     
                    </div>
                </div>
        `
        });
        
    }
})