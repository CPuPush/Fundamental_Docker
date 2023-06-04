/*
! Docker Volume
   * fitur bind mounts sudah ada sejak Docker versi awal, di versi terbaru direkomendasikan menggunakan docker volume, bukan docker mounts lagi
   * docker volume mirip dengan bind mounts, bedanya adalah terdapat management volume, dimana kita bisa membuat volume, melihat daftar volume, dan menghapus volume
   * Volume sendiri bisa dianggap storage yang digunakan untuk menyimpan data, bedanya dengan bind mounts, pada bind mounts, data disimipan pada sistem host, sedangkan pada volume, data di manage oleh docker.

? Melihat Docker Volume
   * saat kita membuat container, dimanakah data didalam cointainer itu disimpan, secara default semua data container disimpan didalam volume
   * Jika kita coba melihat docker volume, kita akam lihat bahwa ada banyak volume yang sudah terbuat, walaupun kita belum pernah membuatnya sama sekali
todo     docker volume ls

? Membuat volume
todo     docker volume create mongovolume

! analoginya hardisk kosong

? Menghapus volume
tapi pastikan dulu volume tidak digunakan, artnia tidak bisa kita hapus sampai containernya dihapus
todo     docker volume rm namavolume


*/