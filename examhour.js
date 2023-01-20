function examHours(input) {
    let examStartingHour = Number(input[0]);
    let examStartingMins = Number(input[1]);
    let arivalsHour = Number(input[2]);
    let arivalsMins = Number(input[3]);
    if ((examStartingHour * 60 + examStartingMins) >= (arivalsHour * 60 + arivalsMins)) {
        earlyTime = (examStartingHour * 60 + examStartingMins) - (arivalsHour * 60 + arivalsMins)
        if (earlyTime <= 30) {
            console.log("On time")
            console.log(`${earlyTime} minutes before the start`)
        }
        else if (earlyTime > 30 && earlyTime < 60) {
            console.log("Early")
            console.log(`${earlyTime} minutes before the start`)
        }
        else {
            earlyH = Math.floor(earlyTime / 60);
            earlyM = earlyTime % 60;
            console.log("Early")
            if (earlyM < 10) { console.log(`${earlyH}:0${earlyM} hours before the start`) }
            else { console.log(`${earlyH}:${earlyM} hours before the start`) }
        }
    } else if ((examStartingHour * 60 + examStartingMins) < (arivalsHour * 60 + arivalsMins)) {
        lateTime = (arivalsHour * 60 + arivalsMins) - (examStartingHour * 60 + examStartingMins)
        console.log("Late")
        if (lateTime < 60) { console.log(`${lateTime} minutes after the start`) }
        else if (lateTime >= 60) {
            lateH = Math.floor(lateTime / 60);
            lateM = lateTime % 60;
            if (lateM < 10) { console.log(`${lateH}:0${lateM} hours after the start`) }
            else { console.log(`${lateH}:${lateM} hours after the start`) }
        }

    }


}
examHours(["16", "00", "15", "00"])