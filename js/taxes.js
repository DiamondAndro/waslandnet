function incomeTax() {
    let val = $("#incometaxinput").val()
    let rate = 25000 // 1% = rate
    if($.isNumeric(val)) { // its a number and not text
        let tax = val/rate
        if(tax>95) {
            tax = 95 // cant be higher
        }
        $("#incometax").text(`${tax.toFixed(2)}%`) // percentage in 2 decimals
    }
}

$(function() {
    $("#incometaxinput").blur(incomeTax);
});