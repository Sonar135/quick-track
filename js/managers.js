









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
                       <i class="fa-solid fa-people-roof"></i>
                    </div>

                    <div class="name">
                        <h4>${datum.name}</h4>
                    </div>

                    <div class="branch">
                        <h4>${datum.branch}</h4>
                    </div>

                    <div class="pill">
                          <a href="" class="icons"><i class="fa-solid fa-trash"></i></a> 
                       <a href="edit_manager.html?v=${datum.id}" class="icons"><i class="fa-solid fa-pen"></i></a> 
                       <a href="view_manager.html?v=${datum.id}" class="icons"> <i class="fa-regular fa-eye"></i></a>
                     
                    </div>
                </div>
        `
        });
        
    }
})