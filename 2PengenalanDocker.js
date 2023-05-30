/*
! Pengenalan Docker
   * Docker adalah salah satu implementasi Container manager yang saat ini paling populer
   * docker adalah aplikasi free dan Open Source, sehingga kita bisa gunakan secara bebas.
! Docker Architecture
   * Docker menggunakan Arsitektur Client-server
   * docker client berkomunikasi dengan docker daemon (server)
   * Saat kita menginstall docker, biasanya didalamnya sudah terdapat docker client dan docker daemon
   * Docker Client dan Docker daemon bisa berjalan di satu sistem yang sama
   * Docker Client dan Docker daemon berkomunikasi menggunakan Rest API

Client
   * docker build
   * docker pull
   * docker run
   * etc
Docker_host(server/daemon)
   *containers
   *images
      * nginx
      * ubuntu
Registry
   * NGINX
   * ubuntu

?Install linux
kenapa ada 2 jenis aplikasi, yaitu docker dekstop yaitu digunakan di mac dan windows, jadi harus diinstal docker dekstop di mac dan windows.
Tetapi di linux tidak, langsung saja menginstall dockernya. kenapa berbeda, karena sampai saat ini kebanyakan docker digunakan di OS linux, jadi ketika menginstall docker di linux, dia tidak butuh lagi menginstall System Operasi untuk dockernya, sehingga langsung menggunakan bawaan dari linux bawaannya. sehingga ketika diinstall di windows atau mac, maka secara otomatis membuat virtualisasi untuk Sistem operasi Linux. t
* semua perintah di client tidak di eksekusi disisi clientnya, tetapi mengirim semua perintahnya di docker daemonnya lalu mengeksekusinya.
*/