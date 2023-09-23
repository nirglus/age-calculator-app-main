function calcAge(){
    const birthDate = new Date(`${document.getElementById("year").value}-${document.getElementById("month").value}-${document.getElementById("day").value}`);
    const currentDate = new Date();
    let userYearAge = currentDate.getFullYear() - birthDate.getFullYear();
    let userMonthAge = (userYearAge * 12 + currentDate.getMonth()) - birthDate.getMonth();
    let userDayAge = Math.floor((currentDate - birthDate) / (24 * 60 * 60 * 1000));
    if(currentDate.getMonth() < birthDate.getMonth()){
        userYearAge--;
    }
    console.log(birthDate);
    console.log(userMonthAge);
    if(validateDay() && validateMonth() && validateYear()){
        document.getElementById("yearSpan").innerHTML = `${userYearAge}`;
        document.getElementById("monthsSpan").innerHTML = `${userMonthAge}`;
        document.getElementById("daysSpan").innerHTML = `${userDayAge}`;
    }
}

function validateYear(){
    if(document.getElementById("year").value > new Date().getFullYear() || document.getElementById("year").value < 1){
        document.getElementById("yearError").innerHTML = `Must be in the past`;
        document.getElementById("year").style.borderColor = `hsl(0, 100%, 67%)`;
        return false;
    }
    document.getElementById("yearError").innerHTML = ``;
    document.getElementById("year").style.borderColor = `hsl(0, 0%, 86%)`;
    return true;
}

function validateMonth(){
    if(document.getElementById("month").value > 12 || document.getElementById("month").value < 1){
        document.getElementById("monthError").innerHTML = `Must be a valid month`;
        document.getElementById("month").style.borderColor = `hsl(0, 100%, 67%)`;
        return false;
    }
    document.getElementById("monthError").innerHTML = ``;
    document.getElementById("month").style.borderColor = `hsl(0, 0%, 86%)`;
    return true;
}
function isLeapYear(){
    const year = document.getElementById("year").value;
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

function validateDay(){
    const userDay = document.getElementById("day").value;
    const userMonth = document.getElementById("month").value;
    if(userDay > 31 || userDay < 1){
        document.getElementById("dayError").innerHTML = `Must be a valid day`;
        document.getElementById("day").style.borderColor = `hsl(0, 100%, 67%)`;
        return false;
    }
    const thirtyDaysMonths = [4, 6, 9, 11];
    if (thirtyDaysMonths.includes(userMonth) && userDay > 30){
        document.getElementById("dayError").innerHTML = `Must be a valid day`;
        document.getElementById("day").style.borderColor = `hsl(0, 100%, 67%)`;
        return false;
    }
    if(userMonth == 2){
        if(isLeapYear()){
            if(userDay > 29){
                document.getElementById("dayError").innerHTML = `Must be a valid day`;
                document.getElementById("day").style.borderColor = `hsl(0, 100%, 67%)`;
                return false;
            }
        }else if(userDay > 28){
            document.getElementById("dayError").innerHTML = `Must be a valid day`;
            document.getElementById("day").style.borderColor = `hsl(0, 100%, 67%)`;
            return false;
        }
    }
    document.getElementById("dayError").innerHTML = ``;
    document.getElementById("day").style.borderColor = `hsl(0, 0%, 86%)`;
    return true;
}

function validateAndCalc(){
    const isYearValid = validateYear();
    const isMonthValid = validateMonth();
    const isDayValid = validateDay();
    if (isYearValid && isMonthValid && isDayValid) {
        calcAge();
    }
    else{
        document.getElementById("yearSpan").innerHTML = `--`;
        document.getElementById("monthsSpan").innerHTML = `--`;
        document.getElementById("daysSpan").innerHTML = `--`;
    }
}
arrowBtn.addEventListener("click", validateAndCalc);
document.addEventListener("keydown", (event) =>{
    if(event.key == "Enter"){
        validateAndCalc();
    }
})