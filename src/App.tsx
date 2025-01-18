// import { useState } from "react";
import SkillsList from "./Components/SkillsList";
import SkillsImgList from "./Components/SkillsImgList";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>My Tech Skills</h1>
        <SkillsList />
      </div>

      <SkillsImgList />
    </>
  );
}

export default App;
