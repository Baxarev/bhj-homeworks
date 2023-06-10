const xhr = new XMLHttpRequest;
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers')

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.addEventListener('load', () => {
  pollTitle.textContent = xhr.response.data.title;
  xhr.response.data.answers.forEach(i => {
    const btn = document.createElement('button');
    btn.classList.add('poll__answer');
    btn.textContent = i;
    btn.onclick = (e) => {
      const xhrPost = new XMLHttpRequest;
      const pollAnswersColl = document.querySelectorAll('.poll__answer')
      xhrPost.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
      xhrPost.responseType = 'json';
      xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
      xhrPost.send( `vote=${xhr.response.id}&answer=${Array.from(pollAnswersColl).indexOf(e.target)}` );
      alert('Спасибо, ваш голос засчитан!');
      pollAnswersColl.forEach(i => i.remove());
      xhrPost.addEventListener('load', () => {
        xhrPost.response.stat.forEach(i => {
          const p = document.createElement('p');
          p.innerHTML = `${i.answer}: <b>${i.votes}%</b>`;
          pollAnswers.append(p)
        })
      })
    };
    pollAnswers.append(btn);
  })
})
xhr.send();


