fetch('get_session.php')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    console.log(data);
                    
                    document.querySelector(".last_cont ul").innerHTML=`
                    <li>${data.branch}</li> 
                    <a href="logout.php"><li>Logout</li></a>`
                } else {
                   
                    window.location.href = 'login.html';
                }
            })
            .catch(error => console.error('Error:', error));