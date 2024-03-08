const email = document.getElementById('email');
const submit = document.getElementById('submit');
const messageError = document.getElementById('message-error');
const emailUser = document.getElementById('email-user');
const backForm = document.getElementById('back-form');

const validEmail = (e)=>{
    e.preventDefault();

    const emailValue = email.value.trim();

    if(!emailValue || !emailValue.includes("@") || !emailValue.includes(".com")){
        messageError.textContent="Valid email required";
        messageError.classList.add('messanger-error');
        email.placeholder = "ash#lorecompany.com";
        email.classList.add('placeholder-error');
    }else{
        const card = document.querySelector('.card');
        card.style.display="none";

        const cardSub = document.querySelector('.card-sub');
        cardSub.style.display="flex";
        emailUser.textContent = `${email.value}`;

        const back = ()=>{
            card.style.display="block";
            cardSub.style.display="none";
            email.value = "";
        }

        backForm.addEventListener('click', back);

        messageError.classList.remove('messanger-error');
        messageError.style.display="none"
        email.classList.remove('placeholder-error');
    }
}
submit.addEventListener('click', validEmail);