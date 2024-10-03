import type { MetaFunction } from "@remix-run/node";
import Mycards from "./cards.MyCards";
import Header from "./temple/header";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <header>
        <Header />
      </header>
      <body>
        <a
          href="./cards/createCards"
          type="button"
          className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          MyCard
        </a>
        <a
          href="./books/booklist"
          type="button"
          className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          MyBook
        </a>
      </body>

    </>
  );
}
