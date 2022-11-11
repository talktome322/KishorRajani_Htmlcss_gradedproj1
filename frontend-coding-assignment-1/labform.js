function validateform (element) {
    const district = document.getElementById("district").value;
    if( district == ''){
        alert('Please select a valid distrcit');
        return;
    }
    const testTypeOption1 = document.getElementById("cbc").checked
    const testTypeOption2= document.getElementById("complete_urine").checked
    const testTypeOption3= document.getElementById("lipid_profile").checked
    const testTypeOption4= document.getElementById("tsh").checked
    const testTypeOption5= document.getElementById("glucose_test").checked
    if(!(testTypeOption1 || testTypeOption2 || testTypeOption3 || testTypeOption4 || testTypeOption5)) {
        alert('Check atleast one box without fail');
        return;
    }
}