<?php

    include "connect.php";


    session_start();
    $store=$_SESSION["store"];






    $query=mysqli_query($conn, "SELECT * from managers where  store='$store'");
    $data=[];
  

    if(mysqli_num_rows($query)<1){
        $data=[
             "status"=>"null"  
            
            ];
    }

    else{
        while( $row=mysqli_fetch_assoc($query)){

         
            $manager=$row["email"];

            $get_branch=mysqli_query($conn, "SELECT * from branches where manager='$manager' and store='$store'");

          

            if (!$get_branch || mysqli_num_rows($get_branch) < 1) {
                // If no branch found, set branch to "no branch"
                $branch = "no branch";
            } else {
                $row2 = mysqli_fetch_assoc($get_branch);
                $branch = $row2["branch"];
            }



                $data[]=[
                    "branch"=>$branch,
                    "name"=>$row["name"],
                    "email"=>$row["email"],
                    "phone"=>$row["phone"],     
                ];
            

          
        }
    
    }

   

    echo json_encode($data);
?>

