//Input speed using the prompt()method and assign it to a variable 'speed'
let speed = prompt('enter speed'); // to run this code in vs code remove prompt.

//create a function to calculate demerit points above the speed limit of 70. Where -
//speed limit less than 70 print 'Ok' else above 70 get 1pts for every extra 5km/s.
//if pts >= 12 print License Suspended.
function demeritpoints (){
    const speedlimit = 70;
    if (speed<speedlimit) {
        console.log('Ok');
    } else {
        points = ((speed - speedlimit) / 5);
        console.log('Your Demerit Points is' +''+ points );
        if (points > 12) {
            console.log('License Suspended');
        }
        
    }
}
// invoke function here.
demeritpoints ();

