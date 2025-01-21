import { useState } from "react";
import SkillsList from "./Components/SkillsList";
import SkillsImgList from "./Components/SkillsImgList";
import "./App.css";
import Modal from "./Components/Modal";
import ModalDescription from "./Components/ModalDescription";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <header>
        <button onClick={() => setModal(true)}> 112234</button>
      </header>
      <main>
        <div>
          <h1>My Tech Skills</h1>
          <SkillsList />
        </div>

        <SkillsImgList />
      </main>
      <footer>derf</footer>
      {modal && (
        <Modal description="description" onClose={() => setModal(false)}>
          <ModalDescription />
        </Modal>
      )}
    </>
  );
}

export default App;
