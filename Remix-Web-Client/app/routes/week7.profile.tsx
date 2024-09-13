import { useState, useEffect } from "react";

export default function GetMyProfile() {
    const [data, setData] = useState(null);
    const [loading, setLoasing] = useState(true);

    useEffect(() => {
        const FetchData = async () => {
            const responst = await fetch('http://localhost:3000/api/getmyprofile');

            if (!responst.ok) {
                console.log('Network responst not ok.');
            }

            const result = await responst.json();
            setData(result);
            setLoasing(false);
        };

        FetchData();

    }, []);

    if (loading) {
        return <p className="m-5 p-5"> loading...</p>
    }
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="bg-white w-1/3 mt-10 rounded-lg">
                    <div className="flex items-center justify-center pt-10 flex-col">
                        <img src={(data.img)} className="rounded-full w-32"/>
                            <h1 className="text-gray-800 font-semibold text-xl mt-5">{(data.fname)} {(data.lname)}</h1>
                            <h1 className="text-gray-500 text-sm">{(data.major)}</h1>
                            <h1 className="text-gray-500 text-sm p-4 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </h1>
                    </div>
                    <div className="flex justify-between p-4">
                        <div>
                            <h1 className="text-xs uppercase text-gray-500">Membership</h1>
                            <h1 className="text-xs text-yellow-500">Gold Member</h1>
                        </div>
                        <div>
                            <button className="text-xs text-green-300 border-2 py-1 px-2 border-green-300">Renew</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-3 mb-6 flex-col">
                        <h1 className="text-xs text-gray-500">Get Connected</h1>
                        <div className="flex mt-2">
                            <img src="https://www.iconsdb.com/icons/preview/gray/facebook-xxl.png" alt="" className="w-6 border-2 p-1 rounded-full mr-3"/>
                                <img src="https://www.iconsdb.com/icons/preview/gray/twitter-xxl.png" alt="" className="w-6 border-2 p-1 rounded-full mr-3"/>
                                    <img src="https://www.iconsdb.com/icons/preview/gray/google-plus-xxl.png" alt="" className="w-6 border-2 p-1 rounded-full mr-3"/>
                                        <img src="https://www.iconsdb.com/icons/preview/gray/instagram-6-xxl.png" alt="" className="w-6 border-2 p-1 rounded-full"/>
                                        </div>

                                    </div>
                                </div>

                        </div>
                    </>

                    )
}