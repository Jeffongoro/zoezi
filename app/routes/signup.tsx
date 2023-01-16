import { Link } from "@remix-run/react";
// import landingImages from "./landing.jpg";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create Team account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Already registered?
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign in
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class=""
                />
              </div>
            </div>
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class=""
                />
              </div>
            </div>
            <div>
              <label
                for="team name"
                class="block text-sm font-medium text-gray-700"
              >
                Team Name
              </label>
              <div className="mt-1">
                <input id="name" name="team_name" type="text" class="" />
              </div>
            </div>
            <div>
              <label
                for="Team Contact Person"
                class="block text-sm font-medium text-gray-700"
              >
                Team's Contact Person Name
              </label>
              <div className="mt-1">
                <input
                  id="contact_person"
                  name="contact_person_name"
                  type="text"
                  required
                  class=""
                />
              </div>
            </div>

            <div>
              <label
                for="phone number"
                class="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="contact"
                  name="phone_number"
                  type="tel"
                  required
                  class=""
                />
              </div>
            </div>
            <div>
              <label
                for="team expertise"
                class="block text-sm font-medium text-gray-700"
              >
                Team Expertise
              </label>
              <div className="mt-1">
                <select name="team-expertise" id="team_expertise" className="">
                  <option value="">Please select</option>
                  <option value="small">
                    Professional: Football is a career
                  </option>
                  <option value="medium">
                    Unproffessional: Participate in tournaments
                  </option>
                  <option value="large">
                    Hobbysts: Play for fun and exercise
                  </option>
                </select>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms-and-privacy"
                name="terms-and-privacy"
                type="checkbox"
                className=""
              />
              <label
                for="terms-and-privacy"
                class="ml-2 block text-sm text-gray-900"
              >
                I agree to the
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Terms
                </a>
                and
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}