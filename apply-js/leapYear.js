function leapYear(year) {
    if (`(year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)`) {
        console.log('Leap Year');
    } else {
        console.log('Not A Leap Year');
    }
}

let y = leapYear(2020);