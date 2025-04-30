import { logout } from "@/redux/slices/userSlice";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideDrawer = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="fixed top-5 right-5 bg-[#D6482B] text-white p-2 rounded-md hover:bg-[#b8381e] lg:hidden"
      >
        <GiHamburgerMenu />
      </div>

      <div
        className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${
          show ? "left-0" : "left-[-100%]"
        } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`}
      >
        <div className="relative">
          <Link to={"/"}>
            <h1 className="text-2xl font-semibold mb-4">
              Prime <span className="text-[#D6482b]">Bid</span>
            </h1>
          </Link>
          <ul className="flex flex-col gap-3">
            {/*-------------------- Auction -------------------*/}
            <li>
              <Link
                to={"/auctions"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <RiAuctionFill /> Auctions
              </Link>
            </li>
            {/*-------------------- LeaderBoard -----------------*/}
            <li>
              <Link
                to={"/leaderboard"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <MdLeaderboard /> Leaderboard
              </Link>
            </li>

            {isAuthenticated && user && user.role === "Auctioneer" && (
              <>
                <li>
                  {/*--------------- Submit Commission -----------------*/}
                  <Link
                    to={"/submit-commission"}
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                  >
                    <FaFileInvoiceDollar /> Submit Commission
                  </Link>
                </li>
                {/*----------------- Create -Auction -------------------*/}
                <li>
                  <Link
                    to={"/create-auction"}
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                  >
                    <IoIosCreate /> Create Auction
                  </Link>
                </li>
                {/*---------------- View Auction -------------------*/}
                <li>
                  <Link
                    to={"/view-my-auction"}
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                  >
                    <FaEye /> View My Auctions
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated && user && user.role === "Super Admin" && (
              <li>
                <Link
                  to={"/dashboard"}
                  className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>
            )}
          </ul>
          {!isAuthenticated ? (
            <>
              <div className="my-4 flex gap-2">
                <Link to={"/sign-up"} className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white">Sign Up</Link>
                <Link
                  to={"/login"}
                  className="text-[#DECCBE] bg-transparent border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl text-xl py-1 px-4 rounded-md"
                >
                  Login
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="my-4 flex gap-4 w-fit" onClick={handleLogout}>
                <button className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl text-xl py-1 px-4 rounded-md text-white"> Logout</button>
              </div>
            </>
          )}
          <hr className="mb-4 border-t-[#D6482b]" />
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to={"/how-to-works-info"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <SiGooglesearchconsole /> How it Works
              </Link>
            </li>
            {/*--------------- About --------------*/}
            <li>
              <Link
                to={"/about"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <BsFillInfoSquareFill /> About Us
              </Link>
            </li>
          </ul>
          <IoMdCloseCircleOutline
            onClick={() => setShow(!show)}
            className="absolute top-0 right-4 text-[26px] sm:hidden"
          />
        </div>

        {/*---------------- Social icons -----------------*/}
        <div>
          <div className="flex gap-3 items-center mb-2">
            {/*------------------- Facebook -----------------*/}
            <Link
              to={"/"}
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-blue-700"
            >
              <FaFacebook />
            </Link>

            <Link
              to={"/"}
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-pink-500"
            >
              <RiInstagramFill />
            </Link>
          </div>

          {/*------------------ Contact Us -----------------*/}
          <Link
            to={"/contact"}
            className="text-stone-500 font-semibold hover:text-[#d6482b] hover:transition-all"
          >
            Contact Us
          </Link>

          <p className="text-stone-500"> &copy; PrimeBid, LLC.</p>
          <p className="text-stone-500">
            Design By{" "}
            <Link
              to={""}
              className="font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
            >
              Sukhwinder Sigh
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
