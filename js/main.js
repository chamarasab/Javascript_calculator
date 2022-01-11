let fn = 0;
let sn = 0;
let operator = '';
function getFn(number,op) {
    fn = parseInt(number);
    operator = op;
    document.getElementById("txtNumber").value = "";
    //alert(fn);
}
function getSum(number) {
    sn = parseInt(number);
    if (operator == '+') {
        document.getElementById("txtNumber").value = fn+sn;
    } else if (operator == '-') {
        document.getElementById("txtNumber").value = fn-sn;
    } else if (operator == '*') {
        document.getElementById("txtNumber").value = fn*sn;
    } else if (operator == '/') {
        document.getElementById("txtNumber").value = fn/sn;
    } else {
        document.getElementById("txtNumber").value = "Invalid input";
    }


}