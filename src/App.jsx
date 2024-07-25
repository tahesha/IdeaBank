import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AddIdea from './pages/AddIdea';
import Categories from './pages/Categories';
import Random from './pages/Random';
import './styles.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/add" component={AddIdea} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/random" component={Random} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
