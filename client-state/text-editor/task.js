const textArea = document.getElementById('editor');
const btn = document.getElementById('btn');

textArea.addEventListener('input', () => {
  localStorage.setItem('content', textArea.value);
});

btn.addEventListener('click', () => {
  textArea.value = '';
  localStorage.removeItem('content');
})

textArea.value = localStorage.getItem('content');