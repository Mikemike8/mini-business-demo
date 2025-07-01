import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
const NewsletterSubscription = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }
        setStatus('loading');
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus('success');
            setMessage('Thank you for subscribing! You\'ll receive our debt collection insights and updates.');
            setEmail('');
        }
        catch (error) {
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };
    const resetStatus = () => {
        setStatus('idle');
        setMessage('');
    };
    if (status === 'success') {
        return (_jsx("section", { className: "py-16 bg-black text-white", children: _jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: _jsxs("div", { className: "bg-gray-900 rounded-lg p-8 border border-gray-800", children: [_jsx(CheckCircle, { className: "h-16 w-16 text-green-500 mx-auto mb-4" }), _jsx("h3", { className: "text-2xl font-bold mb-4", children: "Successfully Subscribed!" }), _jsx("p", { className: "text-gray-300 mb-6", children: message }), _jsx("button", { onClick: resetStatus, className: "inline-flex items-center px-6 py-3 bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 transition-colors", children: "Subscribe Another Email" })] }) }) }));
    }
    return (_jsx("section", { className: "py-16 bg-black text-white", children: _jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "bg-gray-900 rounded-lg p-8 border border-gray-800", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx(Mail, { className: "h-12 w-12 text-gray-300 mx-auto mb-4" }), _jsx("h2", { className: "text-3xl font-bold mb-4", children: "Stay Informed on Debt Collection" }), _jsx("p", { className: "text-gray-300 text-lg max-w-2xl mx-auto", children: "Get exclusive insights, industry updates, and actionable debt recovery strategies delivered to your inbox monthly." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3", children: _jsx("span", { className: "text-2xl", children: "\uD83D\uDCCA" }) }), _jsx("h4", { className: "font-semibold mb-2", children: "Industry Insights" }), _jsx("p", { className: "text-gray-400 text-sm", children: "Latest trends and statistics in commercial debt collection" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3", children: _jsx("span", { className: "text-2xl", children: "\u2696\uFE0F" }) }), _jsx("h4", { className: "font-semibold mb-2", children: "Legal Updates" }), _jsx("p", { className: "text-gray-400 text-sm", children: "Important changes in debt collection laws and regulations" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3", children: _jsx("span", { className: "text-2xl", children: "\uD83D\uDCA1" }) }), _jsx("h4", { className: "font-semibold mb-2", children: "Best Practices" }), _jsx("p", { className: "text-gray-400 text-sm", children: "Proven strategies to prevent and manage business debt issues" })] })] }), _jsxs("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto", children: [_jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [_jsx("div", { className: "flex-1", children: _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your business email", className: "w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors", disabled: status === 'loading' }) }), _jsx("button", { type: "submit", disabled: status === 'loading', className: "px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: status === 'loading' ? 'Subscribing...' : 'Subscribe' })] }), status === 'error' && (_jsxs("div", { className: "mt-4 flex items-center justify-center text-red-400", children: [_jsx(AlertCircle, { className: "h-4 w-4 mr-2" }), _jsx("span", { className: "text-sm", children: message })] })), _jsx("p", { className: "text-gray-400 text-xs text-center mt-4", children: "We respect your privacy. Unsubscribe at any time. No spam, ever." })] }), _jsxs("div", { className: "text-center mt-8 pt-8 border-t border-gray-800", children: [_jsx("p", { className: "text-gray-400 text-sm", children: "Join 1,200+ business professionals who trust our insights" }), _jsxs("div", { className: "flex justify-center items-center mt-2 space-x-4", children: [_jsx("div", { className: "flex -space-x-2", children: [1, 2, 3, 4, 5].map((i) => (_jsx("div", { className: "w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-900 flex items-center justify-center", children: _jsx("span", { className: "text-xs", children: "\uD83D\uDC64" }) }, i))) }), _jsx("span", { className: "text-gray-400 text-sm", children: "and many more..." })] })] })] }) }) }));
};
export default NewsletterSubscription;
