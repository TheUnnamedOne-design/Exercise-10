function updateDOM() {
    document.getElementById("title").innerText = "Updated Title";

    let usernameField = document.getElementsByName("username")[0];
    usernameField.value = "John Doe";

    let genderOptions = document.getElementsByName("gender");
    let selectedGender = "";

    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            selectedGender = genderOptions[i].value;
            break;
        }
    }
    document.getElementById("selectedGender").innerText = "Selected Gender: " + (selectedGender || "None");

    let paraElements = document.getElementsByTagName("p");
    document.getElementById("paraCount").innerText = paraElements.length;

    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        console.log("List item:", listItems[i].innerText);
    }

    let inputFields = document.getElementsByClassName("input-field");
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].style.backgroundColor = "lightblue";
    }

    let firstInfoPara = document.querySelector(".info");
    if (firstInfoPara) {
        firstInfoPara.innerText = "This is the first info paragraph";
    }

    let firstRadio = document.querySelector('input[name="gender"]');
    if (firstRadio) {
        firstRadio.checked = true;
    }

    let allInfoParas = document.querySelectorAll(".info");
    allInfoParas.forEach(p => console.log("Info paragraph:", p.innerText));

    let allCheckboxes = document.querySelectorAll(".hobby");
    allCheckboxes.forEach(cb => {
        cb.checked = true;
        console.log("Checked hobby:", cb.value);
    });
}
