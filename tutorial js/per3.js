// ARRAY

const arraySaya = ['👍', '💪', '🍳']
console.log(arraySaya.length)

const arrayKamu = []
arrayKamu[0] = '❤️'
arrayKamu[1] = '🙌'
arrayKamu[2] = '🤷‍♂️'
console.log(arrayKamu)

// makanan

const makanan = ['🍕', '🍟', '🍔', '🍗', '🍿']

console.log(makanan)

if (makanan) {
    // level 3
    const posisiAyam = makanan.indexOf('🍗') // menyatakan bahwa 🍗 adalah nilai untuk variabel PosisiAyam
    const indexbefore = posisiAyam - 1 // menyatakan bahwa sebelum 🍗 adalah burger
    const indexafter = posisiAyam + 1 // menyatakan bahwa setelah 🍗 adalah popcorn 
    const before = makanan[indexbefore] // dibuat lagi variabel untuk mengetahui emoji apa yang akan dikeluarkan sebelum 🍗
    const after = makanan[indexafter] // dibuat lagi variabel untuk mengetahui emoji apa yang akan dikeluarkan setelah 🍗
    console.log(`Makanan sebelum 🍗 adalah ${before}.`)
    console.log(`Makanan setelah 🍗 adalah ${after}.`)
    // level 4
    const makananAwal = makanan.shift()
    console.log(`makanan pertama yaitu ${makananAwal}`)
    const makananAkhir = makanan.pop()
    console.log(`makana yang terakhir yaitu ${makananAkhir}`)
    // level 2
    console.log(`ayam itu ada di kategori makanan dan ayam berada di index ke ${posisiAyam} dari kelompok konstanta makanan`)

} else {
    console.log(`gk tau`)
}
// level 5
const arrayeks = []
arrayeks['marah'] = '😡'
arrayeks['gembira'] = '😊'
arrayeks['nafas'] = '😤'
console.log(arrayeks)
// tambahan level 5
const length = Object.keys(arrayeks).length
console.log(length)
// level 5-2
const arrayeks2 = ['😡', '😊', '😤']
const newarrayeks2 = arrayeks2.slice()
newarrayeks2[0] = '🍟'

console.log(arrayeks2)
console.log(newarrayeks2)
// level 7
console.log("LEVEL 7")
const arrayasal = ['🍕', 'no', '👀', {ayamgeprek : function ()
    {console.log('ini ayam geprek')

    }
}, '909', ['ibad', 'rj']]
console.log(arrayasal[5][1])
arrayasal[3].ayamgeprek()
// level 8
const array1 = ['🤷‍♂️', '🙏', '👸']
const array2 = ['🎈', '🧨', '🎏']
//digabung:
const mergearray = array1.concat(array2)
console.log (mergearray)
//list arraynya:
for (list of mergearray) console.log(list)
//list sesuai dengan (value, index)
mergearray.map((value, index) => console.log(value, index))

//DATA:
const datas = [
    {
        nama: 'fauzan',
        stack: 'roblox',
        umur: '8',
    },
    {
        nama: 'faris',
        stack: 'steam, playstation, xbox, windows, roblox',
        umur: '15',
    },
    {
        nama: 'abi',
        stack:'chess.com, facebook',
        umur: '43',
    },
    {
        nama: 'umi',
        stack: 'tambah',
        umur: '40',
    }
]

datas.map((values, index) => {
    console.log (values)
})
//jika ingin ditampilkan hanya 1 kolom data/hanya nama saja:
datas.map ((values, index) => {
console.log (values.nama)})
//sesuai urutan umur (dari tertua sampa termuda):
datas.sort((a,b)  => b.umur - a.umur).map(values => console.log(values))
//difilter yang dibawah 30:
console.log ('berikut data yang hanya diatas 30 tahun:')
datas.filter((x)  => x.umur > 30).map(values => console.log(values))
//difilter yang dibawah 30 namun sesuai urutan usia dari tertua hingga termuda:
datas.sort((a,b) => b.umur - a.umur)
.filter((x)  => x.umur > 30)
.map(values => console.log(values))

