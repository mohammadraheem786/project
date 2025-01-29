import React, { useState } from 'react';
import { Warehouse, Users, History, BarChart3, Search, Plus, Brain as Grain } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('storage');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-amber-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Grain className="h-8 w-8" />
              <span className="text-2xl font-bold">RiceMill Pro</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:bg-amber-600 px-4 py-2 rounded-lg transition">Dashboard</button>
              <button className="hover:bg-amber-600 px-4 py-2 rounded-lg transition">Settings</button>
              <button className="bg-amber-800 hover:bg-amber-900 px-4 py-2 rounded-lg transition">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Section Tabs */}
        <div className="flex space-x-4 mb-8">
          {[
            { id: 'storage', icon: <Warehouse />, label: 'Mill Storage' },
            { id: 'entry', icon: <Users />, label: 'Farmer Entry' },
            { id: 'history', icon: <History />, label: 'Transactions' },
            { id: 'analytics', icon: <BarChart3 />, label: 'Analytics' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition ${
                activeTab === tab.id
                  ? 'bg-amber-700 text-white'
                  : 'bg-white text-gray-600 hover:bg-amber-50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-xl shadow-md p-6">
          {/* Storage Section */}
          {activeTab === 'storage' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Mill Storage Information</h2>
                <button className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition flex items-center space-x-2">
                  <Plus className="h-5 w-5" />
                  <span>Add Stock</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Raw Rice', amount: '250,000 kg', color: 'bg-green-100' },
                  { label: 'Processed Rice', amount: '120,000 kg', color: 'bg-blue-100' },
                  { label: 'Available Storage', amount: '630,000 kg', color: 'bg-amber-100' },
                ].map((item, index) => (
                  <div key={index} className={`${item.color} p-6 rounded-lg`}>
                    <h3 className="text-lg font-semibold text-gray-700">{item.label}</h3>
                    <p className="text-2xl font-bold text-gray-900">{item.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Farmer Entry Section */}
          {activeTab === 'entry' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Farmer Data Entry</h2>
                <button className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition flex items-center space-x-2">
                  <Plus className="h-5 w-5" />
                  <span>New Entry</span>
                </button>
              </div>
              <div className="bg-white rounded-lg">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Farmer Name"
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <input
                    type="number"
                    placeholder="Quantity (kg)"
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <input
                    type="text"
                    placeholder="Rice Type"
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition md:col-span-2">
                    Submit Entry
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Transaction History Section */}
          {activeTab === 'history' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Transaction History</h2>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search transactions"
                      className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { date: '2024-03-15', farmer: 'John Doe', type: 'Basmati', quantity: '1,000 kg', status: 'Completed' },
                      { date: '2024-03-14', farmer: 'Jane Smith', type: 'Brown Rice', quantity: '750 kg', status: 'Processing' },
                      { date: '2024-03-13', farmer: 'Mike Johnson', type: 'White Rice', quantity: '500 kg', status: 'Completed' },
                    ].map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">{row.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.farmer}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.quantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            row.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Analytics Section */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Mill Analytics</h2>
                <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Total Processing', value: '45,000 kg', change: '+12%' },
                  { label: 'Active Farmers', value: '128', change: '+5%' },
                  { label: 'Revenue', value: '₹8.5L', change: '+15%' },
                  { label: 'Efficiency', value: '94%', change: '+2%' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border">
                    <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <span className="text-sm text-green-600">{stat.change} from last period</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;