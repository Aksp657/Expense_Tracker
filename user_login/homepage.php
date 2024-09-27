<?php
session_start();
include("connect.php");

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: white;
            align-items: center;
        }
        .ET{
            margin-top: 200px;
            width: 250px;
            height: 400px;
            margin: 25px;
            border-radius: 40px;
        }
        .container{
            display: flex;
            align-content: center;
            justify-content: center;

        }
        h2 {
            color: rgb(29, 17, 17);
        }
        a{
            text-decoration: none;
        }
        .d1 {
            background-color: rgb(77, 239, 77);
            box-shadow: 2px 2px 10px rgb(74, 71, 71);
        }
        .d2 {
            background-color: rgb(35, 172, 231);
            box-shadow: 2px 2px 10px rgb(74, 71, 71);
        }
        .a2
        {
            color: white;
        }
        .a1{
            color: white;
        }

    </style>
</head>
<body>
    <center>
        <img src="" width="100px" alt="">
        <h1>Expencify</h1>
    <div class="container"> <a href="../Expense_tracker/EXPT.html" target="_self">
        <div class="ET d1"><br><br><br><br><br><br><br><br>
            <h2 class="a1">Income and Expense Tracker</h2>
        </div></a><a href="../Budget_tracker/budget.html" target="_self">
        <div class="ET d2"><br><br><br><br><br><br><br><br>
            <h2 class="a2">Budget Tracker</h2>
        </div></a>
   </div> </center>
</body>
</html>
