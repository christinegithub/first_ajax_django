document.addEventListener("DOMContentLoaded", function() {

  const button = document.getElementById('button');
  button.addEventListener('click', function() {
    axios.get('http://intro-ajax-api.herokuapp.com/');

  });

  const pingpong = document.getElementById('pingpong');
  pingpong.addEventListener('click', function() {
    axios.get('http://intro-ajax-api.herokuapp.com/pong')
    .then(function (response) {
      console.log(response.data);
      const data = document.createElement('section');
      data.innerHTML = response.data;
      document.body.appendChild(data);
    }).catch(function(response) {
        const error = document.createElement('section');
        error.innerText = "Sorry, I'll try harder next time";
        document.body.appendChild(error);
      }).then(function(response) {
        console.log("Hey the request finised!");
    });
  });
});
