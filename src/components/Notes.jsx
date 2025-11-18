import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X, Search, StickyNote } from 'lucide-react';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({ title: '', content: '' });

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleCreate = () => {
    if (!formData.title.trim()) return;

    const newNote = {
      id: Date.now(),
      title: formData.title,
      content: formData.content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setNotes([newNote, ...notes]);
    setFormData({ title: '', content: '' });
    setIsCreating(false);
  };

  const handleUpdate = (id) => {
    if (!formData.title.trim()) return;

    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, ...formData, updatedAt: new Date().toISOString() }
          : note
      )
    );
    setFormData({ title: '', content: '' });
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus catatan ini?')) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  const startEdit = (note) => {
    setEditingId(note.id);
    setFormData({ title: note.title, content: note.content });
    setIsCreating(false);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setIsCreating(false);
    setFormData({ title: '', content: '' });
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-4">
      {/* Search and Add Button */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Cari catatan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input pl-10"
          />
        </div>
        <button
          onClick={() => {
            setIsCreating(true);
            setEditingId(null);
            setFormData({ title: '', content: '' });
          }}
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} />
          <span>Buat Catatan</span>
        </button>
      </div>

      {/* Create/Edit Form */}
      {(isCreating || editingId) && (
        <div className="card animate-in fade-in duration-300">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Judul catatan"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="input text-lg font-semibold"
              autoFocus
            />
            <textarea
              placeholder="Tulis catatan Anda di sini..."
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="textarea min-h-32"
              rows="6"
            />
            <div className="flex gap-2 justify-end">
              <button onClick={cancelEdit} className="btn-secondary flex items-center gap-2">
                <X size={18} />
                Batal
              </button>
              <button
                onClick={() =>
                  editingId ? handleUpdate(editingId) : handleCreate()
                }
                className="btn-primary flex items-center gap-2"
              >
                <Save size={18} />
                {editingId ? 'Update' : 'Simpan'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notes List */}
      <div className="space-y-3">
        {filteredNotes.length === 0 ? (
          <div className="card text-center py-12">
            <div className="text-gray-400 mb-2">
              <StickyNote size={48} className="mx-auto mb-3 opacity-50" />
              <p className="text-lg font-medium">
                {searchQuery
                  ? 'Catatan tidak ditemukan'
                  : 'Belum ada catatan'}
              </p>
              <p className="text-sm mt-1">
                {searchQuery
                  ? 'Coba kata kunci lain'
                  : 'Klik tombol "Buat Catatan" untuk memulai'}
              </p>
            </div>
          </div>
        ) : (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className="card group hover:border-primary-200 transition-all"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {note.title}
                  </h3>
                  {note.content && (
                    <p className="text-gray-600 whitespace-pre-wrap mb-3">
                      {note.content}
                    </p>
                  )}
                  <p className="text-xs text-gray-400">
                    Dibuat: {formatDate(note.createdAt)}
                    {note.updatedAt !== note.createdAt && (
                      <> • Diubah: {formatDate(note.updatedAt)}</>
                    )}
                  </p>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => startEdit(note)}
                    className="btn-icon text-primary-600 hover:bg-primary-50"
                    title="Edit"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="btn-icon text-red-600 hover:bg-red-50"
                    title="Hapus"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Notes Counter */}
      {notes.length > 0 && (
        <div className="text-center text-sm text-gray-500">
          {filteredNotes.length === notes.length ? (
            <p>Total {notes.length} catatan</p>
          ) : (
            <p>
              Menampilkan {filteredNotes.length} dari {notes.length} catatan
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Notes;
