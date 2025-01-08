<?php

    include "connect.php";

    
    session_start();

    $where="";
    $filters=[];
    $store=$_SESSION["store"];



    if(isset($_GET["v"])){
        $v = $_GET['v'];
        $filters[] = "branch = '$v'";
    }

    if (count($filters) > 0) {
        $where = " AND " . implode(" AND ", $filters);
    }



    $query=mysqli_query($conn, "SELECT * from branches where  store='$store' $where");
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
                $total=$totalQuantity===null?"0":$totalQuantity;




                $data[]=[
                    
                    "branch"=>$row["branch"],
                    "store"=>$row["store"],
                    "addresss"=>$row["address"],
                    "manager_name"=>$row["manager_name"],
                    "manager"=>$row["manager"],
                    "total"=>$total
                
                ];
            

          
        }
    
    }

   

    echo json_encode($data);
?>

