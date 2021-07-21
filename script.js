async function getUsers() {
    fetch("https://api.github.com/users/shobanavadivel/repos", {
      method: "GET"
    })
      .then((data) => {
           return data.json();
      })
      .then((users) => loadUsers(users));
  }
  function loadUsers(users) {
    const userList = document.createElement("div");
    userList.className = "user-list";
    users.forEach((user) => {

      const userContainer = document.createElement("div");
      userContainer.className = "user-container";
  
      userContainer.innerHTML = `    
      <div class="text">
        <img class="user-image"  src=${user.owner.avatar_url}> </img>
        <h2 class="user-name"> Task:${user.name}</h2>
        <p class="user-org"> DoneBy: ${user.owner.login}</p>
        <p class="user-id" >Id:${user.id} </p> 
        <p class="lang"> Skill:${user.language}</p>
        <p class="date"> Submited: ${new Date(user.created_at).toDateString()}</p>
        <p class="fork"> Fork Count:${user.forks_count}</p>
        <p class="Star"> Star Count:${user.stargazers_count}</p>
        <p class="user-Link">${user.owner.repos_url} </p>
        
       
        
      </div>  `;
  
      userList.append(userContainer);
    });
  
    document.body.append(userList);
  }
  
  getUsers();


  