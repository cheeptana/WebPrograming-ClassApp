import { useNavigate } from "@remix-run/react";
import { useState } from "react";

export default function BookFrom() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        // -- part 1 --
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const FormJson = Object.fromEntries(formData.entries());


        try {
            const response = await fetch(
                'http://localhost:3000/api/AddBook',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(FormJson)
                });

            if (response.ok) {
                const data = await response.json();
                alert(`[INFO] ${data.message}`);
                navigate('/sec02/booklist');
            }

        } catch (error) {
            alert(`[ERR] this error of submit`)
        }
    }

    return (
        // -- part2 --
        <div className="m-3">

            <h1>Add New Book</h1>
            <form method="POST" onSubmit={handleSubmit}>
                <label>Book Name:</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text" name="BookTitle" required /><br />
                <label>Book Detail</label>
                <textarea rows={3} cols={50} name="BookDetail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /><br />
                <label>Type of Book</label>
                <select name="BookType"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    <option value="">Select Type of Book</option>
                    <option value="10">Sci</option>
                    <option value="20">it</option>
                    <option value="30">computer</option>
                </select><br />
                <div> <label >SaleType</label><br />
                    <input
                        type="radio"
                        name="stock"
                        value="in-stock"
                    />
                    <label>in-stock</label><br />
                    <input
                        type="radio"
                        name="stock"
                        value="out-stock"
                        defaultChecked
                    />
                    <label>out-stock</label></div>
                <br />
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="submit">Save</button>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="reset">reset</button>
            </form>

        </div>
    )

}