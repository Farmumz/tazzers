<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="taz-logUni.css">
    <title>Login | Tazzers</title>
    <script src="eg.js"></script>
</head>
<body>

<div class="error">
<h3>Error</h3>
    <p>Anda harus mengisi semua kolom ini. Silahkan coba kembali.</p>
</div>
<form method="post" align="center" class="daftar">

<h2 class="title">Tazzers</h2>
<h2>Login</h2>
        <br>
        <div class=user-box>
        <input type="text" name="user" id="" >
        <label class=user-label>Username</label>
        <br>
        <br>
        </div>
        <div class=user-box>
        <input type="password" name="password" id="" pattern=.{8,100000} >
        <label class=pass-label>Password</label>
        </div>
        <p>Belum daftar akun? Klik <a href="../register/">disini</a>.</p>
        <p>Males membuat akun? Klik <a href="/../tazzers/home">disini</a></p>
        <input type="submit" value="Kirim">
        </form>
</body>
</html>
<?php 
session_start(); 
include("config.php");

if (isset($_POST['user']) && isset($_POST['password'])) {
    $user = $_POST["user"];
    $pass = $_POST["password"];
    if (empty($user) OR empty($pass)){
        echo("<div class='error'>");
        echo("<h3>Error</h3>");
        echo("<br>");
        echo("<p>Anda harus mengisi semua kolom ini. Silahkan coba kembali.</p>");
        echo("</div>");
        ?>
        <script>
            window.addEventListener("load", () => {
            const error = document.querySelector(".error");
            error.style.top = "80%";
            error.style.position = "fixed";
            });
        </script>
        <?php
    } else {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            function validate($data){
               $data = trim($data);
               $data = stripslashes($data);
               $data = htmlspecialchars($data);
               return $data;
            }
            $user = validate($_POST['user']);
            $pass = validate($_POST['password']);
        
            if (empty($user)) {
                header("Location: index.php?error=User");
                exit();
            } else if(empty($pass)){
                header("Location: index.php?error=Password");
                exit();
            } else {
				$sql = "SELECT * FROM acc_tazzers WHERE user=? AND pass=?";

                $stmt = $conn->prepare($sql);
                $stmt->execute([$user, $pass]);

                if ($stmt->rowCount() > 0) {
                    $row = $stmt->fetch();
                    if ($row && password_verify($pass, $row['pass'])) {
                        $_SESSION['user'] = $row['user'];
                        $_SESSION['name'] = $row['name'];
                        $_SESSION['id'] = $row['id'];
                        header("Location: ../home");
                        exit();
                    } else {
                        header("Location: index.php?error=Incorrect username or password");
                        exit();
                    }
                } else {
                    header("Location: index.php?error=Incorrect username or password");
                    exit();
                }
            }
        } else {
            header("Location: index.php");
            exit();
        }
    }
}
?>
