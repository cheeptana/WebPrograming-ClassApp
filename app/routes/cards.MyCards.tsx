import { space } from "postcss/lib/list"
import { cards } from "./data";
import Header from "./temple/header";


function IsMember({ active }: { active: boolean }) {
    if (active)
        return <span> ✅ Hi VIP Member</span>
    else
        return <span> ❌ member only</span>
}


function Profile({ id, name, biog, bgprof, usericon, username, craftdate, active }:
    { id: number, name: string, biog: string, bgprof: string, usericon: string, username: string, craftdate: any, active: boolean }
) {

    return (
        <div className="max-w-lg w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url('${bgprof}')`, color: "blue" }} title="Card">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        {/* <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg> */}
                        <IsMember
                            active={active}
                        />
                        {id}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">{biog}</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={usericon} alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{username}</p>
                        <p className="text-gray-600 mx-5">{craftdate}</p>
                    </div>
                    <a href={`/profile/${id}`}
                        type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Detail
                    </a>
                </div>
            </div>
        </div>
    )

}


export default function Mycards({id}) {
    const name = "Cheeptana Yemlad";
    const note = "#Web Programing #Software Engeneering"
    const dhk = true;
    const cardframe = cards.map(cardsItem =>
        <center>
            <br />
            <Profile
                id={cardsItem.id}
                name={cardsItem.name}
                biog={cardsItem.biog}
                bgprof={cardsItem.bgprof}
                usericon={cardsItem.usericon}
                username={cardsItem.username}
                craftdate={cardsItem.craftdate}
                active={cardsItem.active}
            />

        </center>
    )
    return (
        <center>
            <h1 style={{ color: "blue", fontSize: 20 }}>My Cards: Cheeptan Yenlad</h1>
            <hr />
            <p>{note}</p>
            {/* <Profile /> */}

            {cardframe}
        </center>
    )
}