console.log("123")
console.log("functions")

function greet(name){
    console.log(`hello ${name}`)
}
function greet(name ){
    if(!name){
        console.log(`hello there`)
    }else{
         console.log(`hello ${name}`)
    }
   
}

function convert(length , from , to ){
    let result;
    if(from === 'miles' ){
        result = length * 1.6 
        return(`${length} ${from} is ${result} ${to}`)
    }else if(from === 'km'){
        result = length / 1.6 
        return(`${length} ${from} is ${result} ${to}`)
    }
}
function showResult(length , from , to){
    console.log(convert(length , from , to))
}

function time(){
    let today = new Date()
    console.log(today)

    let day = today.getDay()
    console.log(day)
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    console.log("today is : " + daylist[day] + '.')
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()

    

    let prepand = (hour >= 12)? "PM" : "AM"

    hour = (hour >= 12 )? hour - 12 : hour;

    if(hour === 0 && prepand === "PM"){
        if(minute === 0 && second === 0){
            hour = 12;
            prepand = 'Noon'
        }else{
            hour = 12;
            prepand = 'PM'
        }
    }
    if (hour === 0 && prepand === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Midnight';
        } else {
            hour = 12;
            prepand = ' AM';
        }
    }
    console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 

}