import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import Navbar from './components/shared/Navbar/navbar.component';
import Footer from './components/shared/Footer/footer.component';
import Home from './containers/Home/home.container';

import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={ <Home /> } />
					<Route path="/about" element={ <h1>About</h1> } />
					<Route path="/sports" element={ <h1>Sports Events</h1> } />
					<Route path="/cultural" element={ <h1>Cultural Events</h1> } />
					<Route path="/updates" element={ <h1>Updates</h1> } />
					{/* <Route path="/login" element={ <h1>Login</h1> } /> */}
					{/* <Route path="/register" element={ <h1>Register</h1> } /> */}
					<Route path="/*" element={ <Home /> } />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
