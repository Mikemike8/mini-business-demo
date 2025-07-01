import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Trophy, Clock, DollarSign, TrendingUp, Building } from 'lucide-react';
const TopDebtorsLeaderboard = () => {
    const [debtors, setDebtors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchDebtors = async () => {
            try {
                const response = await fetch('/data/debtors-leaderboard.json');
                const data = await response.json();
                setDebtors(data.topDebtors);
            }
            catch (error) {
                console.error('Error fetching debtors data:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchDebtors();
    }, []);
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };
    const getIndustryIcon = (industry) => {
        switch (industry.toLowerCase()) {
            case 'manufacturing':
                return '🏭';
            case 'technology':
                return '💻';
            case 'construction':
                return '🏗️';
            case 'retail':
                return '🏪';
            case 'healthcare':
                return '🏥';
            case 'logistics':
                return '🚛';
            case 'energy':
                return '⚡';
            case 'finance':
                return '🏦';
            default:
                return '🏢';
        }
    };
    const getRankingIcon = (index) => {
        if (index === 0)
            return _jsx(Trophy, { className: "h-5 w-5 text-yellow-500" });
        if (index === 1)
            return _jsx(Trophy, { className: "h-5 w-5 text-gray-400" });
        if (index === 2)
            return _jsx(Trophy, { className: "h-5 w-5 text-amber-600" });
        return _jsxs("span", { className: "text-lg font-bold text-gray-600", children: ["#", index + 1] });
    };
    if (loading) {
        return (_jsx("section", { className: "py-16 bg-gray-50", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "text-center", children: _jsxs("div", { className: "animate-pulse", children: [_jsx("div", { className: "h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4" }), _jsx("div", { className: "h-4 bg-gray-300 rounded w-1/2 mx-auto" })] }) }) }) }));
    }
    return (_jsx("section", { className: "py-16 bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", children: "Top Recovery Success Cases" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Our proven track record speaks for itself. Here are some of our most successful debt recovery cases (anonymized for client confidentiality)." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-12", children: [_jsx("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200", children: _jsxs("div", { className: "flex items-center", children: [_jsx(DollarSign, { className: "h-8 w-8 text-green-600 mr-3" }), _jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold text-gray-900", children: formatCurrency(debtors.reduce((sum, d) => sum + d.recoveredAmount, 0)) }), _jsx("div", { className: "text-sm text-gray-600", children: "Total Recovered" })] })] }) }), _jsx("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200", children: _jsxs("div", { className: "flex items-center", children: [_jsx(TrendingUp, { className: "h-8 w-8 text-blue-600 mr-3" }), _jsxs("div", { children: [_jsxs("div", { className: "text-2xl font-bold text-gray-900", children: [(debtors.reduce((sum, d) => sum + d.recoveryRate, 0) / debtors.length).toFixed(1), "%"] }), _jsx("div", { className: "text-sm text-gray-600", children: "Avg Recovery Rate" })] })] }) }), _jsx("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200", children: _jsxs("div", { className: "flex items-center", children: [_jsx(Clock, { className: "h-8 w-8 text-purple-600 mr-3" }), _jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold text-gray-900", children: Math.round(debtors.reduce((sum, d) => sum + d.timeToResolution, 0) / debtors.length) }), _jsx("div", { className: "text-sm text-gray-600", children: "Avg Days to Resolution" })] })] }) }), _jsx("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200", children: _jsxs("div", { className: "flex items-center", children: [_jsx(Building, { className: "h-8 w-8 text-orange-600 mr-3" }), _jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold text-gray-900", children: debtors.length }), _jsx("div", { className: "text-sm text-gray-600", children: "Featured Cases" })] })] }) })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden", children: [_jsx("div", { className: "px-6 py-4 bg-gray-50 border-b border-gray-200", children: _jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Recovery Leaderboard" }) }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Rank" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Case Details" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Debt Amount" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Recovered" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Recovery Rate" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Resolution Time" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: debtors.map((debtor, index) => (_jsxs("tr", { className: "hover:bg-gray-50 transition-colors", children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "flex items-center", children: getRankingIcon(index) }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center", children: [_jsx("span", { className: "text-2xl mr-3", children: getIndustryIcon(debtor.industry) }), _jsxs("div", { children: [_jsx("div", { className: "text-sm font-medium text-gray-900", children: debtor.anonymizedName }), _jsxs("div", { className: "text-sm text-gray-500", children: [debtor.caseType, " \u2022 ", debtor.industry] })] })] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm font-medium text-gray-900", children: formatCurrency(debtor.debtAmount) }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm font-medium text-green-600", children: formatCurrency(debtor.recoveredAmount) }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-1 bg-gray-200 rounded-full h-2 mr-2", children: _jsx("div", { className: "bg-green-500 h-2 rounded-full", style: { width: `${debtor.recoveryRate}%` } }) }), _jsxs("span", { className: "text-sm font-medium text-gray-900", children: [debtor.recoveryRate, "%"] })] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: [debtor.timeToResolution, " days"] }) })] }, debtor.id))) })] }) })] }), _jsxs("div", { className: "text-center mt-12", children: [_jsx("p", { className: "text-gray-600 mb-6", children: "Ready to join our success stories? Let us help you recover your outstanding debts." }), _jsx("a", { href: "/contact", className: "inline-flex items-center px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors", children: "Start Your Recovery Case" })] })] }) }));
};
export default TopDebtorsLeaderboard;
