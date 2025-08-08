let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let myCreateDate = new Date(2025,0,20,7,30);
// let myCreateDate = new Date("2025-01-20T07:30:00");
let myCreateDate = new Date("08-14-2025, 01:30:00");

console.log(myCreateDate);
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // current timestamp in milliseconds since 1970-01-01T00:00:00Z
console.log(myTimeStamp.toLocaleString()); 
console.log(myCreateDate.getDate()); // .getDate() gives the day of the month (1-31)
console.log(myCreateDate.getTime()); // .getTime() gives the timestamp in milliseconds
console.log(Math.floor(myCreateDate.getTime() / 1000)); // gives the timestamp in seconds
console.log(Math.floor(myTimeStamp / 1000)); // gives the timestamp in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.toLocaleString("Default",{
    timeZone:"Asia/Kolkata",
    weekday: "short"
}));

// ...existing code...

function getTimeOnlyDifference(dateObj, timestamp) {
    // Get hours, minutes, seconds from dateObj
    const h1 = dateObj.getHours();
    const m1 = dateObj.getMinutes();
    const s1 = dateObj.getSeconds();

    // Create a Date object from timestamp
    const nowDate = new Date(timestamp);
    const h2 = nowDate.getHours();
    const m2 = nowDate.getMinutes();
    const s2 = nowDate.getSeconds();

    // Convert both times to seconds since midnight
    const seconds1 = h1 * 3600 + m1 * 60 + s1;
    const seconds2 = h2 * 3600 + m2 * 60 + s2;

    // Get absolute difference in seconds
    let diffSeconds = Math.abs(seconds1 - seconds2);

    // Convert back to hours, minutes, seconds
    const hours = Math.floor(diffSeconds / 3600);
    diffSeconds %= 3600;
    const minutes = Math.floor(diffSeconds / 60);
    const seconds = diffSeconds % 60;

    return { hours, minutes, seconds };
}

// Example usage:
const timeDiff = getTimeOnlyDifference(myCreateDate, myTimeStamp);
console.log(`Time difference (ignoring date): ${timeDiff.hours} hours, ${timeDiff.minutes} minutes, ${timeDiff.seconds} seconds`);