<?php

    require 'connect-db.php';
    
    $username = $_GET['username'];
    $password = $_GET['password'];

    $connection = mysqli_connect(SERVER, ID, PASSWORD, DB);

    if($connection){
        $query = mysqli_prepare(
            $connection,
            "SELECT PASSWORD FROM USERS WHERE USERNAME = ?"
        );
        mysqli_stmt_bind_param($query, 's', $username);
        mysqli_stmt_execute($query);
        $result = mysqli_stmt_get_result($query);

        if($row = mysqli_fetch_assoc($result)){
            if (password_verify($password, $row['PASSWORD'])){
                echo "success" ;
            } else{
                echo "Invalid username or password". mysqli_error($connection);
                exit;
            }
        }else {
            echo "Couldn't find your account";
        }

    }
    mysqli_close($connection);


    // $method = $_SERVER['REQUEST_METHOD'];
    // print_r($method);