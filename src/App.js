
import './App.css';
import Services from './pages/Services/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import PhotoGallery from './pages/PhotoGallery/PhotoGallery';
import Error from './pages/Error/Error';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';




function App() {
	return (
		<div className="App">
			<Router>

				<Banner></Banner>
				<Switch>

					<Route exact path="/home">
						<Home></Home>
					</Route>
					<Route exact path="/services">
						<Services></Services>
					</Route>
					<Route exact path="/about">
						<About></About>
					</Route>
					<Route exact path="/photoGallery">
						<PhotoGallery></PhotoGallery>
					</Route>
					<Route exact path="*">
						<Error></Error>
					</Route>
					<Route exact path="/">
						<Home></Home>
					</Route>

				</Switch>

				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
