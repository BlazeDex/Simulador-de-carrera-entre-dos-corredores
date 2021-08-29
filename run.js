export default class Run {

    constructor(name) {
        this._runnerName = name;    
        this._board = 0;
    }
    
    getName() {
        return this._runnerName;
    }

    throwDice() {
        return Math.floor(Math.random() * 6 + 1);
    }

    advanceOnBoard() {    
        let d = this.throwDice();
        
        if(d < 3) {
            return 1;
        } else if(d === 3) {
            return 3;
        } else {
            return 2;
        }
    }  
    
    runnerAdvance() {
        return this._board += this.advanceOnBoard();
    } 

    getBoard() {
        return this._board;
    }    
}

let r1 = new Run('Johnny');
let r2 = new Run('Gyro');
let t = 1;

while(r1.getBoard() < 100 && r2.getBoard() < 100) {    
    r1.runnerAdvance();
    r2.runnerAdvance();   
     
    console.log('-----------------------------------------------------------'); 
    console.log(`Turno número ${t++}:`);         
    console.log(`${r1.getName()} se encuentra en la casilla ${r1.getBoard()}.`);
    console.log(`${r2.getName()} se encuentra en la casilla ${r2.getBoard()}.`);             
}

if(r1.getBoard() >= 100 && r2.getBoard() >= 100) {
    console.log('-----------------------------------------------------------');
    console.log(`¡${r1.getName()} y ${r2.getName()} han empatado en el turno ${--t}!`);
} else if(r1.getBoard() >= 100 && r2.getBoard() < r1.getBoard()) {
    console.log('-----------------------------------------------------------');
    console.log(`¡${r1.getName()} ha ganado en ${--t} turnos!`);
} else if(r2.getBoard() >= 100 && r1.getBoard() < r2.getBoard()) {
    console.log('-----------------------------------------------------------');
    console.log(`¡${r2.getName()} ha ganado en ${--t} turnos!`);
} 