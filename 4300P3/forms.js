function capFirst(){
	var s = document.getElementById("first").value;
	s = s.charAt(0).toUpperCase() + s.slice(1);
	document.getElementById("first").value = s;
}
			
function capLast(){
	var s = document.getElementById("last").value;
	s = s.charAt(0).toUpperCase() + s.slice(1);
	document.getElementById("last").value = s;
	}
			
function formTel(){
	var patt = /^\(?([0-9]{3})\)[-. ]([0-9]{3})[-. ]([0-9]{4})$/;
	var s = document.getElementById("tel").value;
	if(!s.match(patt)){
		window.alert("The telephone number does not match format. Please re-enter in format XXX-XXX-XXXX")
	}
}

function checkCity(){
	var newOption = document.createElement("option");
	newOption.value = "30635";
	newOption.innerHTML = "30635";
	document.getElementById("zip").options.add(newOption);
}
