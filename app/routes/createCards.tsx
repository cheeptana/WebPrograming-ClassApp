import { useState } from "react";

let nextId = 0;

export default function CreateCard() {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [cards, setCards] = useState([]);

    const handleClickAdd = (na, no) => {
        setCards([
            ...cards,
            {
                id: nextId++,
                name: na,
                note: no
            }
        ]);
    };

    const handleViewClick = (card) => {
        alert(`Viewing card with ID: ${card.id}\nName: ${card.name}\nDescription: ${card.note}`);
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-semibold mb-4 bg-green-300 p-3 rounded-lg shadow-md">ข้อมูลนามบัตร</h1>
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <label className="block text-gray-700 font-medium mb-2">ชื่อ-สกุล:</label>
                <input
                    name='cName'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    type="text"
                />
                <label className="block text-gray-700 font-medium mb-2">ข้อมูลผู้ถือบัตร:</label>
                <textarea
                    name="cNote"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                <button
                    onClick={() => handleClickAdd(name, note)}
                    className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600"
                >
                    เพิ่มข้อมูลนามบัตร
                </button>
                
            </div>
            <div className="w-full max-w-md mt-6">
                <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-200 text-left">
                        <tr>
                            <th className="p-3 border-b text-gray-700">ID</th>
                            <th className="p-3 border-b text-gray-700">Name</th>
                            <th className="p-3 border-b text-gray-700">Description</th>
                            <th className="p-3 border-b text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.length > 0 ? (
                            cards.map(card => (
                                <tr key={card.id} className="hover:bg-gray-50">
                                    <td className="p-3 border-b text-gray-600">{card.id}</td>
                                    <td className="p-3 border-b text-gray-600">{card.name}</td>
                                    <td className="p-3 border-b text-gray-600">{card.note}</td>
                                    <td className="p-3 border-b text-gray-600">
                                        <button
                                            onClick={() => handleViewClick(card)}
                                            className="bg-blue-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-blue-600"
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}