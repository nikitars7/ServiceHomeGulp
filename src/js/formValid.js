export const formValidate = () => {
   const form = document.querySelector('.subscribe__form');
   const errorMessageEmail = document.createElement('span');
   const formButton = document.querySelector('.subscribe__button');
   const inputEmail = form.elements[0];
   const formItemEmail = document.getElementById('email');
   inputEmail.addEventListener('change',checkEmailValue)
   form.addEventListener('submit',(e) => {
     e.preventDefault();
     if(!inputEmail.classList.contains('green')){
      formButton.disabled = 'true';
       invalidEmail();
   }
   })
   function checkEmailValue (e){
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
     if(!re.test(String(e.target.value).toLowerCase())){
     invalidEmail();
     if(inputEmail.classList.contains('green')){
       inputEmail.classList.remove('green')
     }
     }else{
        inputEmail.classList.remove('error')
         inputEmail.classList.add('green')
         if(formItemEmail.contains(errorMessageEmail)){
          formItemEmail.removeChild(errorMessageEmail)
        }
     }
    }

    inputEmail.addEventListener('blur',(event)=>{
      if(event.target.value.length === 0){
          invalidEmail();
         formButton.disabled = 'true';
      }
      if(inputEmail.classList.contains('green')){
         formButton.removeAttribute('disabled')
      }
      })

      function invalidEmail (){
         inputEmail.classList.add('error')
        if(!formItemEmail.contains(errorMessageEmail)){
             errorMessageEmail.innerHTML = 'Invalid email';
               formItemEmail.append(errorMessageEmail)
            }
      }
}