/*Variable (cara buat komen untuk beberapa baris)*/
//var nama ="venissa" (variabel dalam js lama)(cara buat komen dalam 1 baris)
//$nama ="venissa"; (variable dalam php)

alert("hello");

let nama_depan="Venissa";
let nama_belakang = "Dian Mawarsari";
let kota_kelahiran ="Semarang";
let nama_lengkap = nama_depan + " "+ nama_belakang;
let nama_lengkap2 = '${nama_depan} ${nama_belakang}';

let barang = 80;
let jumlah = 100;
let total = barang + jumlah;

/*constant*/
const country = "Indonesia";
const database = "Pelatihan";

/*Data Type*/
//silahkan lihat javascript.info;

/*operator*/

/*alert*/
let cookie;
cookie ="Venissa 20211027";

let cookie2 = "Dian 20211027";

/*Out Put*/
//alert(cookie2);
//console.log(cookie2);
console.log ("total barang"+ total);
document.write("Test dulu");

/*Conditional*/
let message;

if (nama_lengkap =="Venissa Dian Mawarsari"){
    //alert("Selamat datang" + nama_lengkap);
    massage = "Selamat datang" + nama_lengkap;
} else {
    //alert("Maaf, anda siapa?");
    massage = "Maaf, anda siapa";
}
//alert (massage);

/*Loop*/

for (let i = 0; i<= 10; i++){
    //console.log("loop 1" + i);
}

let j = 0;
while (j <= 10){
    //console.log("loop 2" + j);
    j++;
}

let k = 0;
do {
    //console.log("loop 3" + k);
    k++ 
} while (k <= 10);

/*Function*/
nama_lengkap = null;

function greeting(){
    if (nama_lengkap){
        console.log("User aman, bisa masuk web.")
    } else {
        console.log("User tidak aman, Jangan boleh masuk")
    }
}

greeting();

function login (username, password){
    if (username && password){
        console.log("Selamat datang,");
        console.log("Username:" + username);
        console.log("Password:" + password);
    } else if (username||password){
        console.log("Username atau Password salah");
    } else {
        console.log("Anda belum login.");
    }
}

let username = "Ammar";
let password = "1234";

login(username, password);

function luasSegitiga (alas, tinggi){
    let luas = alas * tinggi / 2;
    return luas;
}

function luasSegitiga (alas, tinggi){
    let luas = alas * tinggi / 2;
    console.log (luas);
}

 let alas = 10;
 let tinggi = 5;
 let luas = luasSegitiga(alas, tinggi);
console.log (luas);

/*Stuktur Data*/
let dataMhs = ["Venissa", "Dian", "Mawarsari"];

let dataMhs2 = [
    ["Venissa", "Dian", "Mawarsari"],
    ["Melon", "Jambu", "Semangka"],
];

let ambilDataMhs = dataMhs [2];
console.log (ambilDataMhs);

let biodataMhs ={
    nama: "Venissa",
    tempat_lahir: "Bandar Lampung",
    negara: "Indonesia"
};

let ambilBiodataMhs = biodataMhs.nama;
console.log (ambilBiodataMhs);

let biodataMhs2 = {
    nim: "11",
    biodata: {
        nama: "Venissa",
        tempat_lahir: "Semarang",
        negara: "Indonesia",
    },
    nim: "12",
    biodata: {
        nama: "Venissa",
        tempat_lahir: "Semarang",
        negara: "Indonesia",
}