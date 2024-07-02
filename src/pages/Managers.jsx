import React, { useState } from 'react';
import { FaUser, FaCheck, FaTimes } from 'react-icons/fa';

const approvalsData = [
    { id: 1, manager: 'Macalin Cali', role: 'Macalin', category: 'Masjid', amount: '€780.00', frequency: 'Once', icon: <FaUser />, status: 'Approved' },
    { id: 2, manager: 'Mohamed Nuur', role: 'Sheikh', category: 'Masjid', amount: '€430.00', frequency: 'Once', icon: <FaUser />, status: 'Approved' },
    { id: 3, manager: 'Jaabir Saalax', role: 'Accountant', category: 'Masjid', amount: '€95.50', frequency: 'Monthly', icon: <FaUser />, status: 'Pending' },
    { id: 4, manager: 'Hamdi saalax', role: 'Consultant', category: 'Orphans', amount: '€560.00', frequency: 'Monthly', icon: <FaUser />, status: 'Approved' },
    { id: 5, manager: 'Luul jaabir', role: 'Macalin', category: 'Orphans', amount: '€120.00', frequency: 'Bi-Monthly', icon: <FaUser />, status: 'Pending' },
    { id: 6, manager: 'Bashiir yoonis', role: 'Strategist', category: 'Orphans', amount: '€275.75', frequency: 'Bi-Monthly', icon: <FaUser />, status: 'Approved' },
    { id: 7, manager: 'Zakariye nuur', role: 'Engineer', category: 'Masjid', amount: '€30.00', frequency: 'Monthly', icon: <FaUser />, status: 'Approved' },
];

const Approvals = () => {
    const [approvals, setApprovals] = useState(approvalsData);
    const [isFormVisible, setFormVisible] = useState(false);
    const [isUpdateMode, setUpdateMode] = useState(false);
    const [currentApproval, setCurrentApproval] = useState(null);

    const addApproval = (newApproval) => {
        if (isUpdateMode) {
            setApprovals(approvals.map(approval => (approval.id === newApproval.id ? newApproval : approval)));
            setUpdateMode(false);
        } else {
            setApprovals([{ ...newApproval, id: approvals.length + 1 }, ...approvals]);
        }
        setFormVisible(false);
    };

    const deleteApproval = (id) => {
        setApprovals(approvals.filter(approval => approval.id !== id));
    };

    const updateApproval = (approval) => {
        setCurrentApproval(approval);
        setUpdateMode(true);
        setFormVisible(true);
    };

    return (
        <div className="h-full flex flex-col space-y-6 overflow-hidden">
            <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Managers</h2>
                <button className="bg-green-600 text-white py-2 px-4 rounded" onClick={() => setFormVisible(true)}>+ New Manager</button>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex-grow overflow-hidden">
                <div className="overflow-y-auto h-full">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="p-4 text-left text-sm font-semibold text-gray-300">Manager</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-300">Category</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-300">Amount</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-300">Frequency</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800">
                            {approvals.map((approval, index) => (
                                <tr key={index} className="border-b border-gray-700">
                                    <td className="p-4 whitespace-nowrap text-sm font-medium text-white flex items-center">
                                        <div className="mr-3">{approval.icon}</div>
                                        <div>
                                            <div>{approval.manager}</div>
                                            <div className="text-gray-400 text-xs">{approval.role}</div>
                                        </div>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                                            approval.category === 'Masjid' ? 'bg-purple-600 text-white' :
                                                approval.category === 'Orphans' ? 'bg-red-600 text-white' : ''
                                            }`}>
                                            {approval.category}
                                        </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm text-gray-400">{approval.amount}</td>
                                    <td className="p-4 whitespace-nowrap text-sm text-gray-400">{approval.frequency}</td>
                                    <td className="p-4 whitespace-nowrap text-sm">
                                        <button
                                            className="bg-blue-600 text-white py-1 px-2 rounded mr-2"
                                            onClick={() => updateApproval(approval)}
                                        >
                                            <FaCheck />
                                        </button>
                                        <button
                                            className="bg-red-600 text-white py-1 px-2 rounded"
                                            onClick={() => deleteApproval(approval.id)}
                                        >
                                            <FaTimes />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isFormVisible && (
                <NewApprovalForm
                    addApproval={addApproval}
                    onCancel={() => {
                        setFormVisible(false);
                        setUpdateMode(false);
                    }}
                    initialData={isUpdateMode ? currentApproval : null}
                />
            )}
        </div>
    );
};

const NewApprovalForm = ({ addApproval, onCancel, initialData }) => {
    const [formData, setFormData] = useState(
        initialData || {
            id: null,
            manager: '',
            role: '',
            category: '',
            amount: '',
            frequency: '',
            status: 'Pending',
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
        const newApproval = {
            ...formData,
            icon: <FaUser />, // Default icon for now
        };
        addApproval(newApproval);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-lg max-w-4xl w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">{initialData ? 'Update Approval' : 'New Approval'}</h2>
                    <button className="text-white" onClick={onCancel}>✖</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <label className="block text-sm text-gray-400">Manager*</label>
                            <input
                                type="text"
                                name="manager"
                                value={formData.manager}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded bg-gray-700 text-white"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-sm text-gray-400">Role*</label>
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded bg-gray-700 text-white"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-sm text-gray-400">Category*</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded bg-gray-700 text-white"
                            >
                                <option value="">Select Category</option>
                                <option value="Masjid">Masjid</option>
                                <option value="Orphans">Orphans</option>
                            </select>
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
                            <label className="block text-sm text-gray-400">Frequency*</label>
                            <select
                                name="frequency"
                                value={formData.frequency}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded bg-gray-700 text-white"
                            >
                                <option value="">Select Frequency</option>
                                <option value="Once">Once</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Bi-Monthly">Bi-Monthly</option>
                            </select>
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

export default Approvals;
