
import './App.css';
import Son from "./Son";
import Father from "./Father";
import Mother from "./Mother";
import GrandFatherN from "./GrandFatherN";
import GrandMotherN from "./GrandMotherN";
import GrandFatherZ from "./GrandFatherZ";
import GrandMotherZ from "./GrandMotherZ";

function App() {
    const familys = 'Grand Mother';
    const familysF = 'Grand Father';
  return (
    <div className="App">
      <Son/>
       <Father/>
       <Mother/>
        <GrandFatherN famF={familysF}/>
        <GrandMotherN fam={familys}/>
        <GrandFatherZ famF={familysF}/>
        <GrandMotherZ fam={familys}/>


    </div>
  );
}

export default App;
