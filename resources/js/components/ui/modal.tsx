import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration"
          
        >
          {/* Background overlay with blur */}
          <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative w-full max-w-4xl mx-auto p-8 bg-white rounded-md shadow-xl transition-all">
              <Dialog.Title className="text-xl font-semibold mb-6">
                Add New Book
              </Dialog.Title>

              {/* Form Grid */}
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Book Title" className="border p-2 rounded" />
                <input type="text" placeholder="Author" className="border p-2 rounded" />
                <input type="text" placeholder="Publisher" className="border p-2 rounded" />
                <input type="text" placeholder="ISBN" className="border p-2 rounded" />
                <input type="text" placeholder="Publication Place" className="border p-2 rounded" />
                <input type="text" placeholder="Edition Information" className="border p-2 rounded" />
                <input type="text" placeholder="Physical Information" className="border p-2 rounded" />
                <input type="text" placeholder="URL" className="border p-2 rounded" />
                <input type="text" placeholder="On Shelf" className="border p-2 rounded" />
                <input type="text" placeholder="Call Number" className="border p-2 rounded" />
                <select className="border p-2 rounded col-span-2">
                  <option value="">Select Category</option>
                  <option>Fiction</option>
                  <option>Non-Fiction</option>
                </select>
              </div>

              {/* Footer */}
              <div className="flex justify-end mt-6 gap-2">
                <button
                  onClick={onClose}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Close
                </button>
                <button
                  onClick={() => alert('Book added!')}
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                >
                  Add Book
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
