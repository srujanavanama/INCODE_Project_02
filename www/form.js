document.addEventListener("DOMContentLoaded", ()=> {
    // DOM elements
    const form = document.querySelector("form");
    const formButton = document.querySelector("form button");
    const formLName = document.querySelector("#lname");
    const formFName = document.querySelector("#fname");
    const formPhone = document.querySelector("#phone");
    const formEmail = document.querySelector("#email");
    const formMessage = document.querySelector("#message");
    const formSubmit = document.querySelector("#formSubmit");
    const popup = document.querySelector(".popup");
    const popupContent = document.querySelector(".popup-content");
    const closePopup = document.querySelector(".close-popup");

    form.onsubmit = (e) => {
        e.preventDefault();
        let namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i
        let phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
        let emailPattern = /^[a-zA-Z0-9_.-]+[a-zA-Z0-9_.-]+@+[a-z]{3,5}.+[a-z]{2,4}/g;
        let lastName = formLName.value;
        let firstName = formFName.value;
        let phoneNumber  = formPhone.value;
        let email = formEmail.value;
        let lnameValid = namePattern.test(lastName);
        let fnameValid = namePattern.test(firstName);
        let phoneValid = phonePattern.test(phoneNumber);
        let emailVallid = emailPattern.test(email);
        lnameValid ? console.log(`Nom : ${lastName}`) : alert("Invalid Nom");
        fnameValid ? console.log(`Prénom : ${firstName}`) : alert("Invalid Prénom");
        phoneValid ? console.log(`Téléphone : ${phoneNumber}`) : alert("Invalid Téléphone");
        emailVallid ? console.log(`Adresse mail : ${email}`) : alert("Invalid Adresse mail")

        if(lnameValid && fnameValid && phoneValid && emailVallid) {
            popup.style.display = "block";
            closePopup.onclick = () => {popup.style.display="none";}
        }
    }
})