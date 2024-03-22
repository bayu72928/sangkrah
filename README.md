# # Sangkrah 🗑

Cek demo website di sini

> [Sangkrah website](https://sangkrah.vercel.app)


## Apa itu Sangkrah?

Sangkrah adalah sebuah aplikasi yang dibuat untuk membantu mengelola sampah. Aplikasi ini akan memberikan informasi kepada pengguna mengenai tempat pembuangan sampah dan tempat daur ulang terdekat. 

## Teknologi yang Digunakan

Aplikasi ini menggunakan:

- **Laravel** sebagai backend/framework 
- **React** sebagai frontend
- **MySQL** sebagai database

## Fitur-fitur

- Menampilkan peta dan lokasi tempat pembuangan sampah dan daur ulang terdekat
- Memberikan informasi alamat dan jam operasional tempat tersebut   
- Filter lokasi berdasarkan kategori sampah
- Memberikan edukasi mengenai pentingnya 3R (Reduce, Reuse, Recycle)

## Instalasi

1. Clone repository ini
2. Pastikan PHP dan composer terinstall
3. Install dependencies dengan ```composer install```  
4. Copy file .env.example menjadi .env dan sesuaikan database
5. Jalankan ```php artisan key:generate```
6. Jalankan ```php artisan migrate``` untuk migrate database
7. Buat symbolic link dengan ```php artisan storage:link```
8. Jalankan ```npm install``` dan ```npm run dev``` untuk install front-end
9. Access 127.0.0.1:8000 untuk menggunakan aplikasi