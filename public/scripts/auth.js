// Registrarion
document.querySelector('#sign_up')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { name, email, password, passwordRepeat, action, method } =
    e.target;
  const res = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value,
      passwordRepeat: passwordRepeat.value,
    }),
  });
  const data = await res.json();
  if (data.message === 'ok') {
    window.location.assign('/');
  } else {
    document.querySelector('.error').innerHTML = data.message;
  }
});

// Authorization
document.querySelector('#sign_in')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { email, password } = e.target;
  const res = await fetch('/auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({ email: email.value, password: password.value }),
  });
  const data = await res.json();
  if (data.message === 'ok') {
    window.location.assign('/');
  } else {
    document.querySelector('.error').innerHTML = data.message;
  }
});