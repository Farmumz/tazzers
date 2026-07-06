// LOOPING: FOR, WHILE. DO WHILE, PENJELASAN DAN PENGULANGAN

const ttmSaya = ['gk tau', 'gk tau 2', 'gk tau 3', 'gk tau 4', 'gk tau 5']

console.log(ttmSaya)

for (let ttm of ttmSaya) {
console.log(ttm)
}
for (let ttm in ttmSaya) {
    console.log(ttm)
}

/*
for-of: mengeluarkan value dari sebuah variabel
for-in: mengeluarkan index dr sebuah variabel
*/

// FOR EACH

ttmSaya.forEach((ttm, index, length) => {
    console.log(ttm, index)
}); // kalo mau dari 1, tinggal tambahin +1 sebelah index