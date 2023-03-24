const body = document.querySelector('body');
if (body) {
  body.addEventListener('click', async (e) => {
    if (e.target.classList.contains('nextBtn')) {
      e.preventDefault();
      const questionId = e.target.getAttribute('data-Questionid');
      const temaid = e.target.getAttribute('data-temaId');
      

      const res = await fetch(`/topic/${temaid}/question/${Number(questionId) + 1}`);
      const {html} = await res.json()

      

      e.target.parentNode.parentNode.insertAdjacentHTML('afterend', html);
      e.target.parentNode.parentNode.remove();
    }
  });
}
