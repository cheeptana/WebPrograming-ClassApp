import { useEffect, useState } from "react";
import { useNavigate } from "@remix-run/react";

export default function BookLists() {
    const navigate = useNavigate();
    const [loadStatus, setLoadStatus] = useState(true);
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        if (loadStatus) {
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:3000/api/getBooks');
                    if (response.ok) {
                        const books = await response.json();
                        setBookData(books);
                    } else {
                        alert('ไม่สามารถดึงข้อมูลได้');
                    }
                } catch (error) {
                    alert(`เกิดข้อผิดพลาดในการดึงข้อมูล${error}`);
                }
            };

            fetchData();
            setLoadStatus(false);
        }
    }, [loadStatus]);

    const hendleDelete = (BookCode) => {
        alert(`กำลังลบ: ${BookCode}`);
        try {
            const fetchData = async () => {
                const ddata = await fetch(
                    `http://localhost:3000/api/deletebook/${BookCode}`,
                    {
                        method: 'DELETE'
                    }
                );
                if (ddata.ok) {
                    const MyJson = await ddata.json();
                    alert(MyJson.message);
                } else {
                    alert(`[ERR] ลบข้อมูลไม่สำเร็จ`)
                }
            }
            fetchData();
            setLoadStatus(true);
        } catch (error) {
            alert(`[ERR]fetch error`)
        }
    }

    return (
        <div className="max-w-md mx-auto p-4 pt-6">
            <h1 className="text-2xl font-bold mb-4">รายการหนังสือ</h1>
            {loadStatus ? (
                <div className="flex justify-center mb-4">
                    <svg className="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12H4zm2 5.291A7.962 7.962 0 014 19.708a7.962 7.962 0 0114.625 0c1.737-3.573 3.143-6.873 4.625-9.708z"></path>
                    </svg>
                    <span className="ml-2">Loading...</span>
                </div>
            ) : (
                <table className="w-full mb-4">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Title</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-4 py-2">{item.title}</td>
                                <td className="px-4 py-2">
                                    <a href={`/books/bookdetail/${item.id}`} className="text-blue-600 hover:text-blue-900 mr-2"><i className="fas fa-info-circle">รายละเอียด</i></a>
                                    <a href={`/books/bookeditform/${item.id}`} className="text-blue-600 hover:text-blue-900 mr-2"><i className="fas fa-edit">แก้ไข</i></a>
                                    <a href="" onClick={(e) => hendleDelete(`${item.id}`)} className="text-red-600 hover:text-red-900"><i className="fas fa-trash">ลบ</i></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <a className="p-5 text-blue-600 hover:text-blue-900" onClick={() => navigate('bookform')}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    เพิ่มหนังสือ
                </button>
            </a>
            <button onClick={() => navigate(-1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">ย้อนกลับ</button>
        </div>
    );
}