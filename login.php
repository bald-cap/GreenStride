<?php

    require 'connect-db.php';

    $username = $_POST['username'];
    $password = $_POST['password'];
    $passhashed = password_hash($password, PASSWORD_DEFAULT);

    $connection = mysqli_connect(ID, PASSWORD, DB, SERVER);

    if($connection){
        $loginVerf = $connection->prepare(
            "SELECT USERNAME, PASSWORD
            FROM USERS
            WHERE USERNAME = ? AND PASSWORD = ?;"
        );
        $loginVerf->bind_param('ss', $username, $passhashed);
        $loginVerf->execute();
        $logins = $loginVerf->get_result();

        if($loginVerf->execute()){
            if($logins->num_rows > 0){
                echo "success";
            }else{
                echo "not recognised";
            }
        }
    }