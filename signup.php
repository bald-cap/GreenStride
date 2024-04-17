<?php
    require('connect-db.php');

    $email = $_GET['newEmail'];
    $username = $_GET['newUsername'];
    $password = $_GET['newPassword'];
    $passhashed = password_hash($password, PASSWORD_DEFAULT);
    $confPassword = $_GET['newConfPassword'];
    
    $connection = mysqli_connect(SERVER, ID, PASSWORD, DB);
    
    if ($connection === false) {
        echo "Database connection failed: " . mysqli_connect_error();
        exit;
    }
    
    if ($confPassword != $password) {
        echo "password mismatch";
        exit;
    }
    
    $query = mysqli_prepare($connection, "SELECT USERNAME FROM USERS WHERE USERNAME = ?");
    mysqli_stmt_bind_param($query, 's', $username);
    mysqli_stmt_execute($query);
    $response = mysqli_stmt_get_result($query);
    
    if (mysqli_fetch_assoc($response)) {
        echo "user already exists";
    } else {
        
        $queryIn = mysqli_prepare($connection, "INSERT INTO USERS (EMAIL, USERNAME, PASSWORD) VALUES (?, ?, ?)");
        mysqli_stmt_bind_param($queryIn, 'sss', $email, $username, $passhashed);
        mysqli_stmt_execute($queryIn);
    
        if (mysqli_stmt_affected_rows($queryIn) > 0) {
            echo "success";
        } else {
            echo "Registration failed: " . mysqli_error($connection);
        }
    }
    
    mysqli_close($connection);