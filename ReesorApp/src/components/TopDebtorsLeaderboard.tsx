import React, { useState, useEffect } from 'react';
import { Trophy, Clock, DollarSign, TrendingUp, Building } from 'lucide-react';

interface Debtor {
  id: number;
  anonymizedName: string;
  industry: string;
  debtAmount: number;
  recoveredAmount: number;
  recoveryRate: number;
  timeToResolution: number;
  status: string;
  caseType: string;
}

const TopDebtorsLeaderboard: React.FC = () => {
  const [debtors, setDebtors] = useState<Debtor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDebtors = async () => {
      try {
        const response = await fetch('/data/debtors-leaderboard.json');
        const data = await response.json();
        setDebtors(data.topDebtors);
      } catch (error) {
        console.error('Error fetching debtors data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDebtors();
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getIndustryIcon = (industry: string) => {
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

  const getRankingIcon = (index: number) => {
    if (index === 0) return <Trophy className="h-5 w-5 text-yellow-500" />;
    if (index === 1) return <Trophy className="h-5 w-5 text-gray-400" />;
    if (index === 2) return <Trophy className="h-5 w-5 text-amber-600" />;
    return <span className="text-lg font-bold text-gray-600">#{index + 1}</span>;
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Top Recovery Success Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven track record speaks for itself. Here are some of our most 
            successful debt recovery cases (anonymized for client confidentiality).
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {formatCurrency(debtors.reduce((sum, d) => sum + d.recoveredAmount, 0))}
                </div>
                <div className="text-sm text-gray-600">Total Recovered</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {(debtors.reduce((sum, d) => sum + d.recoveryRate, 0) / debtors.length).toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Avg Recovery Rate</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(debtors.reduce((sum, d) => sum + d.timeToResolution, 0) / debtors.length)}
                </div>
                <div className="text-sm text-gray-600">Avg Days to Resolution</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Building className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">{debtors.length}</div>
                <div className="text-sm text-gray-600">Featured Cases</div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recovery Leaderboard</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Case Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Debt Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recovered
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recovery Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resolution Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {debtors.map((debtor, index) => (
                  <tr key={debtor.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getRankingIcon(index)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{getIndustryIcon(debtor.industry)}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {debtor.anonymizedName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {debtor.caseType} • {debtor.industry}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {formatCurrency(debtor.debtAmount)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-green-600">
                        {formatCurrency(debtor.recoveredAmount)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${debtor.recoveryRate}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {debtor.recoveryRate}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {debtor.timeToResolution} days
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to join our success stories? Let us help you recover your outstanding debts.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
          >
            Start Your Recovery Case
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopDebtorsLeaderboard;
