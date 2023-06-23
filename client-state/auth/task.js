const signin = document.getElementById('signin')
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const btnOut = document.getElementById('btn_out');

function welcomeShow() {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userId.textContent = localStorage.getItem('userId');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.responseType = 'json'
  xhr.send(formData)

  xhr.onload = () => {
    if (xhr.response.success) {
      localStorage.setItem('userId', xhr.response.user_id);
      welcomeShow()
    } else {
      alert('Неверный логин или пароль');
      e.target.reset()
    }
  }
})

btnOut.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
})

if (localStorage.getItem('userId')) welcomeShow();