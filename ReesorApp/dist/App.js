import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import SuccessStories from './pages/SuccessStories';
import './App.css';
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen bg-white flex flex-col", children: [_jsx(Header, {}), _jsx("main", { className: "flex-grow", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/services", element: _jsx(Services, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/legal", element: _jsx(Legal, {}) }), _jsx(Route, { path: "/success-stories", element: _jsx(SuccessStories, {}) })] }) }), _jsx(Footer, {})] }) }));
}
export default App;
