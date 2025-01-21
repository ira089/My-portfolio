// import { useContext } from "react";
// import { ModalContext } from "./context/ModalContext";
import SkillsList from "./Components/SkillsList";
import SkillsImgList from "./Components/SkillsImgList";
// import Modal from "./Components/Modal";
// import ModalDescription from "./Components/ModalDescription";
import "./App.css";

function App() {
  return (
    <>
      <header>{/* <button onClick={open}> 112234</button> */}</header>
      <main>
        <div>
          <h1>My Tech Skills</h1>
          <SkillsList />
        </div>

        <SkillsImgList />
      </main>
      <footer>derf</footer>
    </>
  );
}

export default App;
