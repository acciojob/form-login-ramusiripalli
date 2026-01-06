function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
let firstName = document.querySelector("#fname").value.trim();
let lastName = document.querySelector("#lname").value.trim();
	if(firstName === "" || lastName === ""){
		alert("please enter both first and last name");
		return;
	}
	let namePattern = /^[A-Za-z\s'-]+$/;
	if(!namePattern.test(firstName) || !namePattern.test(lastName)){
		 alert("Names can contain only letters, spaces, hyphens, and apostrophes");
        return;
	}
	alert(`${firstName} ${lastName}`);
}
