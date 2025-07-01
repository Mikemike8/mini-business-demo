import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Success Stories', href: '/success-stories' },
        { name: 'Contact', href: '/contact' },
    ];
    const isActive = (href) => location.pathname === href;
    return (_jsx("header", { className: "bg-black text-white shadow-lg relative z-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center py-4", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-3", children: [_jsx(Scale, { className: "h-8 w-8 text-gray-300" }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "Reesor & Associates" }), _jsx("p", { className: "text-xs text-gray-300 tracking-wide", children: "COMMERCIAL DEBT RECOVERY" })] })] }), _jsx("nav", { className: "hidden md:flex space-x-8", children: navigation.map((item) => (_jsx(Link, { to: item.href, className: `px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(item.href)
                                    ? 'text-white border-b-2 border-gray-300'
                                    : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-400'}`, children: item.name }, item.name))) }), _jsx("div", { className: "hidden md:flex", children: _jsx(Link, { to: "/contact", className: "bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 text-sm font-medium border border-gray-600 transition-colors duration-200", children: "Get Free Consultation" }) }), _jsx("div", { className: "md:hidden", children: _jsx("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "text-gray-300 hover:text-white transition-colors duration-200", children: isMenuOpen ? (_jsx(X, { className: "h-6 w-6" })) : (_jsx(Menu, { className: "h-6 w-6" })) }) })] }), isMenuOpen && (_jsx("div", { className: "md:hidden border-t border-gray-800", children: _jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1", children: [navigation.map((item) => (_jsx(Link, { to: item.href, className: `block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive(item.href)
                                    ? 'text-white bg-gray-800'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800'}`, onClick: () => setIsMenuOpen(false), children: item.name }, item.name))), _jsx(Link, { to: "/contact", className: "block px-3 py-2 text-base font-medium bg-gray-800 text-white border border-gray-600 text-center mt-4", onClick: () => setIsMenuOpen(false), children: "Get Free Consultation" })] }) }))] }) }));
};
export default Header;
