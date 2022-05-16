let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i = 0; i <numbers.length; i+= 1){
    console.log(numbers[i])
}
//ex 2
let result = 0;
for(let i = 0; i <numbers.length; i +=1){
    result += numbers[i]
}
console.log(result)

//ex 3
Media = result / 10;
console.log(Media)

//ex 4
if(Media > 20){
    console.log(`Valor maior que 20`);
}else{
    console.log(`valor menor ou igual a 20`)
}

//ex5

let maiorNumeroArray = numbers[0]
for(let i = 0; i < numbers.length; i +=1){
    if(maiorNumeroArray < numbers[i]){
        maiorNumeroArray = numbers[i]
    }
}
console.log(maiorNumeroArray)

//ex 6
let quantidadeDeImpares = 0;
for(let i = 0; i < numbers.length; i+= 1){
    if(numbers[i] % 2 !== 0){
        quantidadeDeImpares +=1
    }
}
console.log(quantidadeDeImpares)

//ex 7

let menorNUmeroArray = numbers[0];
for(let i = 0; i < numbers.length; i+=1){
    if(numbers[i] < menorNUmeroArray){
        menorNUmeroArray = numbers[i]
    }
}
console.log(menorNUmeroArray)

//ex 8

let arrayAte25 = [];
for(let i = 1; i <= 25; i += 1){
    arrayAte25.push(i)
}
console.log(arrayAte25)

//ex 9
let divisaoDoArray25 = [];
for(let i = 0; i < arrayAte25.length; i+= 1){
    divisaoDoArray25.push(arrayAte25[i]  / 2)
}
console.log(divisaoDoArray25)

//bonus 1


for(let index1 = 1; index1 < numbers.length; index1 +=1){
    for(let index2 =  0; index2 < numbers.length; index2 +=1){
        if(numbers[index2] > numbers[index1]){
            let position = numbers[index2]
            numbers[index2] = numbers[index1]
            numbers[index1] = position
        }
    }
}
console.log(`Valor do array crescente e: ${numbers}`)

//bonus 2

for(let index1 = 1; index1 < numbers.length; index1 +=1){
    for(let index2 =  0; index2 < numbers.length; index2 +=1){
        if(numbers[index2] < numbers[index1]){
            let position = numbers[index2]
            numbers[index2] = numbers[index1]
            numbers[index1] = position
        }
    }
}
console.log(`Valor do  array decrescente e : ${numbers}`);

//bonus 3

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let numbersMultiplicado = [];
for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i + 1] === undefined){
        numbersMultiplicado.push(numbers[i] * 2)
    }else{
        numbersMultiplicado.push(numbers[i] * numbers[i + 1])
    }
    
}
console.log(numbersMultiplicado)