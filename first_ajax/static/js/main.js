document.addEventListener("DOMContentLoaded", function() {

  const button = document.getElementById('button');
  button.addEventListener('click', function() {
    axios.get('http://intro-ajax-api.herokuapp.com/');

  });

  const pingpong = document.getElementById('pingpong');
  pingpong.addEventListener('click', function() {
    axios.get('http://intro-ajax-api.herokuapp.com/ping')
    .then(function (response) {
      // console.log(response.data);
      const data = document.createElement('section');
      data.innerHTML = response.data;
      document.body.appendChild(data);
    })
  })

});
