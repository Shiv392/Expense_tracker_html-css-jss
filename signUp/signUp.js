const form=document.getElementById('my-form');
const username=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
console.log(username)
console.log(email);
console.log(password);

form.addEventListener('submit',onSubmit);
async function onSubmit(e){
    e.preventDefault();
    console.log('submitted');
    let newuser={
        name:username.value,
        email:email.value,
        password:password.value
    }
    try{
        let response= await axios.post('http://localhost:8000/user/signup',newuser);
        console.log(response);
        alert('Registered Successfully');
        username.value="";
        email.value="";
        password.value="";
    }
    catch(err){
        console.log(`could not post form data`,err);
    }
}