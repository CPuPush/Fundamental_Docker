/*
! Container Log (debigging)
   * kadang terjadi masalah dengan aplikasi yang terdapat di container, sehing kali kita ingin melihat detail dari log aplikasinya
   * hal ini dilakukan untuk melihat detail kejadian apa yang terjadi di aplikasi, sehingga akan memudahkan kita ketika mendapat masalah

? Melihat container Log
todo     docker container logs containerId/namaconatiner
realtime
todo     docker container logs -f containerId/namacontainer


docker container create --name redisOn redis:latest

docker container ls -a

docker container logs -f redisOn

*/

/*
-f => menunggu
*/    