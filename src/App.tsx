import SkillsList from "./Components/SkillsList";
import SkillsImgList from "./Components/SkillsImgList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>My Tech Skills</h1>
          <SkillsList />
        </div>

        <SkillsImgList />
      </main>
      <Footer />
    </>
  );
}

export default App;
