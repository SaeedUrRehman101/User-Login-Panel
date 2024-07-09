$(document).ready(function () {

    // For Name;

    $("#name").on('keyup', function () {
        let username = $(this).val();
        let nameRE = /^[a-z\s]{3,15}$/;
        if (!nameRE.test(username)) {
            $(this).css({
                "border": "1px solid red",
                "border-radius": "2rem"
            });
            $(this).next("small").html("Please Enter Your Full Name!").css({
                "color": "red",
                "font-weight": "bold",
                // "margin-bottom": ".7rem"

            })
        }
        else {
            $(this).css({
                "border": "1px solid #4e34b6",
                "border-radius": "2rem"
            })
            $(this).next("small").html(" ").css({
                "margin-bottom" : "1rem"
            });
        }
    });

    // For Email;
    $("#email").on('keyup', function () {
        let useremail = $(this).val();
        let emailRE = /^[\w]{3,17}[@][a-z]{5,8}[.][a-z]{3}$/;
        if (!emailRE.test(useremail)) {
            $(this).css({
                "border": "1px solid red",
                "border-radius": "2rem"
            })
            $(this).next("small").html("Please Enter the Valid Pattern Of your Email!").css({
                "font-weight": "bold",
                "color": "red",
                // "margin-bottom": ".7rem"
            })
        }
        else {
            $(this).css({
                "border": "1px solid #4e34b6",
                "border-radius": "2rem"
            })
            $(this).next("small").html(" ").css({
                "margin-bottom" : "1rem"
            });
        }
    })

    //For Number;

    $("#phone").on('keyup', function () {
        let userphone = $(this).val();
        let phoneRE = /^[\d]{11,11}$/;
        if (!phoneRE.test(userphone)) {
            $(this).css({
                "border": "1px solid red",
                "border-radius": "2rem"
            })
            $(this).next("small").html("Please Enter your Correct Phone Number").css({
                "font-weight": "bold",
                "color": "red",
                // "margin-bottom": ".7rem"
            })
        }
        else {
            $(this).css({
                "border": "1px solid #4e34b6",
                "border-radius": "2rem"
            })
            $(this).next("small").html(" ").css({
                "margin-bottom" : "1rem"
            });
        }
    });

    //For Password
    $("#password").on('keyup', function () {
        let userpassword = $(this).val();
        let passwordRE = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[@$&%#*])[A-Z,a-z,\d,@$&%#*]{8,15}$/;
        // let passwordRE=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%&*])[A-Za-z,\d,!@#$%&*]{8,15}$/;
        if (!passwordRE.test(userpassword)) {
            $(this).css({
                "border": "1px solid red",
                "border-radius": "2rem"
            })
            $(this).next("small").html("Please Enter the Valid Pattern fo Password ABCabc@1223!").css({
                "font-weight": "bold",
                "color": "red",
                // "margin-bottom": ".7rem"
            })
        }
        else {
            $(this).css({
                "border": "1px solid #4e34b6",
                "border-radius": "2rem"
            })
            $(this).next("small").html(" ").css({
                "margin-bottom" : "1rem"
            });
        }
    });

    //For Confirm Password
    $("#confirm-password").on('keyup', function () {
        let userconfirmpass = $(this).val();
        let password = $("#password").val();
        if (!(userconfirmpass == password)) {
            $(this).css({
                "border": "1px solid red",
                "border-radius": "2rem"
            })
            $(this).next("small").html("Your Password doesn't Match!").css({
                "font-weight": "bold",
                "color": "red",
                // "margin-bottom": ".7rem"
            })
        }
        else {
            $(this).css({
                "border": "1px solid #4e34b6",
                "border-radius": "2rem"
            })
            $(this).next("small").html(" ").css({
                "margin-bottom" : "1rem"
            });
        }
    });

    // For EmptyInput
    function emptyinput(id) {
        if ($(id).val() == "") {
            $(id).css({
                "border": "1px solid red",
                "border-radius": "2rem"
            })
            $(id).next("small").html("Please fill Out this Field!").css({
                "font-weight": "bold",
                "color": "red",
                // "margin-bottom": ".7rem"
                "margin-bootom" : "1rem"
            })
        }
    };

    $("#register").on("click", function () {
        let username = $('#name').val();
        let nameRE = /^[a-z\s]{3,15}$/;
        let useremail = $('#email').val();
        let emailRE = /^[\w]{3,17}[@][a-z]{5,8}[.][a-z]{3}$/;
        let userphone = $('#phone').val();
        let phoneRE = /^[\d]{11,11}$/;
        let password = $('#password').val();
        let passwordRE = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[@$&%#*])[A-Z,a-z,\d,@$&%#*]{8,15}$/;
        let userconfirmpass = $('#confirm-password').val();

        if (!(username && useremail && userphone && password && userconfirmpass)) {
            emptyinput("#name");
            emptyinput("#email")
            emptyinput("#phone")
            emptyinput("#password")
            emptyinput("#confirm-password")
        }

        // else if ((!nameRE.test(username)) && (!emailRE.test(useremail)) && (!phoneRE.test(userphone)) && (!passwordRE.test(password)) && (userconfirmpass != password)) {
        //     alert("Invalid Data Please follow the Valid Pattern!") "The code which our teacher writed in the class"
        // }

        else if (!((nameRE.test(username)) && (emailRE.test(useremail)) && (phoneRE.test(userphone)) && (passwordRE.test(password)) && (userconfirmpass == password) )) {
            alert("Invalid Data Please follow the Valid Pattern!")
        }

        else if (username && useremail && password && userconfirmpass) {
            // let data=localStorage.getItem("details")
            // console.log(data);
            if (localStorage.getItem("details") == null) {
                localStorage.setItem("details", "[]");
            };
            let previewdta = JSON.parse(localStorage.getItem('details'))
            // console.log(previewdta);
            let objectData = {
                name: username,
                email: useremail,
                password: password,
                phone: userphone
            }
            previewdta.push(objectData);
            // console.log(previewdta);
            localStorage.setItem('details', JSON.stringify(previewdta));
            alert('Data has been submited Succesfully.....')
            window.location.href=('../login.html')

        }

    });

        $("#login").on("click",function(){
            let useremail = $('#email').val();
            let emailRE = /^[\w]{3,17}[@][a-z]{5,8}[.][a-z]{3}$/;
            let password = $('#password').val();
            let passwordRE = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[@$&%#*])[A-Z,a-z,\d,@$&%#*]{8,15}$/;
    
            if (!(useremail && password)){
                emptyinput("#email");
                emptyinput("#password");
            }

            else if ((!emailRE.test(useremail)) || (!passwordRE.test(password))){
                alert("Invalid data Please follow the valid data")
            }

            else if (useremail && password){
                let userDetail=JSON.parse(localStorage.getItem("details"));
                // console.log(userDetail);
                if(localStorage.getItem('details')==null){
                    alert("Register Your Acount First");
                    window.location.href=("index.html");
                }
                else{
                    let x=false;
                    for(let index in userDetail){
                        if(userDetail[index].email==useremail && userDetail[index].password==password){
                            alert("Logedin successfully");
                            window.location.href="dashboard.html?userId="+index;
                            x=true;
                        }
                    }

                    if(!x){
                        alert("Data doesn't Match")
                    }
                    
                }
            }

        })

// For Panel

let location=window.location.href;
// console.log(location);

let getID=new URL(location);
// console.log(getID);

let UserID=getID.searchParams.get("userId")
// console.log(UserID);

let UserData=JSON.parse(localStorage.getItem("details"));
// console.log(UserData);

for (let index in UserData){
    // console.log(UserData)
    // console.log(index)
    if (UserID==index){
        $(".username").html(UserData[index].name);
        $("#name").val(UserData[index].name);
        $("#email").val(UserData[index].email);
        $("#password").val(UserData[index].password);
        $("#phone").val(UserData[index].phone);

    }
}

$(".update").on("click" ,function(){
    let uName=$("#name").val();
    let uEmail=$("#email").val();
    let uPassword=$("#password").val();
    let uPhone=$("#phone").val();

    for (let index in UserData){


        if (UserData[index].name==uName && UserData[index].email==uEmail && UserData[index].password==uPassword && UserData[index].phone==uPhone){
            alert("You already set this Data");
            window.location.href="dashboard.html?userId="+UserID;
        }

       else if (UserID==index){

            UserData[index].name=uName;
            UserData[index].email=uEmail;
            UserData[index].password=uPassword;
            UserData[index].phone=uPhone;

            localStorage.setItem("details",JSON.stringify(UserData));
            console.log(UserData);
            alert("Your Data Has been Updated Successfully....");
            window.location.href="dashboard.html?userId="+UserID;

        }
    }
})


// Logout Button

$("#logout").on('click',function(){

    alert("Loged out Successfully...")
    window.location.href="login.html"

})

// Delete Button

$("#delete").on('click',function(){

    for (let index in UserData){
        if (UserID==index){
            UserData.splice(index,1);
            localStorage.setItem("details",JSON.stringify(UserData));
            alert("Acount Deleted Sucessfully...");
            window.location.href="index.html";
        }
    }

})

})