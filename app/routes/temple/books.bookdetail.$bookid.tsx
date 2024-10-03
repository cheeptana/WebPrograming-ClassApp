import { useParams } from "@remix-run/react";
import { useEffect } from "react";
import { useState } from "react";

export default function BookDetail() {
  const params = useParams();
  const bookId = params.id;

  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/getBook/${bookId}`);
        if (response.ok) {
          const bookData = await response.json();
          setBook(bookData);
        } else {
          alert('ไม่สามารถดึงข้อมูลได้');
        }
      } catch (error) {
        alert(`เกิดข้อผิดพลาดในการดึงข้อมูล${error}`);
      }
    };

    fetchBook();
  }, [bookId]);

  return (
    <div className="max-w-md mx-auto p-4 pt-6">
      <h1 className="text-2xl font-bold mb-4">หนังสือรายละเอียด</h1>
      {book && (
        <div>
          <h2>{book.title}</h2>
          <p>ผู้เขียน: {book.author}</p>
          <p>สำนักพิมพ์: {book.publisher}</p>
          <p>ราคา: {book.price} บาท</p>
        </div>
      )}
    </div>
  );
}