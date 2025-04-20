document.getElementById("akan-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const birthDateValue = document.getElementById("Birthdate").value;
    const genderInputs = document.getElementsByName("gender");
    let gender = "";
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            gender = genderInputs[i].value;
            break;
        }
    }
    if (!birthDateValue) {
        alert("Choose birthdate.");
        return;
    }
    if (!gender) {
        alert("Choose gender.");
        return;
    }
    const birthDate = new Date(birthDateValue);
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1;
    const year = birthDate.getFullYear();
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const dayOfWeek = Math.floor(
        ((CC / 4 - 2 * CC - 1) + (5 * YY / 4) + (26 * (month + 1) / 10) + day) % 7
    );
    const dayIndex = ((dayOfWeek + 7) % 7);
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];
    const dayName = daysOfWeek[dayIndex];
    document.getElementById("Akan name").textContent = `Born on a ${dayName}. New akan name is ${akanName}. `;
});
