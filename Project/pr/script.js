var side = 25;
var xotArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված
var prdArr = [];//գիշատիչի զանգվածը
var huntArr=[];//որսորդի զանգված
var spyArr=[];// լրտեսի զանգված
// let matrix = genetareMatrix(20,25,6);

// function genetareMatrix(lengthY, lengthX, number) {

//     let matrix = [];
    
//     function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//     }
    
//     for (let y = 0; y < lengthY; y++) {
//     matrix.push([]);
//     for (let x = 0; x < lengthX; x++) {
//     let randomCount = getRandomInt(number);
//     matrix[y].push(randomCount);
//     }
//     }
//     return matrix;
    
//     }
let matrix = []; // Մատրիցի ստեղծում
let rows = 30; // Տողերի քանակ
let columns = 30; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
for (let x = 0; x < columns; x++) {
let a = Math.floor(Math.random()*100);
if (a >= 0 && a < 20) {
matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
} 
if (a >= 20 && a < 40) {
matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
} 
else if (a >= 40 && a < 50) {
matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
} 
else if (a >= 50 && a < 70) {
matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
} 
else if(a >= 70 && a < 90) {
matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
} 
else if(a >= 90 && a < 100) {
matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
} 
}
}
    


function setup() {
    noStroke();
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side); //կտավի չափերը դնել մատրիցայի չափերին համապատասխան
    background('#acacac');

    //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի և խոտակերների զանգվածները
    //հիմնվելով մատրիցի վրա 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            }else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y);
                prdArr.push(predator);
            }else if (matrix[y][x] == 4) {
                var hunter = new Hunter(x, y);
                huntArr.push(hunter);
            }else if (matrix[y][x] == 5) {
                var spy = new Spy(x, y);
                spyArr.push(spy);
            }
        }
    }
}

//draw ֆունկցիան գծում է «կադրերը», վարկյանում 60 կադր արագությամբ
//եթե տրված չէ այլ կարգավորում frameRate ֆունկցիայի միջոցով
//draw ֆունկցիան ինչ որ իմաստով անվերջ կրկնություն է (цикл, loop)
function draw() {
    //Գծում է աշխարհը, հիմվելով matrix-ի վրա
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }else if (matrix[i][j] == 3 ) {
                fill("red");
                rect(j * side, i * side, side, side);
            }else if (matrix[i][j] == 4 ) {
                fill("blue");
                rect(j * side, i * side, side, side);
            }else if (matrix[i][j] == 5 ) {
                fill("purple");
                rect(j * side, i * side, side, side);
            }
        }
    }


    //յուրաքանչյուր խոտ փորձում է բազմանալ
    for (var i in xotArr) {
        xotArr[i].mul();
    }

    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    for (var i in eatArr) {
        eatArr[i].eat();
    }
    //յուրաքանչյուր գիշատիչ փորձում է ուտել խոտակեր
    for (var i in prdArr) {
        prdArr[i].eat();
    }
    //յուրաքանչյուր որսորդ փորձում է ուտել խոտակեր և գիշատիչ
    for (var i in huntArr) {
    huntArr[i].eat();
     }
     //յուրաքանչյուր լրտես փորձում է ուտել խոտակեր,գիշատիչ և որսորդ
    for (var i in spyArr) {
        spyArr[i].eat();
         }
    }

