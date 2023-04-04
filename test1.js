function login(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
      window.location.href = 'admin.html';
    } else {
      alert('Неверный логин или пароль. Попробуйте еще раз.');
    }
  }