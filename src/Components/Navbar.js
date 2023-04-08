import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar(props) {
  let location = useLocation();
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    props.showAlert("logout successfull", "success");
  };
  return (
    <>
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-center">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-11 w-20"
                    src="https://kashmirdotcom.in/wp-content/uploads/2022/07/How-to-Solve-Difficult-Problems-In-JEE-and-NEET2-1280x720-1.jpg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="flex items-baseline space-x-1">
                    {!localStorage.getItem("token") ? (
                      <div className=" flex items-baseline space-x-1 overflow-hidden
                      flex-wrap justify-center">
                        <Link
                          to="/"
                          className={`${location.pathname==="/"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          Home
                        </Link>
                        <Link
                          to="/about"
                          className={`${location.pathname==="/about"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          About
                        </Link>
                      </div>
                    ) : (
                      <div className=" flex items-baseline space-x-1 overflow-hidden flex-wrap justify-center">
                        <Link
                          to="/"
                          className={`${location.pathname==="/"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                          aria-current="page"
                        >
                          Home
                        </Link>

                        <Link
                          to="/about"
                          className={`${location.pathname==="/about"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          About
                        </Link>
                        <Link
                          to="/jee"
                          className={`${location.pathname==="/jee"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          JEE
                        </Link>

                        <Link
                          to="/neet"
                          className={`${location.pathname==="/neet"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          NEET
                        </Link>

                        <Link
                          to="/feedback"
                          className={`${location.pathname==="/feedback"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          Feedback
                        </Link>
                        <Link
                          to="/dashboard"
                          className={`${location.pathname==="/dashboard"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          User Dashboard
                        </Link>
                        <Link
                          to="/bookcart"
                          className={`${location.pathname==="/bookcart"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          Your Favourites
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative ml-3">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary flex max-w-xs items-center bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://png.pngtree.com/png-vector/20220628/ourlarge/pngtree-user-profile-avatar-vector-admin-png-image_5289693.png"
                        alt=""
                      />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      {!localStorage.getItem("token") ? (
                        <form>
                          <li>
                            <Link className="dropdown-item" to="/signup">
                              Signup{" "}
                              <i className="fa-sharp fa-solid fa-user-plus"></i>
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/login">
                              login{" "}
                              <i className="fa-solid fa-right-to-bracket"></i>
                            </Link>
                          </li>
                        </form>
                      ) : (
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={handlelogout}
                          >
                            Logout{" "}
                            <i className="fa-solid fa-right-from-bracket"></i>
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {!localStorage.getItem("token") ? (
                      <div className="ml-10 flex items-baseline space-x-1 overflow-hidden flex-wrap justify-center">
                        <Link
                          to="/"
                          className={`${location.pathname==="/"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          Home
                        </Link>
                        {/* ${location.pathname==="/"? "active":""}` */}
                        <Link
                          to="/about"
                          className={`${location.pathname==="/about"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          About
                        </Link>
                      </div>
                    ) : (
                      <div className="ml-10 flex items-baseline space-x-1 overflow-hidden flex-wrap justify-center">
                        <Link
                          to="/"
                          className={`${location.pathname==="/"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                          aria-current="page"
                        >
                          Home
                        </Link>

                        <Link
                          to="/about"
                          className={`${location.pathname==="/about"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          About
                        </Link>
                        <Link
                          to="/jee"
                          className={`${location.pathname==="/jee"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          JEE
                        </Link>

                        <Link
                          to="/neet"
                          className={`${location.pathname==="/neet"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          NEET
                        </Link>

                        <Link
                          to="/feedback"
                          className={`${location.pathname==="/feedback"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          Feedback
                        </Link>
                        <Link
                          to="/dashboard"
                          className={`${location.pathname==="/dashboard"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          User Dashboard
                        </Link>
                        <Link
                          to="/bookcart"
                          className={`${location.pathname==="/bookcart"? "bg-gray-900":""} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          Your Favourites
                        </Link>
                      </div>
                    )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

