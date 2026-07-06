// JAVASCRIPT ASYNCHRONOUS


function satu() {
    console.log("satu");
}

function dua() {
    setTimeout(() => {
    console.log("dua");
}, 10)
}

function tiga() {
    console.log("tiga");
}

satu()
dua()
tiga()

// contoh kedua: mendapatkan user(token), apiKey, dan getUserPictures

// const token= ~~[Math.random() * 12345678]

// const pictures = ["1.jpg", "2.jpg", "3.jpg"]

// function login (username) {
//     return {token, username}

// }

// function getUser(token) {
//     if(token) return {apiKey: "xkey123"}
// }

// function getPictures (apiKey) {
//     if(apiKey) return pictures
// }

// const user = login("farmumz");
// console.log(user.token)

// const {apiKey} = getUser(user.token);
// console.log(apiKey)

// const getUserPicture = getPictures(apiKey)
// console.log(getUserPicture)


// contoh ketiga: sama cuman menggunakan asinkronus

// const token= ~~[Math.random() * 12345678]

// const pictures = ["1.jpg", "2.jpg", "3.jpg", "<= contoh gambar"]

// function login (username, callback) {
//     console.log('memproses tokennya, pls wait.')
//     setTimeout(() => {
//          callback({token, username})

//     }, 1000)
// }

// function getUser(token, callback) {
//     console.log('memproses apiKeynya, pls wait...')
//     if(token)
//     setTimeout(() => { 
//         callback ({apiKey: "xkey123"})
//     }, 1000)
// }

// function getPictures (apiKey, callback) {
//     console.log('memproses hasilnya, tunggu sebentar')
//     if(apiKey)
//     setTimeout(() => {
//         callback({pic: pictures})
//     }, 2000)
// }


// // namanya "nested callback"
// login("farmumz", function(response){
//     const {token} = response
//     console.log('kelar =>', response)
//     console.log('rekapitulasi:')
//     getUser(token, function(response) {
//         const {apiKey} = response
//         console.log('nih apikeynya = ', apiKey)
//         getPictures(apiKey, function(response) {
//             const {pic} = response
//             console.log('hasil:', pic)
//         })
//     })
// })

// const {apiKey} = getUser(user.token);
// console.log(apiKey)

// const getUserPicture = getPictures(apiKey)
// console.log(getUserPicture)

// bisa juga menggunakan Promise (cara yg tdk terlalu kompleks)

const token= ~~[Math.random() * 12345678]

const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login (username) {
    console.log('memproses token, tunggu sebentar...')
    return new Promise((success, failed) => {
    setTimeout(() => {
    if (username != "farmumz") failed("maap, salah input bg.")
        success({token})
    }, 200)
    })
}

function getUser(token) {
    console.log('memproses apiKey, tunggu sebentar...')
    return new Promise((success, failed) => {
        if(!token) failed ("gk ada token, coba lagi.")
            setTimeout (() => { 
            success({apiKey: token})
            }, 9000)
    })
}

function getPictures (apiKey) {
    console.log('memproses hasilnya, tunggu sebentar')
    if(apiKey)
    setTimeout(() => {
        return pictures
    }, 2000)
}

const user = login("farmumz"); // usernya diganti kalo mau eror
user.then(function (response) {
    console.log("username:", user)
    const {token} = response
    getUser(token).then(function (response) {
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

// const {apiKey} = getUser(user.token);
// console.log(apiKey)

// const getUserPicture = getPictures(apiKey)
// console.log(getUserPicture)


//VIDEO 29:45