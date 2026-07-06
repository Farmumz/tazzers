let nama = 'faris m mumtaz' // let digunakan untuk mendeklarasikan variabel lokal dengan cakupan terbatas pada blok, statement, atau expression
let umur = '15'
let tiba = '169'
let beba = '45'
let part = 2


// INI UNTUK ALERT 1 CARA !
// if (part == 'null') {
//     part = 'belum punya'
// } else {
//     part = 'sudah punya'
// }

// INI UNTUK ALERT 1 CARA 2
switch(part) {
    case 1:
        part = 'punya 1 wes'
    break
    case 2:
        part = 'punya 2 wes'
    break
    default:
        part = 'belum punya'
}

let duitawal = 100000
let duittambah = 300000
let duitccm = 38000
const duitditambah = duitawal + duittambah
const duitdikurang = duitditambah - duitccm

// Belajar ARRAY
let namaGuru = ['apa', 'apalaj', 'joni']
namaGuru.push('bapak halo', 'bapak mantab')
namaGuru.pop() // menghapus elemen trakhir dari sebuah array
namaGuru.shift() // menghapus elemen awal dari sebuah array

// Belajar ARRAY metode 2
let namaTeman = []

namaTeman [0] = 'attar'
namaTeman [1] = 'rafi'
namaTeman [2] = 'elzar'

// looping, form, array (3 statements)

const namaHewan = ['kucing', 'tikus', 'ayam', 'hewan']

for (let i = 0 ; i < namaHewan.length; i++) {
    console.log(namaHewan[i])
}

// kalo pake 'while':
let u = 0
while (u < 20) {
    u++
    console.log('faris muhammad mumtaz')
}
// kalo pake 'do':
let p = 0
do {
    p++
    console.log('siapa kek')
} while (p < 10)

// tugas kecil dari 'abang' "hari"

let hari = new Date().getDay()
let days = ['Minggu', 'Senin', 'Selasa', 'Rabu','Kamis', 'Jumat', 'Sabtu', 'Ahad']

console.log (`hari ini adalah hari ${days[hari]}`)

// tambahan dari blackbox.ai
let tanggal = new Date(); // Membuat objek Date baru untuk tanggal saat ini

// Mendapatkan komponen tanggal
let hari2 = tanggal.getDate(); // Mendapatkan hari (1-31)
let bulan = tanggal.getMonth() + 1; // Mendapatkan bulan (0-11), jadi kita tambahkan 1
let tahun = tanggal.getFullYear(); // Mendapatkan tahun (4 digit)

let bulan2 = new Date().getMonth() + 1;
let aybulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni']

console.log(`bulan ini adalah bulan ${aybulan[bulan2]}`)
// Menampilkan tanggal dalam format yang diinginkan
console.log(`Tanggal hari ini adalah ${hari2}/${bulan}/${tahun}`);

alert(namaTeman)
alert(namaGuru)
alert(
    `Halo! Nama Saya ${nama}! Umur saya ${umur} tahun. Tinggi badan saya ${tiba}cm dan berat badan saya ${beba}kg Selama hidup saya, saya ${part} partner hidup.`

)
alert(
    `Anda kalo mau malak saya, sebenarnya saya cuma punya Rp.${duitawal}, trus saya dapet tambahan dr ortu Rp.${duittambah} , ya paling cuma punya Rp.${duitditambah} saja.`
)
alert(
    `Tapi kemarin saya ke CCM ngabisin duit, jadi Rp.${duitdikurang}. susah hemat tuh.`
)
