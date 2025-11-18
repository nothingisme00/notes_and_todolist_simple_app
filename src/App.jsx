import { useState } from 'react';
import { StickyNote, CheckSquare } from 'lucide-react';
import Notes from './components/Notes';
import TodoList from './components/TodoList';

function App() {
  const [activeTab, setActiveTab] = useState('notes');

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Notes & Todo
          </h1>
          <p className="text-gray-600">
            Aplikasi sederhana untuk mencatat dan mengatur tugas
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 bg-white rounded-xl p-1 shadow-sm border border-gray-200">
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'notes'
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <StickyNote size={20} />
            <span>Notes</span>
          </button>
          <button
            onClick={() => setActiveTab('todos')}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'todos'
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <CheckSquare size={20} />
            <span>To-Do List</span>
          </button>
        </div>

        {/* Content */}
        <div className="transition-all duration-300">
          {activeTab === 'notes' ? <Notes /> : <TodoList />}
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-sm text-gray-500">
          <p>Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
