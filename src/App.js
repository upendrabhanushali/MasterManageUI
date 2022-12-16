import './App.css';
import UpdatePanelLevel from './UpdatePanelLevel'
import NavBar from './UI/NavBar';
import DeletePanelLevel from './DeletePanelLevel';

function App() {
  return (
    <div>
      <NavBar adminName={'Rushikesh Sonone'} roleName={'Admin'}/>
      <DeletePanelLevel/>
    </div>
  );
}

export default App;


