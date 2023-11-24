
//JEDDY ODUOR AWUOR ST211-0027/2022
//AKALWA REBECCA SHIRIEVO N. SCT211-0538/2022
//NYAGA JOY CHRISTINE SCT211-0572/2022


var submit = document.querySelector('#submit');
var newTask = document.querySelector('#task');

submit.disabled = true;

newTask.addEventListener('input', function() {
  submit.disabled = !newTask.value;
});

document.querySelector('form').addEventListener('submit', function() {
  var task = newTask.value;

  var li = document.createElement('li');
  li.innerText = task;
  document.querySelector('#mytasks').appendChild(li);

  newTask.value = '';
  submit.disabled = true;

event.preventDefault();
});
