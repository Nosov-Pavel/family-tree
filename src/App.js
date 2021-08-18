
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
  return (
    <div className="App">
      <Son/>
       <Father/>
       <Mother/>
        <GrandFatherN/>
        <GrandMotherN fam={familys}/>
        <GrandFatherZ/>
        <GrandMotherZ fam={familys}/>


    </div>
  );
}

export default App;
