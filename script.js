function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	const firstName = document.querySelector('[name="fname"]').value;
	const lastName = document.querySelector('[name="lname"]').value;

	alert(`${firstName} ${lastName}`);

}
