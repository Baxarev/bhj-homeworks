const form = document.getElementById('form');
const progress = document.getElementById('progress');
let load = false;

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('loadstart', () => {
    let timer = setInterval(() => {
      progress.value++
      if (+progress.value === 95 || load) clearInterval(timer)
    }, 100)
  })
  xhr.addEventListener('load', () => {
    load = true;
    let timer = setInterval(() => {
      progress.value++
      if (progress.value === 1) clearInterval(timer)
    }, 10)
  })
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  const formData = new FormData(form)
  xhr.send(formData)
})