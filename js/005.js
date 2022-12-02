console.log('5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būt:');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let ats = 0
while(ats !=5){
     
    ats = rand(1, 10);
    if (ats == 5 )break;
    console.log(ats);
}; 
console.log(ats);