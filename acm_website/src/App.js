import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

import Cover from './Components/Cover';
import OnlineCompiler from "./Components/online-compiler/OnlineCompiler";

import ProblemDetails from './Components/ProblemDetails';

import ProblemList from './Components/ProblemList';

function App() {

	return (
		<Router>   
			<div className="app">
				<Switch>
					<Router path="/compiler">
						<OnlineCompiler />
					</Router>
					<Route path="/problem-list">
						<ProblemList/>
					</Route>
					<Route path="/problem-details">
						<ProblemDetails/>
					</Route>
					<Route path="/">
						<Cover/>
					</Route>
				</Switch>
			</div>
  		</Router>
	);
}

export default App;