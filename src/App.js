import "./App.css";
import { logIn, logOut } from "./Api";
import { useState } from "react";
function App() {
  const [account, setAccount] = useState("user");
  const [password, setPassword] = useState("password");
  const [user, setUser] = useState(null);
  async function handleLogin() {
    console.log("handleLogin");
    try {
      const ret = await logIn(account, password);
      console.log(ret);
      setUser(ret.user);
    } catch (err) {
      alert(err);
    }
  }
  async function handleLogOut() {
    await logOut();
    setUser(null);
  }
  return (
    <div className="App">
      <h1> THis content is for everyone</h1>
      {user && (
        <>
          <h1>This content only loged use can see it</h1>
          <h2>welcome:{user.name}</h2>
          <p>email:{user.email}</p>
          <p>role:{user.role}</p>

          <button onClick={handleLogOut}>logout</button>
        </>
      )}
      {!user && (
        <div
          style={{
            margin: "auto",
            width: "50%",
            height: "300px",
            border: "3px solid green",
          }}
        >
          <input
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button onClick={handleLogin}>login</button>
        </div>
      )}
    </div>
  );
}

export default App;
