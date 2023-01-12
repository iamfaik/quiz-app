var h2 = document.querySelector('h2')
var duz = document.querySelector('.duz')
var sehv = document.querySelector('.sehv')
var icon=document.querySelector('.fa-solid,.fa-question')
var duzCavab = 0;
var sehvCavab = 0;
var oyunSayi = 5;
var suallar = [
    ["Azərbaycan ilk müstəqəlliyini 1918-ci bərpa edib", "t"],
    ["II Qarabağ müharibəsi 44 gün ərzində baş tutub", "t"],
    ["Azərbaycan futbol millisi dünya çempionatında `D` qrupunda mübarizə aparır", "f"],
    ["Azərbaycanın ikinci paytaxtı Salyan şəhəridir", "f"],
]
var quiz = Math.floor(Math.random() * suallar.length);
h2.innerText=icon
h2.innerText = suallar[quiz][0];
function resetGame() {
    if (duzCavab > sehvCavab) {
        alert('Təbriklər, siz qalib gəldiniz!')
    }
    else {
        alert('Təəssüf, siz məğlub oldunuz!')
    }
    duzCavab = 0;
    sehvCavab = 0;
    duz.innerText = duzCavab
    sehv.innerHTML = sehvCavab
}
window.onkeypress = function (e) {
    oyunSayi--
    if (oyunSayi == 0) {
        resetGame()
    }

    if (e.key == 'f' || e.key == 't') {
        if (e.key == suallar[quiz][1]) {
            duzCavab++
            duz.innerText = duzCavab
        }
        else {
            sehvCavab++
            sehv.innerHTML = sehvCavab
        }
    }
    else {
        alert('Yanlış düyməni sıxdınız')
    }
    quiz = Math.floor(Math.random() * suallar.length);
    h2.innerText = suallar[quiz][0];
}
