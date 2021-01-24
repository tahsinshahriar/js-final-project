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

//withdraw button event
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click",function(){
    const withdrawAmt = parseFloat(document.getElementById("withdraw-amt").value);
    const currWithdraw = parseFloat(document.getElementById("curr-withdraw").innerHTML);
    const totalBalance = parseFloat(document.getElementById("total-balance").innerHTML);
    document.getElementById("curr-withdraw").innerHTML = currWithdraw + withdrawAmt;
    document.getElementById("total-balance").innerHTML = totalBalance - withdrawAmt;
    document.getElementById("withdraw-amt").value = "";

})

