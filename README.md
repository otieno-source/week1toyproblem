# week1toyproblem Student grading system code. 
1. prompt the user to enter student marks through prompt() method.
2. use if else method inside a self-invoking function to award grades according to the marks.


# week1toyproblem Speed detector code guide. // to run this code in vs code remove prompt.//
1. Input speed using the prompt()method and assign it to a variable 'speed'
let speed = prompt('enter speed');

2. create a function to calculate demerit points above the speed limit of 70. 
function demeritpoints (){
    const speedlimit = 70;
    //write code follow steps below//
}

3. Where speed limit less than 70 print 'Ok' else above 70 get 1pts for every extra 5km/s.
    if (speed<speedlimit) {
        console.log('Ok');
    } else {
        points = ((speed - speedlimit) / 5);
        console.log('Your Demerit Points is' +''+ points );

4. if pts >= 12 print License Suspended.
     if (points > 12) {
            console.log('License Suspended');




# week1toyproblem calculating netsalary code guide.  // to run this code in vs code remove prompt.//
1. Prompt user to enter details using the prompt() method.

2. Calculate taxable income using self-invoking function to automatically calculate taxableincome.

let taxableincome = function (){
    return grossincome - (nssf + nhif + pension);
}();

3. Calculate paye (a percentage of taxable income).
   
   use the if () {} else method to calculate paye due to difference tax rate for each income class
   as shown in the external documents used in this test.

4. Calculate netsalry by subtracting paye from the taxable income.
   let netsalary = (taxableincome - paye);
   console.log('Net Salary' + netsalary);


