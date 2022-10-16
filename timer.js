function timer(deadline) {
   
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / (1000)) % 60);
        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(endtime) {
        const timeInterval = setInterval(updateClock, 1000);                    
        updateClock();

        function updateClock() {
            let t = getTimeRemaining(endtime),
                days = getZero(t.days),
                hours = getZero(t.hours),
                minutes = getZero(t.minutes),
                seconds = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
            }
            console.log(`${days}: ${hours}: ${minutes}: ${seconds}`)
        }
    }
    setClock(deadline); 
}

timer('2022-11-16 21:16');