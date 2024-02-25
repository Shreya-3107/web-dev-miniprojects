document.getElementById("the-box").addEventListener("click", (e)=>{

    let c1 = document.getElementById('c1');
    let c2 = document.getElementById('c2');
    let c3 = document.getElementById('c3');
    let c4 = document.getElementById('c4');

    document.body.style.backgroundColor = e.target.value;

});