console.log('6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų.:');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let array = [];
let newArray = [];

for (let i = 0; i<rand(20,30); ++i){
    array[i]=rand(10,30);
    newArray.push(array[i]); 
}
console.log('6.1 Naujas masybvas nuo 20 iki 30 elementu, su reiksmem nuo 10 iki 30:',newArray);

newArray = newArray.sort();
let max= newArray[0];
for (let i=1;i<newArray.length; i++){
    if (max < newArray[i]){
        max = newArray[i];
    }
}
console.log('6.2 Maximali reiksme = ',max);
