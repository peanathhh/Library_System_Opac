import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import "../../../css/app.css"; 

type Dewey = {
  deweydecimalnumbers: string;
  deweydecimalclassification: string;
  
}

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  mode: 'add' | 'edit';
  deweyData?: Dewey ;
};

export default function Modal({ isOpen, onClose, mode = 'add', deweyData }: ModalProps) {
  const [formData, setFormData] = useState<Dewey>({
    deweydecimalnumbers: '',
    deweydecimalclassification: ''
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (mode === 'edit' && deweyData) {
      setFormData(deweyData);
    } else {
      setFormData({
        deweydecimalnumbers: '',
        deweydecimalclassification: ''
      });
    }
  }, [mode, deweyData, isOpen]);
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
                {mode === 'add' ? 'Add New Dewey' : 'Edit Dewey'}

              </Dialog.Title>

              {/* Form Grid */}
              <div className="grid gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="deweydecimalnumbers">Dewey Decimal Numbers:</label>
                    <input id="deweydecimalnumbers" type="text" placeholder="" className="border p-2 rounded"
                    value={formData.deweydecimalnumbers}
                    onChange={handleChange}
                    />

                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="deweydecimalclassification">Dewey Decimal Classification</label>
                    <input id="deweydecimalclassification" type="text" placeholder="" className="border p-2 rounded"
                    value={formData.deweydecimalclassification}
                    onChange={handleChange}
                    />
                  </div>
              </div>

              {/* Success Message */}
            {successMessage && (
            <div className="success-toast">{successMessage}</div>
            )}


              {/* Footer */}
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
                    ? 'Adding Dewey...'
                    : 'Updating...'
                  : mode === 'add'
                  ? 'Add Dewey'
                  : 'Save Update Changes'}
              </button>
            </div>
            </Dialog.Panel>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
