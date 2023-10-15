function denomination(amount){
    this.amount
}

denomination.prototype = {
    notewithdraw : (note) =>{
        let notecfw = Math.floor(this.amount/note)
        this.amount -= (notecfw * note)
        console.log(`You can withdraw ${notecfw} note of ${note} and your remaining balance will be ${this.amount}`);
    }
}



let abj = new denomination(874);
abj.notewithdraw(100)