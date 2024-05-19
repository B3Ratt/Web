<?php
// Kullanıcıdan giriş bilgilerini al
$username = $_POST['username'];
$password = $_POST['password'];

// Kullanıcı adı ve parolayı kontrol etmek için basit bir örnek
if ($username == 'B221210050@sakarya.edu.tr' && $password == 'B221210050') {
    // Başarılı giriş durumunda kullanıcıyı başka bir sayfaya yönlendir
    header('Location: index.html?success=true');
    exit();
} else {
    // Hatalı giriş durumunda kullanıcıyı login.html sayfasına yönlendir ve bir hata mesajı göster
    header('Location: login.html?error=invalid_credentials');
    exit();
}
?>
