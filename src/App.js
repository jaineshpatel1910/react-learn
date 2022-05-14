import './App.css';
import ClassComponent from './components/classComponent';
import FunctionComponent from './components/functionComponent';
import Greet from './components/greet';
import JsxCompare from './components/jsxCompare';
import StateExample from './components/stateExample';
import Counter from './components/counter';
import UserGreeting from './components/userGreeting';

function App() {
    return (
        <div className="App">
            {/* <FunctionComponent /> */}
            {/* <ClassComponent /> */}
            {/* <JsxCompare /> */}
            {/* <Greet name="Brad" />
            <Greet name="JOI" />
            <Greet name="Preet" /> */}
            {/* <StateExample /> */}
            {/* <Counter /> */}
            <UserGreeting />
        </div>
    );
}

export default App;
