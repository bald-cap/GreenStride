<?php
    require('connect-db.php');

    $email = $_POST['newEmail'];
    $username = $POST['newUsername'];
    $password = $_POST['newPassword'];
    $confPassword = $_POST['confPassword'];

    $connection = mysqli_connect(ID, PASSWORD, DB, SERVER);

    if($confPassword != $password){
        echo "password mismatch";
    }elseif($connection){
        $verfUserExist = $connection->prepare(
            "SELECT USERNAME
            FROM USERS
            WHERE NAME = ?;"
        );
        $verfUserExist->bind_param('ss', $username, $password);
        $verfUserExist->execute();
        $userExist = $verfUserExist->get_result();

        if ($verfUserExist->execute() and $userExist->num_rows > 0){
            echo "user already exists";
        }else{
            $signup = $connection->prepare(
                "INSERT INTO USERS (EMAIL, USERNAME, PASSWORD)
                VALUES (?, ?, ?);"
            );
            $signup->bind_param('sss', $email, $username, $password);
            $signup->execute();

            if($signup->affected_rows > 0){
                echo "success";
            }
        }
        
    }