/*
! Docker Image
   * docker image mirip seperti installer aplikasi, dimana di dalam docker image terdapat aplikasi dan dependency
   * Sebelum kita menjalankan aplikasi di Docker, kita perlu memastikan memiliki Docker image aplikasi tersebut.

? Melihat docker Image
untuk melihat docker image yang terdapat didalam docker daemon, kita bisa menggunakan perintah:
todo   docker image ls

? Download Docker Image
   * untuk download Docker image dari Docker registry, kita bisa menggunakan perintah:
todo   docker image pull namaimage:tag
   * kita bisa mencari docker image yang ingin kita download di https://hub.docker.com/

contoh
* docker image pull postgres:latest
jika mau menambahkan tag lain, tinggal cari di https://hub.docker.com/_/postgres/tags

! Menghapus Docker Image
todo  docker image rm namaimage:tag

*/

/*
ls => list
rm => remove
*/