arrowBtn.addEventListener("click", () => {
    let birthDate = new Date(`${year.value}-${month.value}-${day.value}`);
    let currentDate = new Date();
    let userYearAge;;
    if(currentDate.getMonth() < birthDate.getMonth()){
        userYearAge = currentDate.getFullYear() - birthDate.getFullYear() - 1;
    }else{
        userYearAge  = currentDate.getFullYear() - birthDate.getFullYear();
    }
    let userMonthAge = (currentDate.getMonth() - birthDate.getMonth()) * userYearAge;
    console.log(birthDate);
    console.log(userMonthAge);
    document.getElementById("yearSpan").innerHTML = `${userYearAge}`;
    document.getElementById("monthSpan").innerHTML = `${userMonth}`;
    document.getElementById("daySpan").innerHTML = `${userDay}`;
})