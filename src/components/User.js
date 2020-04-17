import axios from "axios";

const User = async () => {
  const res = await axios.get("https://randomuser.me/api");
  const user = res.data.results[0];
  console.log(user);
  const template = `<div class="card">
  
  <img src="${user.picture.medium}" alt="profile"/>
  <div class="card-body"> 
  
  <h1>${user.name.title} ${user.name.first} ${user.name.last}</h1>
  </div>
  <div>
    `;
  return template;
};

export default User;
