function incomeTax() {
    let value = $("#incometaxinput").val()
    let rate = 25000 // 1% = rate
    if($.isNumeric(value)) { // its a number and not text
        let tax = value/rate
        if(tax>95) {
            tax = 95 // cant be higher
        }
        $("#incometax").text(`${tax.toFixed(2)}`) // percentage in 2 decimals
    }
}

function goodsTax() {
    let regulate_high = $("#taxregulation_high:checked").val()
    let regulate_low = $("#taxregulation_low:checked").val()
    let value = $("#goodstaxinput").val()
    let taxed = 0

    if($.isNumeric(value)) {
        if(regulate_high) { // HIGH TAX
            taxed = value*0.21
        } else if (regulate_low) { // LOW TAX
            taxed = value*0.09
        } else { // REGULAR TAX - no checks since if a disaster occurs we'll use the default
            if(value>=1000) {
                taxed = value*0.21
            } else {
                taxed = value*0.09
            }
        }
    }
    $("#goodstax").text(taxed.toFixed(2))
}

$(function() {
    $("#incometaxinput").blur(incomeTax); // fire on input focus lost
    $("#goodstaxinput").blur(goodsTax); // fire on input focus lost
    $(".taxregulation_checks").change(goodsTax) // fire if selection changed
});
