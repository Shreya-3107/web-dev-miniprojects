document.getElementById("regform").addEventListener('submit', function(event){
    event.preventDefault();
    var fname = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var emailid = document.getElementById('email').value;
    var passw = document.getElementById('pass').value;

    document.getElementById('fn').innerHTML = fname;
    document.getElementById('ln').innerHTML = lname;
    document.getElementById('em').innerHTML = emailid;
    document.getElementById('pa').innerHTML = passw;

});