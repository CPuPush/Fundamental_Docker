/*
! Container Environmetn Variable
   * saat membuat aplikasi, menggunakan environment variable adalah salah satu teknik agar konfigurasi aplikasi bisa diubah secara dinamis
   * Dengan menggunakan environment variable, kita bisa mengubah-ubah konfigurasi aplikasi, tanpa harus mengubah kode aplikasinya lagi
   * Docker container memiliki parameter yang bisa kita gunakan untuk mengirim environment variable ke aplikasi yang terdapat didalam container.

? Menambah environment variable, kita bisa menggunakan perintah --env atau -e, misal :
todo     docker container create --name namaContainer --env KEY="value" --env KEY2="value" image:tag


ex
download image monog
* docker pull mongo:latest

* docker container create --name mongoOn --publish 27017:27017 --env MONGO_INITDB_ROOT_USERNAME=root --env  MONGO_INITDB_ROOT_PASSWORD=mongos mongo:latest

=> jadi sama aja dengan membuat port forwarding dan tetapi memambahkan --env ditengah tengahnya
* docker container list -a

forioktopakpahan@CPu:~$ docker container ls -a
CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS          PORTS                      NAMES
6443df9195c9   mongo:latest   "docker-entrypoint.s…"   About a minute ago   Up 47 seconds   0.0.0.0:27017->27017/tcp   mongoOn

* 
*/