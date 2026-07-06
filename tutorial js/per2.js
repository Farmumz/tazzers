// DOM
console.log(document.title)
document.title = 'apa'


const body = document.body
body.append("<marquee>hello world</marquee>")

// membikin element baru
const h1 = document.createElement('h1') // menyatakan adanya 'h1'  "<h1></h1>"
h1.textContent = '<marquee>apalah</marquee>' // mengisi konten untum 'h1' "<h1>apalah</h1>"

body.append(h1) // untuk menambah 'h1'nya. Karena hasil akhir konstanta dan textcontentnya akan ditambahkan.

// Kesimpulan: 'const h1' adalah untuk menyatakan h1 akan ditambahkan ke body HTML melalui javascript,'h1.textContent'

//contoh lagi:
const namaSaya = document.createElement('h2') // menyatakan adanya 'h2'
namaSaya.innerHTML = "<marquee>ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE ANDA KENA RANSOMWARE </marquee>"

body.append(namaSaya)

const namaKamu = document.createElement('b')
namaKamu.innerHTML = "<marquee>kolas mempas</marquee>"

body.append(namaKamu)

//"styling" tombol dengan jawa

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.getElementById('btn3')

const defaultText = 'klik 1'
btn1.textContent = defaultText

btn1.style.padding = '2px'
btn1.style.background = 'blue'
btn1.style.fontSize = '20px'

function gantiWarna() {
    btn1.style.background = 'green'
    const newText = document.createElement('h5')
    newText.textContent = 'halo! makasih sudah klik'
    body.append(newText)
}

function gantiText() {
    btn1.innerText = 'geli oi cepet klik'
}

function balikText() {
    btn1.innerText = defaultText
}

console.log(btn1)

function tambahText() {
    textBaru = document.createElement('h4')
    textBaru.textContent = 'hayolo mau ngapain? ahh gw kasihan. nih codenya: H4bpycwbLZf84WCNcZiAYp5Ea0YoKz/lDmOBrz+f2mYHjgeSEqEeH2aPZKdxChHf'
    body.append(textBaru)
}

function warnaText() {
    textBaru.style.color = 'white'
}


function gantiBack() {
    // const body = document.createElement('body')
    body.style.background = 'red'
}
