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

  const count = document.getElementById('count');
  count.addEventListener('click', function() {
    axios.get('http://intro-ajax-api.herokuapp.com/count', {
      params: {amount: 0} // Amount ranges from 1 to 5
    })
    .then(function(response) {
      const data = document.createElement('section');
      data.innerHTML = response.data;
      document.body.appendChild(data);
    })
  });

  const time = document.getElementById('time');
  time.addEventListener('click', function() {
    axios.get('http://intro-ajax-api.herokuapp.com/time', {
      params: {timezone: 'America/Mexico_City'}
    })
    .then(function(response) {
      const data = document.createElement('section');
      data.innerHTML = response.data;
      document.body.appendChild(data);
    })
  })

  const car = document.getElementById('car');
  car.addEventListener('click', function() {
    axios.get('http://intro-ajax-api.herokuapp.com/a_car')
    .then(function(response) {
      const data = document.createElement('section');
      const list = document.createElement('list');
      list.id = "list-of-cars";
      list.innerHTML = response.data;
      document.body.appendChild(list);
    })
  })
});
