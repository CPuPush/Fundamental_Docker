/*
! Container Volume
   * volume yang sudah kit abuat, bisa kita gunakan di cointainer
   * Keuntungan menggunakan volume adalah, jika container kita hapus, data akan tetap aman di volume
   * cara menggunakan volume di container sama dengan menggunakan bind mount, kita bisa menggunakan paramter --mount, namung dengan menggunakan type volume dan source nama volume

ex

* docker volume mongodata

* docker container create --name mongovolume --publish 27018:27017 --mount "type=volume,source=mongodata,destination=/data/db" --env MONGO_INITDB_ROOT_USERNAME=root --env  MONGO_INITDB_ROOT_PASSWORD=mongos mongo:latest
? =>  yabg membedakan dengan mount bind adalah, type diubah menjadi volume dan source diubah menjadi nama volume contoh mongodata

* docker container start mongovolume
* docker container stop mongovolume

mongorestorebackup

docker container create --name mongorest --publish 27018:27017 --mount "type=volume,source=mongorestorebackup,destination=/data/db" --env MONGO_INITDB_ROOT_USERNAME=root --env  MONGO_INITDB_ROOT_PASSWORD=mongos mongo:latest
*/