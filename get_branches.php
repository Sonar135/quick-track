<?php

    include "connect.php";


    session_start();
    $store=$_SESSION["store"];






    $query=mysqli_query($conn, "SELECT * from branches where  store='$store'");
    $data=[];
  

    if(mysqli_num_rows($query)<1){
        $data=[
             "status"=>"null"  
            
            ];
    }

    else{
        while( $row=mysqli_fetch_assoc($query)){

         
            $branch_name=$row["branch"];

            $get_quantity=mysqli_query($conn, "SELECT SUM(quantity) as total_quantity from inventory where branch='$branch_name' and store='$store'");

            $row2=mysqli_fetch_assoc($get_quantity);
                $totalQuantity = $row2["total_quantity"];




                $data[]=[
                    "branch"=>$row["branch"],
                    "store"=>$row["store"],
                    "addresss"=>$row["address"],
                    "manager_name"=>$row["manager_name"],
                    "manager"=>$row["manager"],
                    "total"=>$totalQuantity
                
                ];
            

          
        }
    
    }

   

    echo json_encode($data);
?>

