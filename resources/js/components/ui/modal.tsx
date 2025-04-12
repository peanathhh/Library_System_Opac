import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import "../../../css/app.css"; 
type Book = {
  title: string;
  author: string;
  publisher: string;
  status: string;
  isbn?: string;
  pubPlace?: string;
  edition?: string;
  pages?: string;
  category?: string;
  deweyCode?: string;
  deweyClass?: string;
  quantity?: string;
  callNumber?: string;
};

type ModalProps = {

  isOpen: boolean;
  onClose: () => void;
  mode: 'add' | 'edit';
  bookData?: Book;
};

export default function Modal({ isOpen, onClose, mode = 'add', bookData }: ModalProps) {
  const [formData, setFormData] = useState<Book>({
    title: '',
    author: '',
    publisher: '',
    status: 'Available',
    isbn: '',
    pubPlace: '',
    edition: '',
    pages: '',
    category: '',
    deweyCode: '',
    deweyClass: '',
    quantity: '',
    callNumber: '',
  });

  const [isUpdate, setIsUpdate] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (mode === 'edit' && bookData) {
      setFormData(bookData);
    } else {
      setFormData({
        title: '',
        author: '',
        publisher: '',
        status: 'Available',
        isbn: '',
        pubPlace: '',
        edition: '',
        pages: '',
        category: '',
        deweyCode: '',
        deweyClass: '',
        quantity: '',
        callNumber: '',
      });
    }
  }, [mode, bookData, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    setIsUpdate(true);
    setTimeout(() => {
      setIsUpdate(false);
      setSuccessMessage(
        mode === 'add' ? 'Saved Successfully!' : 'Successfully Updated Changes!'
      );
      setTimeout(() => {
        setSuccessMessage('');
        onClose();
      }, 1500);
    }, 1000);
  };
  

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-4xl mx-auto p-8 bg-white rounded-md shadow-xl transition-all">
            <Dialog.Title className="text-xl font-semibold mb-6">
              {mode === 'add' ? 'Add New Book' : 'Update Book'}
            </Dialog.Title>

            {/* Form Fields */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Book Title', id: 'title' },
                { label: 'Author', id: 'author', note: '* Author name separated by commas (,)' },
                { label: 'ISBN', id: 'isbn', note: '* If there are multiple ISBNs, separate by commas (,)' },
                { label: 'Publisher', id: 'publisher' },
                { label: 'Publication Place', id: 'pubPlace' },
                { label: 'Edition Information', id: 'edition' },
                { label: 'Pages', id: 'pages' },
              ].map(({ label, id, note }) => (
                <div key={id} className="flex flex-col">
                  <label htmlFor={id}>{label}</label>
                  <input
                    id={id}
                    type="text"
                    value={(formData as any)[id]}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />
                  {note && <span className="text-xs text-gray-500 italic mt-1">{note}</span>}
                </div>
              ))}

              {/* Dropdowns */}
              <div className="flex flex-col">
                <label htmlFor="category">Select Category</label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="border p-2 rounded"
                >
                  <option value="">Select Category</option>
                  <option value="Criminology">Criminology</option>
                  <option value="Information and Technology">Information and Technology</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="deweyCode">Select Dewey Code</label>
                <select
                  id="deweyCode"
                  value={formData.deweyCode}
                  onChange={handleChange}
                  className="border p-2 rounded"
                >
                  <option value="">Select Dewey Code</option>
                  <option value="000">000</option>
                  <option value="100">100</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="deweyClass">Select Dewey Decimal Classification</label>
                <select
                  id="deweyClass"
                  value={formData.deweyClass}
                  onChange={handleChange}
                  className="border p-2 rounded"
                >
                  <option value="">Select Classification</option>
                  <option value="Classification 1">Classification 1</option>
                  <option value="Classification 2">Classification 2</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="quantity">Quantity</label>
                <input
                  id="quantity"
                  type="text"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="callNumber">Call Number</label>
                <input
                  id="callNumber"
                  type="text"
                  value={formData.callNumber}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="border p-2 rounded"
                >
                  <option value="Available">Available</option>
                  <option value="Checked Out">Checked Out</option>
                </select>
              </div>
            </div>

            {/* Success Message */}
            {successMessage && (
            <div className="success-toast">{successMessage}</div>
            )}


            {/* Action Buttons */}
            <div className="flex justify-end mt-6 gap-2">
              <button
                onClick={onClose}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isUpdate}
                className={`px-4 py-2 rounded text-white ${
                  isUpdate ? 'bg-gray-400' : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                {isUpdate
                  ? mode === 'add'
                    ? 'Adding Book...'
                    : 'Updating...'
                  : mode === 'add'
                  ? 'Add Book'
                  : 'Save Update Changes'}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
