<?php
include "connect.php";
session_start();

$store=$_SESSION['store'];
   

   $query= mysqli_query($conn, "SELECT * from inventory where store='$store'");

    while($row=mysqli_fetch_assoc(($query))){
        $data[] = [
            "name" => $row["name"],
            "supplier" => $row["supplier"],
            "category" => $row["category"],
            "image" => $row["image"],
            "date" => $row["date"],
            "quantity" => $row["quantity"]
        ];


      
    }


    echo json_encode($data)

?>