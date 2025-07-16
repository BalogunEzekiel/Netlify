function sayHello() {
  fetch('https://YOUR-BACKEND-URL.onrender.com/hello')
    .then(response => response.text())
    .then(data => {
      document.getElementById('message').innerText = data;
    })
    .catch(error => {
      document.getElementById('message').innerText = "Oops! Something went wrong.";
      console.error(error);
    });
}

