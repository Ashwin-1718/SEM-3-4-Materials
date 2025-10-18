import React, { useEffect, useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/User') 
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    addUser();
  };

  const addUser = () => {
    if (!name || !password || !email) {  
      alert("Please fill all fields!");
      return;
    }
    
    axios.post('http://localhost:5000/Users', { Name: name, Email: email, Password: password })
      .then(() => {
        setUsers([...users, { name, email, password }]);
        setName('');
        setPassword('');
        setEmail('');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>User List</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              Name: {user.name}, Email: {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserForm;