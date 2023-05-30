/*
! Virtual Machine
* masalah ketika kita menggunakan CM adalah proses yang lambat ketika pembuatan VMnya, dan butuh waktu untuk boot OS didalam CM tersebut ketika kita menjalankan CM atau restart VM tersebut.
?Diagram Virtual Machine
________
VM          VM
App A       App B
Guest OS    Guest OS
_________
Hipervisor 
infrastructure
! Container
* berbeda dengan VM, Container sendiri berfokus pada sisi Aplikasi
* container sendiri sebenarnya berjalan diatas apliaksi Container manager yang berjalan di OS. (container akan akan berjalan menggunakan host dimana docker di install, contoh di install dilinux maka docker akan berjalan diatas sistem operasi linux.)
* yang membedakan dengan VM adalah, pada container, kita bisa mem-package aplikasi dan dependencynya tanpa harus menggabungkan OS
* container akan menggunakan sistem operasi host dimana container manager yang berhalan, oleh karena itum container akan lebih hemat resource dan lebih cepat jalannya, karena tidak butuh sistem operasi sendiri.
* Ukuran container biasanya hanya hitungan MB, berbeda dengan VM yang bisa sampai GB karena didalamnya ada OS.
________________
APP A    APPB     APPC
Docker
Host Operating System (laptop kita)
infrastructure
________________
 
* yang membedakan dengan menginstall langsung adalah, antar container terisolasi, sehingga tidak menggangu container yang lainnya, contoh di app a install database mysql, trus install ada 3 di laptop kita, tanpa menggunakan container, maka 3 3 nya akan terjadi bentrok mungkin, apakah itu karena portnya, dan lainnya bro.
jadi contohnya kita install mysql di 3 container mysql semua, itu tidak ada masalah sama sekali bro, itu hebatnya.
contoh lainnya, ketika kita ingin menginstall beberapa versi nodejs di container itu bisa saja, tetapi jika ingin menginstall di OS langsung maka itu sangat meribetkan.



*/

/*
hipervisor adalah perangkat lunak yang dapat digunakan untuk menjalankan beberapa mesin virtual pada satu mesin fisik. setiap VM memiliki sistem pengoperasian dan apliaksinya sendiri, hypervisor mengalokasikan sumberdaya komputasi fisik dasar seperti CPU dan memori ke mesin virtual individu sesuai kebutuhan, jadi Hypervisor mendukung penggunaan optimal infrastructure IT fisik.





*/