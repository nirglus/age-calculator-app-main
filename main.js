arrowBtn.addEventListener("click", () => {
    let birthDate = new Date(`${year.value}-${month.value}-${day.value}`);
    let currentDate = new Date();
    let userYearAge = currentDate.getFullYear() - birthDate.getFullYear();
    let userMonthAge = (userYearAge * 12 + currentDate.getMonth())- birthDate.getMonth();
    if(currentDate.getMonth() < birthDate.getMonth()){
        userYearAge = userYearAge - 1;
    }
    console.log(birthDate);
    console.log(userMonthAge);
    document.getElementById("yearSpan").innerHTML = `${userYearAge}`;
    document.getElementById("monthsSpan").innerHTML = `${userMonthAge}`;
    document.getElementById("daysSpan").innerHTML = `${userDay}`;
})