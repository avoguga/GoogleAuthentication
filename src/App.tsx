import { signInWithGoogle } from "./Firebase";

function App() {
  const aa: any = localStorage.getItem("profilePic");
  const bb: any = localStorage.getItem("name");
  const cc: any = localStorage.getItem("email");

  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Sign In</button>

      <h1>{bb}</h1>
      <h1>{cc}</h1>
      <img src={aa} alt="" />
    </div>
  );
}

export default App;
