<?php

session_start();
include 'connect.php';
if(isset($_SESSION["id"])){
  $store=$_SESSION['store'];
}





      
    $name=$_POST["name"];
    $quantity=$_POST["quantity"];
    $supplier=$_POST["supplier"];
    $category=$_POST["category"];
    $date=$_POST["date"];
    $img_input=$_POST["img_input"];
    // $store="demo";

    $temp_img=$_FILES['image']['tmp_name'];



    if (!filter_var($quantity, FILTER_VALIDATE_INT)) {
        echo json_encode(['status'=> 'quantity_invalid']);
        exit();
    }

    else if(  !preg_match("/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/", $date)){
        echo json_encode(['status'=>'invalid_date']);
        exit();
    }



    else{
        $query=mysqli_query($conn, "INSERT into inventory (name, quantity, supplier, category, date, image, store) values('$name', '$quantity', '$supplier', '$category', '$date', '$img_input', '$store' )");
         move_uploaded_file($temp_img, "./pictures/$img_input");
         if($query){
           
          echo  json_encode(['status'=>'success']);
         }
    }


    

    

    
 
?>