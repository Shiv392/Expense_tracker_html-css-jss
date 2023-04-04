const form=document.getElementById('loginform');
const email=document.getElementById('loginemail');
const password=document.getElementById('loginpassword');
console.log(form);
console.log(email);
console.log(password);
let errormsg=document.getElementById('errormsg');
console.log(passwordlogo);
passwordlogo.addEventListener('click',()=>{
    password.type="text";
})

form.addEventListener('submit',onSubmit);

async function onSubmit(e){
    e.preventDefault();
    let loginuser={
        email:email.value,
        password:password.value
    }
    let response=await axios.post('http://localhost:8000/user/login',loginuser);
    // console.log(response);
    if(response.status=='200'){
        alert('You Are Logged In')
    }
    else{
        console.log(response.error);
      errormsg.innerText=`Email Or Password Is Incorrect`
    }
   
    email.value="";
    password.value="";
}