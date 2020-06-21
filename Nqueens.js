let fs=require('fs')
let number_Of_Iteration =0
let finalTemperature
function randomNumberGenerator(n) {
    let Array_of_quenns = new Array();
    for (let i = 0; i < n; i++) {
        Array_of_quenns[i] = Math.floor((Math.random() * n));
    }
    return Array_of_quenns;
}


function conflictCounter(queens_position, n) {
    let conflict = 0;
   
    for (let i = 0; i < n; i++) {   // cheak if there is a repeated number on or 
        for (let j = i + 1; j < n; j++) {//The diference betewen two concequative elements is  1
            if (queens_position[i] == queens_position[j] || Math.abs(queens_position[i] - queens_position[j]) == j - i) {
                conflict += 1;
            }
        }
    }
    return conflict;
}


function Artifcial_Intelegence(n, maxNumOfIterations, temperature, coolingFactor) {
   
    let posision_of_queens = randomNumberGenerator(n); //  starts with random position

    
    let conflictNumber = conflictCounter(posision_of_queens, n);

   
    while (temperature > 0.0001) { 
        for (let i = 0; i < maxNumOfIterations; i++) {
            makeMove(posision_of_queens, conflictNumber, temperature, n);
            conflictNumber = conflictCounter(posision_of_queens, n);

            number_Of_Iteration++;
            if (conflictNumber == 0) {
                finalTemperature = temperature;
                return posision_of_queens; // return solution if conflict-free
            }
        }
        temperature -= temperature * coolingFactor;
    }
    return null; // return null if no solution at the end
}



function makeMove(quennsPosition, targetCost, temp, n) {
    while (true) {

        let nCol = Math.floor((Math.random() * n));
        let nRow = Math.floor((Math.random() * n));
        
        let tmpRow = quennsPosition[nCol];// swap column and check number of conflict
        quennsPosition[nCol] = nRow;
     
        let cost = conflictCounter(quennsPosition, n);
       
        if (cost < targetCost) {   // accept the previous soulution if the current solution is worest than it 
            break;     
        }
   
        let delta = targetCost - cost;
   
        let acceptProb = Math.min(100, Math.exp(delta / temp));

        if (Math.random() < acceptProb) {
            break;
        }

        quennsPosition[nCol] = tmpRow;
    }
}

let max_iteration = 50;
let coolingFactor = 0.15;
let n =100;    //dimension of the board
let log_of_E75 = 0.287682
let startTemp = n * log_of_E75;

let result = Artifcial_Intelegence(n, max_iteration, startTemp, coolingFactor);


//console.log(result)

let data = JSON.stringify(result)
fs.writeFileSync(qposition.json,data)

for (i = 0; i < result.length; i++) {
    fs.writeFileSync(qposition.json,data)
}

        //  let input = fs.readFileSync(qposition.json)
        //  let data_from_file= JSON.parse(input)
       
rerult= result.toString()
         print(result, n)
function print(rs, n) {
    let printin = []
        for(let i=0; i<n; i++) {
            for(let j=0 ; j<n; j++)
        printin[i] = new Array(n);
    }

    for (let i = 0; i <printin.length; i++) {
        for (let j = 0; j < printin[0].length; j++) {
            printin[i][j] =' ';
        }
    }
    for (let i = 0; i < n; i++) {
        printin[i][rs[i]] ="Q"
    }
 
for(let i =0; i<n; i++){
    printin[i]
    printin=printin



   
}
console.table(printin)
     

// while (printin.length) converted_twoD.push(printin.splice(0, n));
// printin=printin.toString()
// printin=printin.slice(0, 20); 
// console.table(printin)


}
 

