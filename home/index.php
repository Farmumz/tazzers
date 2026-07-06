<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="taz-home.css">
    
    <title>Beranda | Tazzers</title>
</head>
<body>
<div class="loader" id="loader"></div>


<div class="navbar">
        <ul>
            <li class=home-but><a href="index.php">Beranda</a></li>
            <li class=news-but><a href="taz-news.php">Berita</a></li>
            <li class=contact-but><a href="contact.asp">Kontak</a></li>
            <li class=about-but><a href="../home/about/taz-about.php">Tentang</a></li>
            
            <div class=top-nav></div>
        </ul>
</div>
    <!-- <nav class="navbar-show">
            <li class=home-but><a href="index.php">Beranda</a></li>
            <li class=news-but><a href="taz-news.php">Berita</a></li>
            <li class=contact-but><a href="contact.asp">Kontak</a></li>
            <li class=about-but><a href="../home/about/taz-about.php">Tentang</a></li>
    </nav> -->
        <div class="title-div">
        <li class=title>Tazzers</li>
        </div>
        <div class="account">
        <li class=signout><a href="../form/login">Sign Out</a></li>
        <li class=name><b>Faris ff</b></li>
        <li class="settings"><button>Pengaturan</button></li>
        </div>

    <div class="settings-div">
        <h2 style="margin: 0;">Pengaturan</h2>
        <hr>
        <nav>
        <button>Akun</button>
        <button>Personalisasi</button>
        <button>Sign Out</button>
        <hr>

        </nav>
    </div>
    <br><br>
    <!-- <h2 style="margin: auto;">Hei, Farmumz</h2> -->
    <div class="search-div">
    <div class="search-title">
        <h2 style= "margin: 0;">Telusuri</h2>
        <div style= "background-color: red; margin: 0; padding: 2px; top: 88%; width: 1289px; right: 0%;"></div>
    </div>
    <div class="quote">
        <h3>Quotes hari ini</h3>
        Rayhan Fakhri S Idris pernah berkata:
        <blockquote style="background-color:gray">Motivasi tanpa <mark>aksi</mark>, hanyalah sebuah <mark style="background-color:red; color: white">ilusi</blockquote>
    </div>
    <div class="news">
    <h2 style="background-color:red; color:white; margin:auto; text-align: left; border-bottom: 100px" class=breaking>BREAKING NEWS</h2>
    <h3>Kematian orang palestina semakin meningkat setelah bomb dari israel</h3>
    <img src="../palestine.jpeg" alt="PALESTINE WILL BE FREE!" width=97%><br>
    <p>Bomb yang didrop oleh israel 2 kali lipat daripada bomb hiroshima pada Perang Dunia ke 2...<a href="../home/news/news-ps.php">selengkapnya</a></p>
</div>
<div class="ruangguru">
<h3><mark>AD</mark> | Ruangbelajar dengan diskon yang luar biasa!</h3>
    <img src="../ruangbelajar.png" alt="score premier" width=97%><br>
    <p>Tingkatkan kemampuan akamedikmu dengan membeli paket belajar online yang tersedia di ruangbelajar by ruangguru dengan diskon yang luar bisa. Segera dapatkan sebelum terlambat!</p>
    <p><mark><b>Sekarang dengan Kurikulum Merdeka!</b></mark></p>
    <caption style="color:gray">By: Faris Muhammad Mumtaz</caption>
</div>
<div class="donate">
<div class="donate-title"><b>Donasi</b></div>
<b>Tingkatkan kemanusiaan dengan membantu yang tidak bersalah!</b>
    <img src="../palestine2.jpg" alt=""width=97%>
<p>Saudara kita di palestina sedang mengalami musibah, yaitu melawan tentara zionis yang kejam. Ini bukan peperangan, ini genosida terhadap rakyat
    Palestina. Kenapa? Karena tentara zionis menyalahgunakan jabatan dan kekuatannya untuk membunuh orang yang tidak bersalah sama sekali. Ini 
    sangat kejam. Termasuk ada anak kecil yang terbunuh karena tentara zionis. Lebih dari 20.000 rakyat palestina terbunuh dan 6.000 anak yang telah
    terbunuh. Ada yang menyatakan bahwasannya israel membunuh 10 orang perjam. Bayangkan.

    Maka dari itu, jika anda ingin mendukung palestina berdoalah kepada mereka. Tapi lebih afdhol jika anda donasi di website ini

</p>

<a href="https://npc.id" target=_blank class=npc>Nusantara Palestina Center (NPC)</a>
<a href="https://baznas.go.id/bantupalestina" target=_blank class=baznas>Baznas (Bantu Palestina)</a>

<p>Anda bebas mau berapa. Yang penting masuk ke palestina walaupun sekecil pun.</p>
</div>
</div>


<script>
        // Simulate loading completion after 3 seconds
        setTimeout(function() {
            document.getElementById("loader").classList.add("hidden");
        }, 3000);

        // Muncul navbar ketika discrol
        // window.addEventListener("scroll", function() {
        //     const navbar = document.getElementById("navbar");
        //     if (window.scrollY > 50) {
        //         navbar.style.display = "block";
        //     } else {
        //         navbar.style.display = "none";
        //     }
        // });
    </script>

</body>
</html>