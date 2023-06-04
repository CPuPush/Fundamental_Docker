/*
! Container Port
   * Saat menjalankan container, container tersebut terisolasi didalam docker
   * Artinya sistem Host(misal laptop), tidak bisa mengakses aplikasi yang ada didalam container secara langsung, salah satu caranya adalah harus menggunakan Container Exec untuk masuk ke dalam containernya.
   * Biasanya, sebuah aplikasi berjalan pada port tertentu misal saat kita menjalankan aplikasi Redis, dia berjalan pada port 6379, kita bisa melihat port apa yang digunakan ketika melihat semua daftar container.

? port forwading
ketika kita ingin mengakses aplikasi didalam container
   * docker memiliki kemampuan untuk melakukan port forwarding, yaitu meneruskan sebuah port yang terdapat di sistem hostnya ke dalam docker container
   * Cara ini cocok jika kita ingin mengekspos port yang terdapat di container ke luar melalui sistem hostnya.

? Melakukan port forwarding
   * menggunakan perintah ketika membuat container:
todo     docker container create --name namacontainer --publish porthost:portcontainer image:tag
(jika sudah terlanjur membuat container, maka harus hapus dan create container dengan port forwarding)
   * Jika kita ingin melakukan port forwarding lebih dari satu, kita bisa tambahkan dua kali parameter --publish
   * --publish juga bisa disingkat menggunakan -p

port host akan di forwarding ke port container

ex

=> install image
* docker image pull nginx:latest

* docker container create --name nginxOn --publish 8080:80 nginx:latest
=> port untuk nginx adalah 80/tcp 

=> docker untuk port masih mati, dan kita perlu menjalankan

* docker container start nginxOn
=> sudah bisa akses localhost:8080

* docker container stop nginxOn


*/