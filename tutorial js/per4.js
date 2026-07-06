// function

// return -> console.log()

function addName(namaawal, namaakhir) {
    //'namaawal' dan 'namaakhir' adalah argumen (seperti variabel)
    console.log(namaawal, namaakhir)

  // atau bisa secara berpisah, misal:
// console.log(namaawal)
// console.log(namaakhir)
// bisa juga ditambah seperti: 
// console.log('nama depan:', namaawal)
// console.log ('nama legenda:', namaakhir)
// bisa juga menggunakan seperti ini agar tidak ribet:
console.log(arguments) // namun ini mencakup semuanya, termasuk kode
// untuk memanggil yang hanya kita masukkan, tulis ini:
console.log(arguments[0])
// dan
console.log(arguments[1])
}

// bisa juga gunakan console.log(namaawal  + namaakhir)
// kalo mau ribet nih, gunakan 'for' (jangan lupa functionnya):


// for (let i = 0; i < arguments.length; i++) {
//     console.log('nama lengkap: ', arguments[i])
// } 
addName('farnung', 'almumtazo')

// belajar const (dengan sum):
// cara 1 - keyword new function
const sum = new Function('x','y','console.log(x+y)')
// cara 2 - standard function
function sum2(x, y) {
    console.log(x+y)
}
// cara 3 - arrow function (sering digunakan dalam perusahaan)
const sum3 = (x, y) => {
    console.log(x+y)
}

sum(1, 1)
sum2(2, 2)
sum3(3, 3)

// metode koding javasctipt "hosting"
// hosting adalah cara membuat function baru tanpa harus membuatnya secara manual

const sumvar = (x,y) => {
    console.log(x+y)
} // kenapa eror? karena sumvar ini dijadikan sebuah variabel menggunakan const
function sumvar2(x, y) {
    if (x + y == 4) {
        console.log('mantap')
    }
    // console.log(x+y)
} // function mah bodoh amat sama posisi, jadi tetep bisa.

const sumvar3 = new Function('x', 'y', 'console.log(x+y)')
// sumvar(1, 2)
// sumvar2(2, 2)
// sumvar3(3, 3)
// bisa pake let, bisa pake var atau const silahkan
// pelajaran yang bisa dipetik adalah: javascript diprogres sesuai dengan urutan.
// perlu diperhatikan bahwa if dengan == jika nilainya tidak sama/tidak benar, maka kode dibawahnya tidak akan dikeluarkan karena tidak menggunakan 'else'.

// matematika
function randomize() {
    const randomNumber = ~~(Math.random() * 1000)
    if (randomNumber > 300) {
        console.log('keren, lebih dari 300', randomNumber)
    } else {
        console.log('kurang dari 300', randomNumber)
    }
}

randomize()