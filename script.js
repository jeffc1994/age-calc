function clearAll() {
    errorDay.textContent = "";
    errorMonth.textContent = "";
    errorYear.textContent = "";
}

function calculate() {
    clearAll();
    const birthDay = document.getElementById('dayValue').value;
    const dayNumber = parseInt(birthDay, 10);
    const birthMonth = document.getElementById('monthValue').value;
    const monthNumber = parseInt(birthMonth, 10);
    const birthYear = document.getElementById('yearValue').value;
    const yearNumber = parseInt(birthYear, 10);
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    let dayCheck = false;
    let monthCheck = false;
    let yearCheck = false;
    let calculatedDay;
    let calculatedMonth;
    let calculatedYear;

    if (birthDay === '') {
        errorDay.textContent = "This field is required";
    } else if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 31 || (birthDay.toString()).length > 2) {
        errorDay.textContent = "Must be a valid day";
    } else {
        dayCheck = true;
    }

    if (birthMonth === '') {
        errorMonth.textContent = "This field is required";
    } else if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        errorMonth.textContent = "Must be a valid month";
    } else {
        monthCheck = true;
    }

    if (birthYear === '') {
        errorYear.textContent = "This field is required";
    } else if (isNaN(yearNumber) || yearNumber < 1 || (yearNumber.toString()).length != 4) {
        errorYear.textContent = "Invalid year provided";
    } else if (yearNumber > currentYear) {
        errorYear.textContent = "This year is in the future";
    } else {
        yearCheck = true;
    }

    if (dayCheck == true && monthCheck == true && yearCheck == true) {
        calculatedDay = currentDay - dayNumber;
        calculatedMonth = currentMonth - monthNumber;
        calculatedYear = currentYear - yearNumber;

        if (calculatedMonth < 0 || calculatedMonth === 0 && calculatedDay < 0) {
            calculatedYear--;
            calculatedMonth += 12;
        }

        if (calculatedDay < 0) {
            let calcMonth = currentMonth - 1;
            if (calcMonth < 0) {
                calcMonth += 12;
                alert(calcMonth);
                let calcYear = currentYear - 1;
                let lastMonthDays = getDays(calcYear, calcMonth);
                calculatedDay = lastMonthDays - calculatedDay;
            }

        }

        document.getElementById('age-years').textContent = 0;
        document.getElementById('age-months').textContent = 0;
        document.getElementById('age-days').textContent = 0;

        setInterval(myFunction, 15);
        let x1 = 0;
        let x2 = 0;
        let x3 = 0;

        function myFunction() {

            if (x1 <= calculatedDay) {
                document.getElementById('age-days').textContent = x1;
                x1++;
            }
            if (x2 <= calculatedMonth) {
                document.getElementById('age-months').textContent = x2;
                x2++;
            }
            if (x3 <= calculatedYear) {
                document.getElementById('age-years').textContent = x3;
                x3++;
            }

        }
    }

}

