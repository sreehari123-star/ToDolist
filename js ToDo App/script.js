let username = document.getElementById("user");
let error = document.getElementById("error");

function validate(){

    if(username.value == ""){

        alert("** Fields cannot be blank!  Please enter valid User Id and Password !!");
        return false;
    }

    else if(username.value == "admin"){
            error.style.color="green";
            error.innerHTML="Successfully Validated !!";
            username.style.border="2px solid green";
            return true;
    }
    else{
            error.style.color="red";
            error.innerHTML="** Please enter User Id as : 'admin' !!";
            username.style.border="2px solid red";
           return false;
    }
    
}

let password = document.getElementById("password");
let pswd = document.getElementById("pswd");

function pass(){

    if(password.value == ""){

        alert(" ** Fields cannot be blank!  Please enter valid User Id and Password !!");
        return false;
    }

    else if(password.value == "12345"){

            pswd.style.color="green";
            pswd.innerHTML="Successfully Validated !!";
            password.style.border="2px solid green";
            return true;
    }

    else{

            pswd.style.color="red";
            pswd.innerHTML="** Please enter password as : '12345' !!";
            password.style.border="2px solid red";
            return false;
    }
}



fetch("data.json").then(
    res=>
    res.json().then(
        data=>{
            console.log(data);
            if(data.length >0){
                var temp = "";
                data.forEach((u)=>{
                    temp+="<tr>";
                    temp+="<td>" + u.userId+"</td>";
                    temp+="<td>" + u.id+"</td>";
                    temp+="<td>" + u.title+"</td>";
                    temp+="<td>" + u.completed+"</td>";
                })
                document.getElementById("data").innerHTML=temp;
            }
        }                              
    )
)








