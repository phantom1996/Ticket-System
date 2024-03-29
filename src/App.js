import './App.css';
import Navbars from './components/Navbars';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { Home } from './components/Home';
import CreateAgent from './components/CreateAgent';
import CreateTicket from './components/CreateTicket';
import FetchTicket from './components/FetchTicket';
import TicketState from './context/TicketState';
import AgentState from './context/AgentState';

function App() {
  return (
    <>
      <TicketState>
        <AgentState>
          <Router>
            <Navbars />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/createagent' element={<CreateAgent />} />
              <Route exact path='/createtikcet' element={<CreateTicket />} />
              <Route exact path='/fetchticket' element={<FetchTicket />} />
            </Routes>
          </Router >
        </AgentState>
      </TicketState>
    </>
  );
}

export default App;

