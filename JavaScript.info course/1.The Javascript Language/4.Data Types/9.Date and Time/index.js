/* Date and Time */

const firstDate = new Date(0)
// console.log(firstDate)

const oldFromFirst = new Date(-24 * 3600 * 10000)
// console.log(oldFromFirst)

const fromString = new Date("2005-12-09") // 2005.12.09, 12.09.2005 ...
fromString.setFullYear(2023, 11, 9)
console.log(fromString.toDateString())

/*
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds)(01.01.1970)
 */

const today = new Date()
// today.setHours(0, 0, 0, 0)
// console.log(today.toTimeString())
console.log(today)
const date = new Date(2023, 11, 1)
// date.setDate(0)
// console.log(date.toDateString())

// Type conversation

console.log(+date) // milliseconds
console.log(date) // string



// let startTime = Date.now()
// let sum = 0
// for(let i = 1; i <= 1000000000; i++){
//     sum += i
// }
// let endTime = Date.now()

// console.log(endTime - startTime)
// console.log(endTime.getTime() - startTime.getTime())
// console.log(endTime - startTime) // getTime faster than conversations

console.log(performance.now())


// Tasks

const date1 = new Date(2012, 1, 20, 3, 12)
const date2 = new Date('2012-02-20T03:12:00')
console.log(date1.toLocaleString(), date2.toLocaleString())

function getWeekDay(date){
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()]
}
console.log(getWeekDay(new Date(2005, 11, 9)))

function getLocalDay(date){
    let day = date.getDay()
    if(day === 0){
        day = 7
    }
    return day
}

function getDateAgo(date, day){
    date.setDate(date.getDate() - day)
    return date.toDateString()
}
let date3 = new Date(2015, 0, 2);
console.log(getDateAgo(date3, 365))

function getLastDayOfMonth(year, month){
    const date = new Date(year, month + 1, 0)
    return date.getDate()
}

console.log(getLastDayOfMonth(2012, 1))

function getSecondsToday(){
    const today = new Date
    today.setHours(0, 0, 0, 0)
    const date = new Date
    return (date.getTime() - today.getTime()) / 1000
}
console.log(getSecondsToday())

function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;

    return totalSecondsInADay - totalSecondsToday;
}

/**
 * Date formats
 * @param {Date} date
 * @returns {string}
 */
function formatDate(date){
    const now = new Date
    const diff = now - date
    if(diff === 1){
        return "right now"
    } else if(diff / 1000 <= 60){
        return `${diff / 1000} sec. ago`
    } else if((diff / 60000) <= 60){
        return `${(diff / 60000)} min. ago`
    }
    return date.toLocaleString()
}
console.log( formatDate(new Date(new Date - 1)) ); // "right now"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );