$(document).ready(function() {
    $("#register").click(function(){
        $.post("/users/registerUser", { username: $("#username").val(),
         email: $("#email").val(),
         password: $("#password").val(),}).done(function(res) {
             console.log($("#username").val());
          if(res.status === "success"){
            window.location.assign('/users/authenticateUser')
          }else{
            $("#failed").show();
          }
          })
        
        error: (error) => {
          console.log(JSON.stringify(error));
        }
      });
    });