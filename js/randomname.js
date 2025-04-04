const names = ["1","2","vadim"]
const surnames = ["a","b","c"]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function randomname() {
    let name = names[getRndInteger(0,names.length)]
    let surname = surnames[getRndInteger(0,surnames.length)]
    console.log(name,surname)
    let full = `<b>${name} ${surname}</b>`
    $("#name").html(full)
}