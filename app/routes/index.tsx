import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-w-full h-screen bg-sky-500">
      <div className="bg-black">
        <p className="text-white p-3 font-extrabold text-4xl hover:cursor-auto">
          Friendly Matcher
        </p>
      </div>

      <div className="whitespace-normal z-10">
        <p className=" text-sm hover:text-base font-semibold leading-5 text-center m-8">
          This platform helps you organize friendly matches with other Football
          teams in Kenya hustle free.
        </p>
        <p className="text-sm hover:text-base font-semibold text-center m-8 z-10">
          Find an opponent of your choice for your next friendly match from our
          database of many sports teams ready to play friendly matches with your
          team.
        </p>
        <nav className="flex justify-center space-x-3 m-8">
          <button className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
            <Link to="/SignUp">Sign Up</Link>
          </button>

          <button className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
            <Link to="/Login">Login</Link>
          </button>
        </nav>
      </div>
    </div>
  );
}