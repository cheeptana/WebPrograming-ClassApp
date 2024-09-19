import { useState, useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import Index from "./_index";

export default function BookLIst() {
    const navigate = useNavigate();
    const [loadState, setLoadState] = useState(true);
    const [bookData, setBookData] = useState([]);

    useEffect(
        ()=>{
            try{
                const fatechData= async()=>{
                    const book = await fetch(
                        'http:localhost:3000/api/getbook'
                    );
                    if(book.ok){
                        const bookJson = await book.json();
                        setBookData(bookJson);
                    }else{
                        alert(`[ERR] loading data not succ`)
                    }
                }
                fatechData().catch(console.error)
            }catch(error){
                alert(`[ERR] loading book data is error`);
            }
        }
    );
    return (
        <div>
            <h1>BookList</h1>
            <div>
                {
                    bookData.map((item,Index)=>
                        <>
                        <div>
                            {item.BookTitle}
                        </div>
                        <div>
                            <a href={`/sec02/bookDetail/${item.id}`}>detail</a>
                            <a href={`/sec02/bookEdit/${item.id}`}>Edit</a>
                            <a href={`/sec02/bookDelete/${item.id}`}>delete</a>
                        </div>
                        </>
                    )
                }
            </div>
            <a href="/sec02/BookForm">Add Book</a>
            <a href="/sec02/BookForm">Back</a>
        </div>
    )
}