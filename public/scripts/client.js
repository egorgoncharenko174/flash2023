const body = document.querySelector('body');
const delBtn = document.querySelector('.DelBtn')
const delBtn2 = document.querySelector('.DelBtn2')
const delBtn3 = document.querySelector('.DelBtn3')

if (delBtn) {
  delBtn.addEventListener('click', (e) => {
    delBtn.remove()
  })
}
if (delBtn2) {
  delBtn.addEventListener('click', (e) => {
    delBtn.remove()
  })
}
if (delBtn3) {
  delBtn.addEventListener('click', (e) => {
    delBtn.remove()
  })
}


if (body) {
  body.addEventListener('click', async (e) => {
    if (e.target.classList.contains('nextBtn')) {
      e.preventDefault();
      const questionId = e.target.getAttribute('data-Questionid');
      const temaid = e.target.getAttribute('data-temaId');
      console.log(temaid, questionId);

      const res = await fetch(
        `/topic/${temaid}/question/${Number(questionId) + 1}`
      );
      const { html } = await res.json();

      e.target.parentNode.parentNode.insertAdjacentHTML('afterend', html);
      e.target.parentNode.parentNode.remove();
    }
  });
}

body.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(window.location.href.slice(28)[0]);
  // window.location.href.slice(0, 5)
  // const arr = e.target.dataset;
  const id = e.target.getAttribute('data-checkId');
  console.log(id);
  const { method, answerInput } = e.target;
  console.log(method);
  const questionId = window.location.href.slice(39);
  const temaid = window.location.href.slice(28)[0];
  // console.log(temaid, questionId);
  // console.log(arr);

  const res = await fetch(
    `/topic/${Number(temaid)}/question/${Number(questionId) + 1}`,
    {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answerInput: answerInput.value,
        id,
      }),
    },
  );
  const data = await res.json();
  // console.log(data, 'ответ дата');
  document.querySelector('.otvet').innerHTML = data.otvet;
});
