<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar | Tazzers</title>
    <link rel="stylesheet" href="taz-regUni.css">
</head>
<body>
    <div class="error">
    <h3>Error</h3>
    <p>Anda harus mengisi semua kolom ini. Silahkan coba kembali.</p>
    </div>
    <div class="registered">
        <h3>Sukses!</h3>
        <p>Anda telah membuat akun anda sendiri. Silahkan login dengan <a href="../login">klik disini.</a></p>
    </div>
<?php
    include("config.php");
    if (isset($_POST["submit"])) {
        $name = $_POST["fullname"];
        $user = $_POST["user"];
        $email = $_POST["email"];
        $pp = $_POST["pp"];
        $pass = $_POST["password"];
        $date = $_POST["age"];
        $errors = array();
        $registered = $_POST ["password"];
        if (empty($name) OR empty($user) OR empty($email) OR empty($pass) OR empty($date)){
        // echo("<div class='error'>");
        // echo("<h3>Error</h3>");
        // echo("<br>");
        // echo("<p>Anda harus mengisi semua kolom ini. Silahkan coba kembali.</p>");
        // echo("</div>");

        
        ?>
        <script>
            window.addEventListener("load", () => {
            const error = document.querySelector(".error");
            error.style.top = "83%";
            error.style.position = "fixed";
            });
            window.addEventListener("load", () => {
            const registered = document.querySelector(".registered");
            registered.style.top = "10%";

            });

        </script>
        <?php
        } else{
            $query = "INSERT INTO acc_tazzers (nama, user, email, pass, ttl) VALUES (:name, :user, :email, :pass, :date)";

        // Prepare the query and bind the parameters
        try {
            $stmt = $conn->prepare($query);
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':user', $user);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':pass', $pass);
            $stmt->bindParam(':date', $date);
        
            // Execute the query
            $stmt->execute();
        
            echo "<p>Anda telah membuat akun anda sendiri. Silahkan login dengan <a href='../login'>klik disini.</a></p>";
            echo"<div class=registered>";
            echo"<h3>Sukses!</h3>";
            echo"<p>Anda telah membuat akun anda sendiri. Silahkan login dengan <a href='../login'>klik disini.</a></p>
            </div>";
        } catch(PDOException $e) {
            echo "Error executing query: " . $e->getMessage();
        }
            
    }
        // if (!filter_var($email, FILTER_VALIDATE)) {
        // array_push($errors, "Email anda tidak termasuk email yang bagus");

        // }


    }
    ?>
    <form  method="post" class="daftar" align="center">
    <h2 class="title">Tazzers</h2> 

    <h3>Silahkan daftar akun barumu.</h3>
        <br>
        <input type="text" name="fullname" id="fullname" >
        <label class=name-label for="fullname">Nama Lengkap</label>
        <!-- <label class=user-label for="user">Username</label> -->
        <input type="text" name="user" style="width:30%" id="user" placeholder="Username">        
        <br>
        <br>
        <input type="email" name="email" id="email">
        <label class=email-label for="email">E-mail</label>
        <br>
        <br><br>
        <input type="file" name="pp" id="pp" placeholder="Foto Profil">
        <label class=pp-label>Foto Profil</label>
        <br><br>
        <input type="password" name="password" id="" placeholder="                    (Minimal 8 Karakter)"  pattern=.{8,120000000}> 
        <label class=pass-label>Password</label>
        <br>
        <br>
        <input type="date" name="age" id="ttd"  placeholder="Tanggal Lahir">
        <label class=ttd-label>Tanggal Lahir</label>
        <br>
        <br>
        <p>Sudah daftar akun? Klik <a href="../login">disini</a>.</p>
        <input type="submit" name="submit" value="Kirim">
    </form>
</body>
</html>