arrowBtn.addEventListener("click", calcAge);

function calcAge(){
    let birthDate = new Date(`${document.getElementById("year").value}-${document.getElementById("month").value}-${document.getElementById("day").value}`);
    let currentDate = new Date();
    let userYearAge = currentDate.getFullYear() - birthDate.getFullYear();
    let userMonthAge = (userYearAge * 12 + currentDate.getMonth()) - birthDate.getMonth();
    let userDayAge = Math.floor((currentDate - birthDate) / (24 * 60 * 60 * 1000));
    if(currentDate.getMonth() < birthDate.getMonth()){
        userYearAge = userYearAge - 1;
    }
    console.log(birthDate);
    console.log(userMonthAge);
    clearErrors();
    document.getElementById("yearSpan").innerHTML = `${userYearAge}`;
    document.getElementById("monthsSpan").innerHTML = `${userMonthAge}`;
    document.getElementById("daysSpan").innerHTML = `${userDayAge}`;
}

function validateYear(){
    if(+document.getElementById("year").value > new Date().getFullYear()){
        document.getElementById("yearError").innerHTML = `Must be in the past`;
        document.getElementById("year").style.borderColor = `hsl(0, 100%, 67%)`;
        return false;
    }
    return true;
}

function validateMonth(){
    if(+document.getElementById("month").value > 11 || +document.getElementById("month").value < 1){
        document.getElementById("monthError").innerHTML = `Must be a valid month`;
        document.getElementById("month").style.borderColor = `hsl(0, 100%, 67%)`;
        return false;
    }
    return true;
}
function isLeapYear(){
    const year = +document.getElementById("year").value;
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

function validateDay(){
    const userDay = +document.getElementById("day").value;
    const userMonth = +document.getElementById("month").value;
    if(userDay > 31 || userDay < 1){
        document.getElementById("dayError").innerHTML = `Must be a valid month`;
        document.getElementById("day").style.borderColor = `hsl(0, 100%, 67%)`;
        return false;
    }
    const thirtyDaysMonths = [4, 6, 9, 11];
    if (thirtyDaysMonths.includes(userMonth && userDay > 30)){
        document.getElementById("dayError").innerHTML = `Must be a valid month`;
        document.getElementById("day").style.borderColor = `hsl(0, 100%, 67%)`;
        return false;
    }
    if(userMonth == 1){
        if(isLeapYear()){
            if(userDay > 29){
                document.getElementById("dayError").innerHTML = `Must be a valid month`;
                document.getElementById("day").style.borderColor = `hsl(0, 100%, 67%)`;
                return false;
            }
        }else if(userDay > 28){
            document.getElementById("dayError").innerHTML = `Must be a valid month`;
            document.getElementById("day").style.borderColor = `hsl(0, 100%, 67%)`;
            return false;
        }
    }
    return true;
}
function clearErrors(){
    document.getElementById("yearError").innerHTML = ``;
    document.getElementById("year").style.borderColor = `hsl(0, 0%, 86%)`;
    document.getElementById("monthError").innerHTML = ``;
    document.getElementById("month").style.borderColor = `hsl(0, 0%, 86%)`;
    document.getElementById("dayError").innerHTML = ``;
    document.getElementById("day").style.borderColor = `hsl(0, 0%, 86%)`;
}