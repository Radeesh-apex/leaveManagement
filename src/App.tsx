import { useState } from 'react';
import { Calendar, FileText, Home, Clock } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { LeaveRequest } from './components/LeaveRequest';
import { LeaveHistory } from './components/LeaveHistory';
import { LeaveCalendar } from './components/LeaveCalendar';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'request', label: 'Request Leave', icon: FileText },
    { id: 'history', label: 'Leave History', icon: Clock },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-blue-600">Leave Management System</h1>
          <p className="text-gray-600 mt-1">Manage your time off efficiently</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'request' && <LeaveRequest />}
        {activeTab === 'history' && <LeaveHistory />}
        {activeTab === 'calendar' && <LeaveCalendar />}
      </main>
    </div>
  );
}
