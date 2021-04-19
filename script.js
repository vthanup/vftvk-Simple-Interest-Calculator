function compute()
{     //validate Form values
      if(validateForm()){
        //fetch values required for computation
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var amount = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        //generating the dynamic content
        document.getElementById("result").innerHTML="<br>If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"</mark>%\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"

    }
}

//Display the rate selected
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Validate the form values
function validateForm(){
    var principal = document.getElementById("principal").value;
    if(principal ==null || principal <1 )  {
        document.getElementById("principal").focus();
        alert("Enter a positive value");
        return false;
    }
    return true;
}
        