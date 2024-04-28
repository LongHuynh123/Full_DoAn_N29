
function login(){
    var nguoidung = document.formlogin.user.value;
    var matkhau= document.formlogin.pass.value;

    if(nguoidung == "" || matkhau == ""){
        alert('Vui lòng nhập thông tin' )
        return;
    }




    var co = confirm('Bạn muốn hiện mật khẩu' );


        if(co=1){
           confirm('mat khau:\n'+ matkhau);
        }


}