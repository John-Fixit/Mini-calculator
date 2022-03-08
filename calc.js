document.getElementById(inputext)
let calculate=(num)=>{
    inputext.value=inputext.value+num
}
function equals(){
    inputext.value= eval(inputext.value)
}
function clr(){
    inputext.value=''
}
function del(){
    inputext.value=inputext.value.slice(0,-1)
}