document.getElementById("grocery_form").addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault(); 

    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let fnumber = document.getElementById("firstnumber").value;
    let lnumber = document.getElementById("lastnumber").value;
    let email = document.getElementById("Email").value;

    let ac = document.getElementById("applecheck").checked ? "Yes" : "No";
    let an = document.getElementById("applenumber").value;

    let bc = document.getElementById("bananacheck").checked ? "Yes" : "No";
    let bn = document.getElementById("banananumber").value;

    let avc = document.getElementById("avocadocheck").checked ? "Yes" : "No";
    let avn = document.getElementById("avocadonumber").value;

    let url = "receipt2.html?" +
        "fname=" + encodeURIComponent(fname) +
        "&lname=" + encodeURIComponent(lname) +
        "&fnumber=" + encodeURIComponent(fnumber) +
        "&lnumber=" + encodeURIComponent(lnumber) +
        "&email=" + encodeURIComponent(email) +
        "&ac=" + encodeURIComponent(ac) +
        "&an=" + encodeURIComponent(an) +
        "&bc=" + encodeURIComponent(bc) +
        "&bn=" + encodeURIComponent(bn) +
        "&avc=" + encodeURIComponent(avc) +
        "&avn=" + encodeURIComponent(avn);

    window.location.href = url;
}
