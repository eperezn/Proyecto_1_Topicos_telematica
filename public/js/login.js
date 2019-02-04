$(document).ready(function() {
    $("#login").click(function(){
    
        $.post("/users/login" ,{ username: $("#username").val(), password: $("#password").val()}).
        done(function(res) {
          if(res.status === "success"){
            window.location.assign('/users/principalPage')
          }else{
            $("#failed").show();
          }
    
          })
        error: (error) => {
            console.log(JSON.stringify(error));
    }
    
      });
    });