function calculate()
{
    var call = parseFloat(document.getElementById("user_call").value);
    var sms = parseFloat(document.getElementById("user_sms").value);
    var callprice = 0.00;
    var smsprice = 0.00;

    if(call <= 50)
        callprice = 0.5 * call;
    else if(call <= 150)
        callprice = (0.5 * 50) + (0.7 * (call - 50));
    else if(call <= 300)
        callprice = (0.5 * 50) + (0.7 * 100) + (0.85 * (call - 150));
    else
        callprice = (0.5 * 50) + (0.7 * 100) + (0.85 * 150) + (0.95 * (call - 300));

    if(sms <= 50)
        smsprice = 0.00;
    else if(sms <= 200)
        smsprice = 0.25 * (sms - 50);
    else if(sms <= 400)
        smsprice = (0.25 * 150) + (0.4 * (sms - 200));
    else
        smsprice = (0.25 * 150) + (0.4 * 200) + (0.45 * (sms - 400));

    alert("Charges for call: "+ callprice +"\nCharges for SMS: "+ smsprice +"\nTotal Charges: "+ (callprice+smsprice));
}
