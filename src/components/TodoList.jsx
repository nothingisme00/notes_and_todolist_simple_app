import { useState, useEffect } from 'react';
import {
  Plus,
  Trash2,
  Edit2,
  Check,
  X,
  Circle,
  CheckCircle2,
  Filter,
} from 'lucide-react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditValue(todo.text);
  };

  const handleUpdate = () => {
    if (!editValue.trim()) return;

    setTodos(
      todos.map((todo) =>
        todo.id === editingId ? { ...todo, text: editValue } : todo
      )
    );
    setEditingId(null);
    setEditValue('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  const clearCompleted = () => {
    if (
      window.confirm('Apakah Anda yakin ingin menghapus semua tugas yang selesai?')
    ) {
      setTodos(todos.filter((todo) => !todo.completed));
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

  return (
    <div className="space-y-4">
      {/* Add Todo Form */}
      <form onSubmit={handleAdd} className="card">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Tambahkan tugas baru..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input flex-1"
            autoFocus
          />
          <button type="submit" className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            <span>Tambah</span>
          </button>
        </div>
      </form>

      {/* Filter and Stats */}
      {todos.length > 0 && (
        <div className="card">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Semua ({stats.total})
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'active'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Aktif ({stats.active})
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'completed'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Selesai ({stats.completed})
              </button>
            </div>

            {stats.completed > 0 && (
              <button
                onClick={clearCompleted}
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Hapus yang Selesai
              </button>
            )}
          </div>
        </div>
      )}

      {/* Todo List */}
      <div className="space-y-2">
        {filteredTodos.length === 0 ? (
          <div className="card text-center py-12">
            <div className="text-gray-400">
              <CheckCircle2 size={48} className="mx-auto mb-3 opacity-50" />
              <p className="text-lg font-medium">
                {filter === 'completed' && todos.length > 0
                  ? 'Belum ada tugas yang selesai'
                  : filter === 'active' && todos.length > 0
                  ? 'Semua tugas sudah selesai! 🎉'
                  : 'Belum ada tugas'}
              </p>
              <p className="text-sm mt-1">
                {todos.length === 0
                  ? 'Tambahkan tugas baru untuk memulai'
                  : 'Gunakan filter untuk melihat tugas lain'}
              </p>
            </div>
          </div>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={`card group ${
                todo.completed ? 'bg-gray-50 border-gray-100' : ''
              }`}
            >
              {editingId === todo.id ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="input flex-1"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleUpdate();
                      if (e.key === 'Escape') handleCancelEdit();
                    }}
                  />
                  <button
                    onClick={handleUpdate}
                    className="btn-icon text-green-600 hover:bg-green-50"
                  >
                    <Check size={20} />
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="btn-icon text-gray-600 hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleToggle(todo.id)}
                    className="flex-shrink-0 transition-colors"
                  >
                    {todo.completed ? (
                      <CheckCircle2
                        size={24}
                        className="text-green-600"
                        fill="currentColor"
                      />
                    ) : (
                      <Circle size={24} className="text-gray-400 hover:text-primary-600" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-lg ${
                        todo.completed
                          ? 'line-through text-gray-500'
                          : 'text-gray-800'
                      }`}
                    >
                      {todo.text}
                    </p>
                  </div>

                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {!todo.completed && (
                      <button
                        onClick={() => handleEdit(todo)}
                        className="btn-icon text-primary-600 hover:bg-primary-50"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="btn-icon text-red-600 hover:bg-red-50"
                      title="Hapus"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Progress Bar */}
      {todos.length > 0 && (
        <div className="card">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Progress</span>
              <span className="font-medium">
                {stats.completed}/{stats.total} tugas selesai
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: `${stats.total > 0 ? (stats.completed / stats.total) * 100 : 0}%`,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;
