arrowBtn.addEventListener("click", () => {
    let birthDate = new Date(`${year.value}-${month.value}-${day.value}`);
    let currentDate = new Date();
    let userYearAge = currentDate.getFullYear() - birthDate.getFullYear();
    if(currentDate.getMonth() < birthDate.getMonth()){
        userYearAge = userYearAge - 1;
    }
    let userMonthAge = (currentDate.getMonth() - birthDate.getMonth()) * userYearAge;
    console.log(birthDate);
    console.log(userMonthAge);
    document.getElementById("yearSpan").innerHTML = `${userYearAge}`;
    document.getElementById("monthSpan").innerHTML = `${userMonth}`;
    document.getElementById("daySpan").innerHTML = `${userDay}`;
})