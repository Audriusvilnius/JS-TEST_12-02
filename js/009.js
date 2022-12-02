console.log('9. Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė');

function Pirmin(num) {
    if (typeof number == num){
        return 'Ne numereris';
    }
    let s = 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) { s = 1; s += s; }
    }
    if (s !== 0 || num < 2) return 'Ne pirmin';
    else if (s == 0) return 'pirmin';


}

console.log(Pirmin('w'), false, "0  Ne pirmin");
console.log(Pirmin(9), true, "9  Ne pirmin");
console.log(Pirmin(1), false, "1  Ne pirmin");
console.log(Pirmin(2), true, "2 Pirmin");
console.log(Pirmin(73), true, "73 Pirmin");
console.log(Pirmin(75), false, "75  Ne pirmin");
console.log(Pirmin(-1), false, "-1  Ne pirmin");