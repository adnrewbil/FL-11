function formatTime(min) {

    let days, hour = 0;
    
    if ( min >= 60 && min < 1440 ) {
        hour = Math.floor(min/60);
        min = min - (hour*60);
        days = '0';

    } else if ( min >= 1440 ) {
        days = Math.floor(min/1440);
        hour = Math.floor((min -(days*1440))/60);
        min = min - (hour*60)-(days*1440);

    } else { 
        hour = '0';
        days = '0';
    }

    return console.log(`${days} day(s) ${hour} hour(s) ${min} minute(s).`)
}

formatTime(3601);