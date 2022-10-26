
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var today = new Date();
    var actual_year = parseInt(today.getFullYear()) + parseInt(years);
    if (principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
        document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br>
        at an interest rate of <mark>${rate}%</mark>,<br> You will receive an amount of 
        <mark>${interest}</mark>,<br> in the year <mark>${actual_year}</mark><br>`;
    }

}

function slider_update()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("display_rate");
    output.innerHTML = slider.value;
}
