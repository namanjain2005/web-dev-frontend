const input = document.querySelector('.Email__form__input')
/* console.log(input) */

const EmailSumbitBtn = document.querySelector('.email__Button')
/* console.log(EmailSumbitBtn) */

const loginEmail = document.querySelector('.isLoggedin')
/* console.log(loginEmail)*/

function validateEmail(email) {
    //regex and test for checking maillike pattern 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailPattern.test(email);
}

EmailSumbitBtn.addEventListener('click' ,(e)=>{
    e.preventDefault();
    if(validateEmail(input.value)){
        loginEmail.innerHTML = input.value + ' is logged in';
    }else{
        loginEmail.innerHTML = 'Logged in Fail';
    }
})



/* const dropdownBtn = document.querySelector('.dropdownBtn')
console.log(dropdownBtn)

const dropdown = document.querySelector('.dropdown')
console.log(dropdown)

dropdownBtn.addEventListener('mouseover',()=>{
   dropdown.style.display = 'block'
})

dropdown.addEventListener('mouseout',()=>{
    dropdown.style.display = 'none'
 }) */
