<?php
    require('connect-db.php');

    $connection = mysqli_connect(ID, PASSWORD, DB, SERVER);

    if($connection){
        $actors = mysqli_query(
            $connection,
            "SELECT NumInd, Role
            FROM L2_Acteurs"
        );

        foreach($actors as $key => $value){
            if ($key == 'NumInd'){
                foreach($value as $id){
                    echo "<p> $id </p>";
                }
            }elseif($key == 'Role'){
                foreach($value as $role){
                    echo "<p> $role </p>";
                }
            }   
        }
    }