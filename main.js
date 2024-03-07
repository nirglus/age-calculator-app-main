function calcAge(){
    const birthDate = new Date(`${document.getElementById("year").value}-${document.getElementById("month").value}-${document.getElementById("day").value}`);
    const currentDate = new Date();
    let userYearAge = currentDate.getFullYear() - birthDate.getFullYear();
    console.log({userYearAge});
    let userMonthAge = (currentDate.getMonth() + 1) - (birthDate.getMonth() + 1);
    if (currentDate.getDate() < birthDate.getDate()) {
        userMonthAge--;
    }
    if (userMonthAge < 0) {
        userMonthAge += 12;
    }
    let userDayAge = Math.floor((currentDate - birthDate) / (24 * 60 * 60 * 1000));
    if(currentDate.getMonth() <= birthDate.getMonth()){
        userYearAge--;
    }

    if (userYearAge <= 0) {
        userYearAge = 0;
    }
    // console.log(birthDate);
    // console.log(userMonthAge);
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
    const year = +document.getElementById("year").value;
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

function validateDay(){
    const userDay = +document.getElementById("day").value;
    const userMonth = +document.getElementById("month").value;
    console.log(userMonth);
    if(userDay > 31 || userDay < 1){
        document.getElementById("dayError").innerHTML = `Must be a valid day`;
        document.getElementById("day").style.borderColor = `hsl(0, 100%, 67%)`;
        return false;
    }
    const thirtyDaysMonths = [4, 6, 9, 11];
    if (thirtyDaysMonths.includes(userMonth) && userDay > 30){
        console.log(`This is day ${thirtyDaysMonths.includes(userMonth)}`);
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

function validateCurrentDate(){
    const userDay = +document.getElementById("day").value;
    const userMonth = +document.getElementById("month").value - 1;
    const userYear = +document.getElementById("year").value;
    const userDate = new Date(userYear, userMonth, userDay);
    const currentDate = new Date();
    if(userDate > currentDate){
        document.getElementById("dayError").innerHTML = `Must be a valid day`;
        document.getElementById("day").style.borderColor = `hsl(0, 100%, 67%)`;
        document.getElementById("monthError").innerHTML = `Must be a valid month`;
        document.getElementById("month").style.borderColor = `hsl(0, 100%, 67%)`;
        document.getElementById("yearError").innerHTML = `Must be in the past`;
        document.getElementById("year").style.borderColor = `hsl(0, 100%, 67%)`;
        return false;
    }
    return true;
}

function validateAndCalc(){
    const isYearValid = validateYear();
    const isMonthValid = validateMonth();
    const isDayValid = validateDay();
    const isDateValid = validateCurrentDate();
    if (isYearValid && isMonthValid && isDayValid && isDateValid) {
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