document.querySelector('#getUserBtn').addEventListener('click', (e) => {
  getUsers('https://jsonplaceholder.typicode.com/users');
  e.target.setAttribute('disabled', 'disabled');
})

function getUsers(url) {
  loaderStart()
  fetch(url)
    .then(response => response.json())
    .then((users) => {
      renderList(users);
    });
    
}

function renderList(usersArr) {

  const list = document.getElementById('user-list');

  for (let key in usersArr) {
    const li = document.createElement('li');
    const userName = document.createElement('span');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const inputName = document.createElement('input');

    li.className = 'user';

    userName.innerText = usersArr[key].name;
    deleteBtn.innerText = 'Delete';
    editBtn.innerText = 'Edit';

    li.setAttribute('id', usersArr[key].id);
    inputName.style.display = 'none';
    userName.setAttribute('id', `name-${usersArr[key].id}`);
    inputName.setAttribute('id', `input-${usersArr[key].id}`);
    editBtn.setAttribute('id', usersArr[key].id);
    deleteBtn.setAttribute('id', usersArr[key].id);

    li.appendChild(inputName);
    li.appendChild(userName);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    deleteBtn.addEventListener('click', deleteUser);
    editBtn.addEventListener('click', editUser);
  };
  loaderEnd();
}

function deleteUser(e) {
  loaderStart()
  fetch(`https://jsonplaceholder.typicode.com/users/${e.target.id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
      alert('User is deleted');
      loaderEnd()
    })
  document.getElementById(`${e.target.id}`).style.display = 'none';
  
}

function editUser(e) {
    
  const nameValue = document.getElementById(`name-${e.target.id}`).innerHTML;
  const inputName = document.getElementById(`input-${e.target.id}`);
  
  document.getElementById(`name-${e.target.id}`).style.display = 'none';
  inputName.style.display = 'inline';
  inputName.value = nameValue;
  
  const saveBtn = document.createElement('button');
  saveBtn.innerHTML = 'Save';
  saveBtn.setAttribute( 'id', `${e.target.id}`);
  
  document.getElementById(`${e.target.id}`).appendChild(saveBtn);
  saveBtn.addEventListener('click', userSave);
  
}

function userSave(e) {
  loaderStart()
  let newNameValue = document.getElementById(`input-${e.target.id}`).value;
  const userName = document.getElementById(`name-${e.target.id}`);
  userName.innerHTML = newNameValue;
  userName.style.display = 'inline';
  document.getElementById(`input-${e.target.id}`).style.display = 'none';
  document.getElementById(`name-${e.target.id}`).innerHTML = newNameValue;

  e.target.remove();
  
  fetch(`https://jsonplaceholder.typicode.com/user/${e.target.id}`, {
    method: 'PUT',
    body: JSON.stringify({name: `${newNameValue}`}),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(()=>loaderEnd());
}


function loaderStart() {
  document.getElementById('loader').style.display = 'block';
}
function loaderEnd() {
  document.getElementById('loader').style.display = 'none';
}
