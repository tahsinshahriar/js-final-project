//login button event
const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click",function(){
    // console.log("login button clicked");
    document.getElementById("login-area").style.display = "none";
    document.getElementById("transaction-area").style.display = "block";
})

//deposit button event
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function(){
    const depositAmmount = parseFloat(document.getElementById("deposit-amt").value);
    const currDeposit = parseFloat(document.getElementById("curr-deposit").innerHTML);
    const totalBalance = parseFloat(document.getElementById("total-balance").innerHTML);
    document.getElementById("curr-deposit").innerHTML = currDeposit + depositAmmount;
    document.getElementById("total-balance").innerHTML = totalBalance + depositAmmount;
    document.getElementById("deposit-amt").value = "";
})