/*
! Backup Volume
   * sayangnya, saat ini tidak ada cara otomoatis melakukan backup volume yang sudah kita buat
   * namun kita bisa memanfaatkan container untuk melakukan backup data yang ada didalam volume kedalam archive seperti zip atau tar.gz

? Tahapan melakukan backup
   * Metikan container yang menggunakan volume yang ingin dibackup
   * buat container baru dengan mount, volume yang ingin kita backup, dan bind mount folder dari sistem host
   * lakukan backup menggunakan container dnegan cara meng-archive isi volume, dan simpan di bind mount folder
   * isi file backup sekarang ada di folder sistem host
   * delete container yang kita gunakan untuk melakukan backup

* docker contaiern stop mongovolume
// buat container baru
* mkdir backup
/home/forioktopakpahan/Programming/backup
* docker container create --name nginxbackup --mount "type=bind,source=/home/forioktopakpahan/Programming/backup,destination=/backup" --mount "type=volume,source=mongodata,destination=/data" nginx:latest

* docker container start nginxbackup
// masuk ke container nginx
* docker container exec -i -t nginxbackup /bin/bash

* > tar cvf /backup/backup.tar.gz /data
   => backup/backup.tar.gz => mau disimpan di file mana
   => /data => folder yang ingin di backup

* docker container stop nginxbackup

* docker container rm nginxbackup

* docker contianer start mongovolume


? Easiest way
   * menjalankan backup secara manual agak sedikir ribet karena kita harus start container terlebih dahulu, setelah back up hapus container nya lagi
   * kita bisa menggunakan perintah run untuk menjalankan perintah di container dan gunakan parameter --rm untuk melakukan otomatis remove container setelah perintahnya selesai berjalan.

* docker container stop mongovolume

* docker container run --name ubuntubackup --mount "type=bind,source=/home/forioktopakpahan/Programming/backup,destination=/backup" --mount "type=volume,source=mongodata,destination=/data" ubuntu:latest tar cvf /backup/backup-more.tar.gz /data

* docker container start mongovolume

? run --rm => auto remove
! source to
! Destination from
*/