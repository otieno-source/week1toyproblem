// prompt user to enter details using the prompt() method.
let grossincome = prompt('enter your grossincome'); // you can remove prompt since js can not run prompt
let nssf = prompt('enter your nssf contribution');
let nhif = prompt('enter your nhif contribution');
let pension = prompt('enter your pension');

//calculating taxable income using self-invoking function to automatically calculate taxableincome.
let taxableincome = function (){
    return grossincome - (nssf + nhif + pension);
}();

// calculating paye (a percentage of taxable income)
if (taxableincome <= 24000) {
    let taxerate = 10/100
    paye = (taxerate * taxableincome)
} else 
    if(taxableincome => 24001 && taxableincome <= 32333) {
        let taxerate = 25/100;
        paye = (taxerate * taxableincome);
    } else 
        if (taxableincome => 32334 && taxableincome <= 500000) {
            let taxerate = 30/100;
            paye = (taxerate * taxableincome);   
        } else {
            if (taxableincome => 500001 && taxableincome <= 800000) {
                let taxerate = 32.5/100;
                paye = (taxerate * taxableincome);
            } else{
                (taxableincome > 800000)
                let taxerate = 35/100;
                paye = (taxerate * taxableincome);}
            }
// calculate net salary
let netsalary = (taxableincome - paye);
console.log('Net Salary' + netsalary);
