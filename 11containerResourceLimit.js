/*
! Container Resource Limit
   * Saat membuat container, secara default dia akan menggunakan semua CPU dan memory yang diberikan ke dockerr (Mac dan Windows), dan akan menggunakan semua CPU dan memory yang tersedia di sistem Host (Linux)
   * jika terjadi kesalahan, mmisal container terlalu banyak memakan CPU dan memory, maka bisa berdampak terhadap performa container yang lain, atau bahkan ke sistem host
   * oleh karena itu, baiknya ketika kita membuat container, kita memberikan resource limit terhadap containernya.

? Memory
*  Saat membuat containerm kita bisa menentukan jumlah memory yang bisa digunakan oleh container ini, dengan menggunakan perintah --memory diikuti dengan angka memory yang diperbolehkan untuk digunakan
* kita bisa menambahkan ukuran dallam bentuk b(bytes), k (kilo bytes), m(mega bytes), atau g (giga bytes)

? CPU
   * -- cpus
   * 1.5 artinya container bisa menggunakan satu dan setengah CPU core

todo     docker container create --name smallNginx --memory 100m --cpus 0.5 --publish 8081:80 nginx:latest

*/