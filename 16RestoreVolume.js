/*
! Restore Volume
   * Setelah melakukan backup volume kedalam file archive, kita bisa menyimpan file archive backup tersebut ke tempat yang lebih aman, misal ke cloud storage
   * sekarang kita akan coba melakukan restore backup data ke volume baru, untuk memastikan data backup yang kita lakukan tidak corrupt

? Tahapan melaukan restore
   * Buat volume baru untuk lokasi restore data backup
   * Buat container baru dengan dua mount, volume baru untuk restore backup, dan bind mount folder dari sistem host yang berisi file backup
   * Lakukan restore menggunakan container dengan cara meng-extract isi backup file ke dalam volume
   * Isi file backup sekarang sudah di restore ke volume
   * Delete container yang kita gunakan untuk melakukan restore
   * Volume baru yang berisi data backup siap digunakan oleh container baru

* docker volume create mongorestorebackup

* docker container run --rm --name ubunturestore --mount "type=bind,source=/home/forioktopakpahan/Programming/backup,destination=/backup" --mount "type=volume,source=mongorestorebackup,destination=/data" ubuntu:latest bash -c "cd /data && tar xvf /backup/backup.tar.gz --strip 1"

? extract
tar xvf /backup/backup.tar.gz
*/