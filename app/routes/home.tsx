import { Link } from "@remix-run/react";

export default function Home() {
  return (
    <div className=" bg-gray-300">
      <div className="bg-black">
        <p className="text-white p-3 font-extrabold text-4xl hover:cursor-auto">
          Friendly Matcher
        </p>
      </div>
      <div className="flex h-full">
        <div className="basis-1/4 bg-yellow justify-center border-x-4 border-black-500 p-10 rounded-lg m-10">
          <ul role="list" className="p-6 divide-y divide-slate-200">
            <li className="flex py-4 first:pt-0 last:pb-0">
              <Link to="/SignUp">Schedule Match</Link>
            </li>
            <li className="flex py-4 first:pt-0 last:pb-0">
              <Link to="/SignUp">View Opponent Requests</Link>
            </li>

            <li className="flex py-4 first:pt-0 last:pb-0">
              <Link to="/SignUp"> Send Friendly Request</Link>
            </li>
            <li className="flex py-4 first:pt-0 last:pb-0">
              <Link to="/SignUp"> Set Availability</Link>
            </li>
            <li className="flex py-4 first:pt-0 last:pb-0  hover:bg-white-50-700">
              <Link to="/SignUp"> Friendly Review</Link>
            </li>
            <li className="flex py-4 first:pt-0 last:pb-0">
              <Link to="/Login"> Logout</Link>
            </li>
          </ul>
        </div>
        <div className="basis-3/4 bg-green-500 justify-center">
          Main Content
        </div>
      </div>
    </div>
  );
}
