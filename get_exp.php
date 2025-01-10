<?php

    include "connect.php";

    session_start();


    $data=[];

    if(!empty($_SESSION["branch"])){
        $branch=$_SESSION["branch"];
    }


    $store=$_SESSION["store"];


    $query=mysqli_query($conn, "SELECT * FROM inventory WHERE DATEDIFF(date, CURDATE())<= 7 and store='$store' and branch='$branch'");


    while($row=mysqli_fetch_assoc($query)){
        $data[] = [
            "status" => "success",
            "name" => $row["name"],
            "quantity" => $row["quantity"],
            "id" => $row["id"],
            "image" => $row["image"],
            "date" => date("d/m/Y", strtotime($row["date"])),
        ];
    }



    echo json_encode($data);
?>