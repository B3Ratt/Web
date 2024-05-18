<?php
// public/php/login.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı ve şifrenin boş olmadığını kontrol et
    if (empty($username) || empty($password)) {
        header("Location: ../login.html");
        exit();
    }

    // Kullanıcı adı formatını kontrol et
    if (!filter_var($username, FILTER_VALIDATE_EMAIL) || !str_ends_with($username, '@sakarya.edu.tr')) {
        header("Location: ../login.html");
        exit();
    }

    // Öğrenci numarasını kullanıcı adından çıkar
    $studentNumber = explode('@', $username)[0];

    // Şifre kontrolü
    if ($password === $studentNumber) {
        // Başarılı giriş, anasayfaya yönlendirme
        header("Location: ../index.html");
        exit();
    } else {
        // Başarısız giriş, login sayfasına yönlendirme
        header("Location: ../login.html");
        exit();
    }
}
?>
