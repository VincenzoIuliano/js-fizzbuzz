// Scrivi un programma che stampi i numeri da 1 a 100, 
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// SCRIVO IL PROGRAMMA PER STAMPARE I NUMERI DA 1 A 100

// for (let i = 0 ; i < 100; i++) {
//     const num = i + 1       // number
//     console.log (num)
// }

// IMPLEMENTO UN IF PER STAMPARE COME RICHIESTO DALLA TRACCIA 

for (let i = 0 ; i < 100; i++) {
    const num = i + 1       // number
  
    const resto3 = num % 3  // [0,1,2]
    const resto5 = num % 5  // [0,1,2,3,4]

    if (resto3 === 0 && resto5 === 0 ) {
        // il num è divisibile per 3 e per 5
        console.log ('FizzBuzz')
    } else if (resto5 ===0) {
        // il num è divisibile per 5
        console.log ('Buzz')
    } else if (resto3 === 0) {
        // il num è divisibile per 3
        console.log ('Fizz')
    } else {
        console.log (num)
    }
}
