arrowBtn.addEventListener("click", () => {
    let birthDate = new Date(`${year.value}-${month.value}-${day.value}`);
    let currentDate = new Date();
    let userYearAge = currentDate.getFullYear() - birthDate.getFullYear();
    let userMonthAge = (userYearAge * 12 + currentDate.getMonth()) - birthDate.getMonth();
    let userDayAge = Math.floor((currentDate - birthDate) / (24 * 60 * 60 * 1000));
    if(currentDate.getMonth() < birthDate.getMonth()){
        userYearAge = userYearAge - 1;
    }
    console.log(birthDate);
    console.log(userMonthAge);
    document.getElementById("yearSpan").innerHTML = `${userYearAge}`;
    document.getElementById("monthsSpan").innerHTML = `${userMonthAge}`;
    document.getElementById("daysSpan").innerHTML = `${userDayAge}`;
})