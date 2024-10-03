import { useState, useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";

export default function BookEditForm() {
  const navigate = useNavigate();
  const myParams = useParams();
  const bookid = myParams.bookid;

  const [bookData, setBookData] = useState({
    Cate: '',
    Desc: '',
    code: '',
    title: '',
  });
  const [categoryOption, setCategoryOption] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value
    });
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetch(`http://localhost:3000/api/getBookbyid/${bookid}`);
        if (data.ok) {
          const json = await data.json();
          setBookData(json);
          setCategoryOption(json.Cate);
          console.log(json);
          alert(json);
        } else {
          alert('Failed to loaded data.');
        }
      }

      // call the function
      fetchData().catch(console.error);
    } catch (error) {
      alert('An error occurred while loading the data.');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirm('ยืนยันการแก้ไขข้อมูล?')) {
      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);

      try {
        const response = await fetch(`http://localhost:3000/api/updateBook`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formJson),
        });

        if (response.ok) {
          const myjson = await response.json();
          alert(`${myjson.message}`);
          navigate('/books/booklist');
        } else {
          alert('Failed to update data.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while updatting the form');
      }
      return true;
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 mt-4 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">แก้ไขหนังสือ</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="bookid" value={bookid} />
        <div className="flex flex-col">
          <label className="text-lg">ชื่อหนังสือ</label>
          <input type="text" name="title" id="bookTitle" onChange={handleChange} value={bookData.title} required className="p-2 border border-gray-300 rounded" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">รายละเอียด</label>
          <textarea rows={3} cols={50} name="Desc" id="bookDesc" className="p-2 border border-gray-300 rounded" onChange={handleChange} value={bookData.Desc} />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">หมวดหมู่</label>
          <select name="Cate" id="bookCate" value={bookData.Cate} onChange={handleChange} required className="p-2 border border-gray-300 rounded">
            <option value="">-เลือกหมวดหมู่-</option>
            <option value={10}>เทคโนโลยี</option>
            <option value={20}>คอมพิวเตอร์</option>
            <option value={30}>ทั่วไป</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">[ Submit ]</button>
          <button type="reset" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">[ Reset ]</button>
        </div>
      </form>
    </div>
  );
}