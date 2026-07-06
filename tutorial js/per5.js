// LOOPING: FOR, WHILE. DO WHILE, PENJELASAN DAN PENGULANGAN

// for
for(let i = 10; i >= 5; i--) {
    if (i % 2 !== 0)
    console.log('data ke -', i)
    
}

// while
let x = 1 // variabelnya 'biarkan'
while (x <= 7) { // 'selama'
    if (x % 2 !==0) { // 'namun jika..'
    console.log('data x ke-', x) // 'maka...'
    }
    x++ // 'dan..'
}

// do-while
let y = 1
do {
    if (y % 2 !== 0) {
        console.log('data y ke-', y)
    }
    y++

} while (y <= 10)

// membuktikkan contoh perbedaan while dan do-while
//WHILE
let p = 5 // variabelnya 'biarkan'
while (p <= 3) { // 'selama'
    console.log('data p ke-', x) // 'maka...'
    x++ // 'dan..'
}
// ketika variabelnya tidak sesuai dengan while, maka tidak akan tereksekusi
// kesimpulan: kalo variabel 5, tapi syarat selama p kurang dari sama dengan 3, maka tidak akan jalan.
// DO_WHILE
let q = 5 // variabelnya 'biarkan'
do {
    console.log('data q ke-', q) // 'maka...'
    q++
    } while (q <= 3) // 'selama'
// 'do' setidaknya dia ingin tereksekusi 1x saja, walaupun tidak match
// kesimpulan: ketika q-nya 5, maka dia eksekusikan ini dulu, lalu cek setelahnya.


// PERULANGAN DI JAVASCRIPT
// TUGAS GUYS!
// **************************************

// 1. BUAT PERULANGAN DARI SUATU VARIABLE BERTIPE ARRAY
// contoh:
//const x = [3, 5, 12];
//loop data...
//total nilai adalah 20 karena 3 + 5 + 12 = 20

// LOOPING DATA TERSEBUT MENGGUNAKAN for, while & do while.
// dan munculkan juga jumlah hasil penambahan semua angka yang
// ada di dalam array tersebut seperti pada contoh

// JAWABAN

const array = [3, 5, 12];
let sum = 0;
for (const element of array) {
sum += element;
}
console.log(`Total nilai adalah: ${sum} karena 3 + 5 + 12 = ${sum}`);

