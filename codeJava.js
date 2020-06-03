function showConfirmResult(){
    var blnConfirm = true;
    blnConfirm = confirm("are you ready ?");
    if (blnConfirm == true) {
        document.writeln("Press Confirm");
    }else{
        document.writeln("Press Cancel")
    }
}
 
function InputValue(){
    var t = prompt("nhập tuổi của bạn ","")
  return t
}
    
