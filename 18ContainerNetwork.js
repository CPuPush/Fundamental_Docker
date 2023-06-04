/*
! Container Network
   * setelah kita membuat network, kita bisa menambahkan container ke network
   * container yang terdapat di dalam network yang sama bisa saling berkomunikasi (tergantung jenis driver networknya)
   * container bisa mengakses container lain dengan menyebutkan hostname dari containernya, yaitu nama containernya.

? membuat container dengan network
todo     docker container create --name namaContainer --network namanetwork image:tag


ex
* docker network create --driver bridge mongonetwork

* docker container create --name mongodb --network mongonetwork   --env MONGO_INITDB_ROOT_USERNAME=root --env  MONGO_INITDB_ROOT_PASSWORD=root mongo:latest

* docker container create --name mongodbexpress --network mongonetwork --publish 8081:8081 --env ME_CONFIG_MONGODB_URL="mongodb://root:root@mongodb:27017/" mongo-express:latest

* docker container start mongodb

* docker container start mongodbexpress

hapus container dari network
todo     docker network disconnect namaNetwork namacontainer
* docker network disconnect mongonetwork mongodb

? menambah container ke network
* jika containernya sudah terlanjur dibuat, kita juga bisa menambahkan container yang sudah dibuat ke network dengan perintah:
todo     docker network connect namaNetwork namaContainer

* docker network connect mongonetwork mongodb
*/