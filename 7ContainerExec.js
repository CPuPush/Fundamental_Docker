/*
! Container Exec
   * saat kita membuat container, aplikasi yang terdapat didalam container hanya bisa diakses dari dalam container
   * Oleh karena itum kadang kit aperlu masuk ke dalam container itu sendiri, untuk mengakses langsung aplikasinya
   * Untuk masuk kedalam container, kita bisa menggunakan fitur container exec, dimana digunakan untuk mengeksekusi kode program yang terdapat didalam container.

? masuk ke container 
   * Untuk masuk kedalam containerm kita bisa mencoba mengeksekusi program bash script yang terdapat didalam container dengan banguan container Exec:
todo     docker container exec -i -t containerId/namaContainer /bin/bash

   * -i adalah argument interaktif, menjaga input tetap aktif
   * -t adalah argument untuk alokasi pseudo-TTY (terminal akses)
   * Dan /bin/bash contoh kode program yang terdapat didalam container.

kenapa /bin/bash, karena aplikasi tersebut rata rata dibuat dari linux, sehingga sama seperti linux yang lainnya, jika di ls, maka muncul folder os linux yang diisi aplikasi.

cd /       (ke root)
* bin  boot  data  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var

contoh

>docker container exec -i -t redisOn /bin/bash
>redis-cli
>set hello "world"
127.0.0.1:6379> get hello
"world"

*/