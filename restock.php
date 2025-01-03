<?php
    include "connect.php";
    $id=$_POST["id"];
    $get_quantity=mysqli_query($conn, "SELECT quantity from inventory where id='$id'");
    $row=mysqli_fetch_assoc($get_quantity);


    $response="error";
    $name=$_POST["name"];
    $quantity= intval($_POST["quantity"]);
    $supplier=$_POST["supplier"];
    $old_stock=$row["quantity"];
    $current_stock=$old_stock+$quantity;

  

    

    $update_stock=mysqli_query($conn, "INSERT into purchases(name, supplier, quantity, current_stock, date) values
   ('$name', '$supplier', '$quantity', '$current_stock', CURDATE() )");


if($update_stock){
   $update_inventory=mysqli_query($conn, "UPDATE inventory set quantity='$current_stock' where id='$id'");

   if($update_inventory){
    $response="success";
   }
}



echo json_encode(["status"=>$response]);
?>


