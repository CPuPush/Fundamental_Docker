/*
! Bind Mounts
   * merupakan kemampuan untuk mounting (sharing) file atau folder yang terdapat di sistem host ke container yang terdapat di docker
   * fitur ini sangat berguna ketika kita ingin mengirim konfigurasi dari luar container, atau misal menyimpan data yang dibuat di aplikasi didalam container ke dalam folder di sistem host
   * jika file atau folder tidak ada disistem host, secara otomatis akan dibuatkan oleh docker 
   * untuk melakukan mounting, kita bisa menggunakan paprameter --mount ketika membuat container 
   * isi dari paramter --mount memiliki aturan tersendiri

param => keterangan
   * type => type mount, bid atau volume
   * source => lokasi file atau folder di sistem host
   * destination => lokasi file atau folder di container
   * readonly => jika ada, maka file atau folder hanya bisa dibaca di cointainer, tidak bisa ditulis

todo     docker container create --name namaContinaer --mount "type=bind,source=folder,destination=folder,readonly" image:tag

forioktopakpahan@CPu:~$ docker container exec -i -t mongoOn /bin/bash
root@6443df9195c9:/# ls
bin   data  docker-entrypoint-initdb.d	home	    lib    lib64   media  opt	root  sbin  sys  usr
boot  dev   etc				js-yaml.js  lib32  libx32  mnt	  proc	run   srv   tmp  var
root@6443df9195c9:/# cd data/
root@6443df9195c9:/data# ls
configdb  db
root@6443df9195c9:/data# cd db/

? from mongo $ docker run --name some-mongo -v /my/own/datadir:/data/db -d mongo

jdai data destination folder mongo db ada di /data/db

contoh kasus
* sudah ada container mongoDB, tetapi ketika kita create database, datanya sudah pasti ke container, akibatnya apa, ketika kita delete container, maka data di dalam container mongoDBnya akan kehapus, untuk itu kita perlu mount bind ke folder host. 

todo     docker container create --name mongoOns --publish 27018:27017 --mount "type=bind,source=/home/forioktopakpahan/Programming/mongo-data,destination=/data/db" --env MONGO_INITDB_ROOT_USERNAME=root --env  MONGO_INITDB_ROOT_PASSWORD=mongos mongo:latest

jadi ketika container di delete, maka ketika di connect kan kembali, maka data akan tetap ada

*/