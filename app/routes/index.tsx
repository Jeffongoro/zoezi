import { Link } from "@remix-run/react";
import Images from "/Images/landing.jpg";

export default function Index() {
  return (
    <div className="bg-[url('/images/land.jpg')] bg-center centrer bg-cover h-screen w-full">
      <nav className="flex items-center h-16 bg-gradient-to-r  from-indigo-900 to-indigo-500 text-white relative">
        <a href="" className="pl-2">
          Friendly Matcher
        </a>
      </nav>

      <div className="whitespace-normal z-10 ">
        <p className=" text-white text-base font-medium leading-5 text-center m-12">
          This platform helps you organize friendly matches with other Football
          teams of your choice in Kenya hustle free.
        </p>
        <p className=" text-white text-base font-medium text-center m-12">
          Find an opponent of your choice for your next friendly match.
        </p>
        <div className="flex justify-center space-x-3 m-8 z-10">
          <button className="font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900 bg-indigo-600 text-white">
            <Link to="/SignUp">Sign Up</Link>
          </button>

          <button className="font-medium px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900  bg-indigo-600 text-white">
            <Link to="/Login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
