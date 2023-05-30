/*
! Docker Container
   * Jika docker image seperti installer aplikasim ma dcoker container mirip seperti aplikasi hasil installernya
   * Satu docker image bisa digunakan untuk membuat beberapa docker container, asalkan nama docker containernnya berbeda.
   * Jika kita sudah membuat Docker Container, maka Docker Image yang digunakan tidak bisa dihapus, hal ini dikarenakan sebenarnya Docker Container tidak meng-copy isi Docker Image, tapi hanya menggunakannya isinya saja

? Status Container
   * saat kita membuat container, secara default container tersebut tidak berjalan
   * Mirip seperti ketika kita menginstall aplikasi jika tidak kita jalankan, maka aplikasi tersebut tidak akan berjalan begitu juga container. 
   * oleh karena itu, setelah membuat container, kita perlu menjalankan jika memang ingin menjalankan containernya.

? Melihat Container 
   * Untuk melihat semua container, baik yang sedang berjalan atau tidak di docker daemon, kita bisa gunakan perintah:
todo     docker container ls -a
   * sedangkan jika kita ingin melihat container yang sedang berjalan saja, kita bisa gunakan perintah:
todo     docker container ls

? membuat container
todo     docker container create --name namaContainer namaimage:tage

=> jika kita membuat container tetapi image belum kita download, maka docker secara otomatis mendownload image nya.
=> jika ingin membuat container dengan image yang sama, maka harus membuat --name yang berbeda, walaupun dengan port yang sama, maka container akan tetap berjalan tanpa adanya bentrok

? Menjalankan Container
todo     docker container start containerId/namacontainer

? Menghentikan Container
todo     docker container stop containerId/namaContainer

? menghapus container
todo     docker container rm containerId/namaContainer

*/

/*
-a => all
*/