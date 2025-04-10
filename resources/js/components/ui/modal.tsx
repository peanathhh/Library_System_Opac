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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                 
                  <div className="flex flex-col">
                    <label htmlFor="title">Book Title</label>
                    <input id="title" type="text" placeholder="" className="border p-2 rounded" />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="author">Author</label>
                    <input id="author" type="text" placeholder="" className="border p-2 rounded" />
                    <span className="text-xs text-gray-500 italic mt-1">* Author name separated by commas (,)</span>
                  </div>

                 
                  <div className="flex flex-col">
                    <label htmlFor="isbn">ISBN</label>
                    <input id="isbn" type="text" placeholder="" className="border p-2 rounded" />
                    <span className="text-xs text-gray-500 italic mt-1">* If there are multiple ISBNs, separate by commas (,)</span>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="publisher">Publisher</label>
                    <input id="publisher" type="text" placeholder="" className="border p-2 rounded" />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="pubPlace">Publication Place</label>
                    <input id="pubPlace" type="text" placeholder="" className="border p-2 rounded" />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="edition">Edition Information</label>
                    <input id="edition" type="text" placeholder="" className="border p-2 rounded" />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="pages">Pages</label>
                    <input id="pages" type="text" placeholder="" className="border p-2 rounded" />
                  </div>

                 
                  <div className="flex flex-col">
                    <label htmlFor="category">Select Category</label>
                    <select id="category" className="border p-2 rounded">
                      <option value="">Select Category</option>
                      <option value="Fiction">Criminology</option>
                      <option value="Non-Fiction">Information and Technology</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="deweyCode">Select Dewey Code</label>
                    <select id="deweyCode" className="border p-2 rounded">
                      <option value="">Select Dewey Code</option>
                      <option value="000">000</option>
                      <option value="100">100</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="deweyClass">Select Dewey Decimal Classification</label>
                    <select id="deweyClass" className="border p-2 rounded">
                      <option value="">Select Classification</option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>

                 
                  <div className="flex flex-col">
                    <label htmlFor="quantity">Quantity</label>
                    <input id="quantity" type="text" placeholder="" className="border p-2 rounded" />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="callNumber">Call Number</label>
                    <input id="callNumber" type="text" placeholder="" className="border p-2 rounded" />
                  </div>
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
