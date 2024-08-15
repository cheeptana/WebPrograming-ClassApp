import { useParams } from "@remix-run/react";
import Profile from "./cards.MyCards";
import { cards } from "./data";

export default function GetCard(){

    const  MyId  = useParams();
    return(
        <>
        {cards.id}
        {cards.name}
        </>
    )
}