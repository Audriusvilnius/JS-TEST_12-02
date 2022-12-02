console.log('7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės:');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let string='';
let arrys=[''];

for (let i = 1; i < 100; i++) {
    string = String.fromCharCode(97 + Math.floor(Math.random() * 26));
   
    arrys[i] = string;

}
console.log('Atsitiktiniu raisziu masyvas is 100 simvoliu:',arrys);
