
// function seterror(id, error) {

//     Element = document.getElementById("paymentForm");
//     Element.getElementsByClassName("formerror")[0].innerHTML = error;
// }
// function validateForm() {
//     var returnval = true;
//     var name1 = document.forms["myform"]["name"].value;
//     if (name1.length < 3) {
//         seterror("name", "*Length of name is too short");
//         returnval = false;
//     }
//     var email1 = document.forms["myform"]["email"].value;
//     if (email1.length > 20) {
//         seterror("email1", "*Email length is too long");
//         returnval = false;
//     }
//     return returnval;
// }
function validateForm() {
    var returnval = true;
    var a1 = document.getElementById("inp1").value;
    if (a1.length < 3) {
        alert("name is too short");
        returnval = false;
    }
    var returnval = true;
    var a2 = document.getElementById("inp2").value;
    if (a2.length > 30) {
        alert("Email length is too long");
        returnval = false;
    }
    var returnval = true;
    var a3 = document.getElementById("inp3").value;
    if (a3.length > 10 || a3.length < 10) {
        alert("please enter valid contact number");
        returnval = false;
    }
    return returnval;
}