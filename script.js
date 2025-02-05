function beforesubmit(){
    let inputdate = document.querySelector(".inputdate")
    let outputdate = document.querySelector(".outputdate")
    console.log(inputdate.value)
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN")
    outputdate.value = formattedDate
}