import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const expensesData = [
  { id: 1, name: 'Abdirashid', country: 'Somalia', amount: '$250.00', date: '09/11/2022', status: false },
  { id: 2, name: 'Ali', country: 'Somalia', amount: '$150.00', date: '10/11/2022', status: false },
  { id: 3, name: 'Nuux', country: 'Somalia', amount: '$75.50', date: '11/11/2022', status: false },
  { id: 4, name: 'Faarax', country: 'Somalia', amount: '$450.25', date: '11/11/2022', status: true },
  { id: 5, name: 'Abi', country: 'Somalia', amount: '$120.00', date: '12/11/2022', status: false },
  { id: 6, name: 'Abaadir', country: 'Somalia', amount: '$275.75', date: '16/11/2022', status: true },
  { id: 7, name: 'Maalik', country: 'Somalia', amount: '$30.00', date: '20/11/2022', status: false },
];

const Expenses = () => {
  const [expenses, setExpenses] = useState(expensesData);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isUpdateMode, setUpdateMode] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);

  const addExpense = (newExpense) => {
    if (isUpdateMode) {
      setExpenses(expenses.map(expense => (expense.id === newExpense.id ? newExpense : expense)));
      setUpdateMode(false);
    } else {
      setExpenses([{ ...newExpense, id: expenses.length + 1 }, ...expenses]);
    }
    setFormVisible(false);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const updateExpense = (expense) => {
    setCurrentExpense(expense);
    setUpdateMode(true);
    setFormVisible(true);
  };

  return (
    <div className="h-full flex flex-col space-y-6 overflow-hidden">
      <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Zadaqah Donations</h2>
        <button className="bg-green-600 text-white py-2 px-4 rounded" onClick={() => setFormVisible(true)}>+ New Zadaqah Donation</button>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg flex-grow overflow-hidden">
        <div className="overflow-y-auto h-full">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-gray-300">Name</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-300">Country</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-300">Amount</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-300">Date</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-300">Status</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800">
              {expenses.map((expense, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="p-4 whitespace-nowrap text-sm text-gray-400">{expense.name}</td>
                  <td className="p-4 whitespace-nowrap text-sm text-gray-400">{expense.country}</td>
                  <td className="p-4 whitespace-nowrap text-sm text-gray-400">{expense.amount}</td>
                  <td className="p-4 whitespace-nowrap text-sm text-gray-400">{expense.date}</td>
                  <td className="p-4 whitespace-nowrap text-sm text-gray-400">
                    <input type="checkbox" checked={expense.status} readOnly />
                  </td>
                  <td className="p-4 whitespace-nowrap text-sm">
                    <button
                      className="bg-blue-600 text-white py-1 px-2 rounded mr-2"
                      onClick={() => updateExpense(expense)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="bg-red-600 text-white py-1 px-2 rounded"
                      onClick={() => deleteExpense(expense.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isFormVisible && (
        <NewExpenseForm
          addExpense={addExpense}
          onCancel={() => {
            setFormVisible(false);
            setUpdateMode(false);
          }}
          initialData={isUpdateMode ? currentExpense : null}
        />
      )}
    </div>
  );
};

const NewExpenseForm = ({ addExpense, onCancel, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      id: null,
      name: '',
      country: '',
      amount: '',
      date: '',
      status: false,
    }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg max-w-4xl w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{initialData ? 'Update Expense' : 'New Expense'}</h2>
          <button className="text-white" onClick={onCancel}>✖</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block text-sm text-gray-400">Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm text-gray-400">Country*</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm text-gray-400">Amount*</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm text-gray-400">Date*</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="col-span-1 flex items-center space-x-2">
              <input
                type="checkbox"
                name="status"
                checked={formData.status}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <label className="text-sm text-gray-400">Submitted</label>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded" onClick={onCancel}>Cancel</button>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Expenses;
