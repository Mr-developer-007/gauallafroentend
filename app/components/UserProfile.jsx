"use client"
import React, { useState } from "react";
import CompleteProfileForm from "./CompleteProfileForm";

export default function UserProfile() {




  const [cuurentTab, setCurrentTab] = useState("My Profile")

  const MyProfile = () => {

    return (
      <>
        <h5 className="font-semibold text-lg lg:text-xl">User Information</h5>
        <div className="mt-4">
          <p>
            <span>Name</span>:
            <span>Dummy name</span>
          </p>
          <p>
            <span>LastName</span>:
            <span>Dummy</span>
          </p>
          <p>
            <span>Email</span>:
            <span>code12@gmail.com</span>
          </p>
        </div>
      </>
    )
  }

  const MyOrders = () => {
    return (
      <>
        <h5 className="font-semibold text-lg lg:text-xl">My Orders</h5>
        <div className="mt-4">
          <p className="text-gray-400">
            <span>Order1</span>:
            <span>Rings</span>
          </p>
          <p className="text-gray-400">
            <span>Order2</span>:
            <span>bracelet</span>
          </p>

        </div>
      </>
    )
  }
  const HelpCenter = () => {
    return (
      <>
        <h5 className="font-semibold text-lg lg:text-xl">Help Center</h5>
        <div className="mt-4">
          <p className="text-gray-400">
            For support, contact us at Dummy@example.com


          </p>


        </div>
      </>
    )
  }

  const LogOut = () => {
    return (
      <>
        <h5 className="font-semibold text-lg lg:text-xl">LogOut</h5>
        <div className="mt-4">
          <p className="text-gray-400">
            Click the button below to logout:



          </p>
          <button className="bg-red-500 py-2 px-3 rounded-xl font-bold  text-white mt-2">Logout</button>


        </div>
      </>
    )
  }

  const tabs = [
    {
      tabName: "My Profile",
      tabVal: <MyProfile />
    },
    {
      tabName: "My Orders",
      tabVal: <MyOrders />

    },
    {
      tabName: "Help Center",
      tabVal: <HelpCenter />

    },
    {
      tabName: "Logout",
      tabVal: <LogOut />

    },
  ]


  const profileComplete = false

  const [completePrfileForm, setCompleteProfileForm] = useState(false)

  const ProfileEmpty = () => {
    return (
      <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
        <img
          src="/img/logos/logo.webp"
          alt="Profile Placeholder"
          className="w-24 h-24 bg-black lg:w-32 lg:h-32 rounded-full border-4 border-gold-500"
        />
        <h6 className="font-semibold text-2xl lg:text-3xl text-gray-800">
          Your Profile Awaits! ✨
        </h6>
        <p className="text-gray-600">
          Complete your profile now to unlock exclusive collections, personalized recommendations, and special member-only offers.
        </p>
        <button onClick={() => setCompleteProfileForm(true)} className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition">
          Complete Profile
        </button>
      </div>
    );
  };


  return (
    <div className="userProfile bg-[#F3F1EC]">
      <div className="container space-y-8 mx-auto userProfile px-5 md:px-12 xl:px-32 py-5 md:py-10 lg:py-16">

        {/* User Profile Info */}
        <div className="w-full flex flex-col md:flex-row items-center gap-x-5 p-5 bg-gradient-to-br from-gray-200 to-gray-100 backdrop-blur-3xl rounded-2xl">
          <div className="relative">
            <img
              src="/img/user/userProfile1.png"
              alt="user_profile"
              className="w-24 h-24 lg:h-32 lg:w-32 border-8 border-gray-500 rounded-full"
            />
            <p className="p-2 px-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white w-fit absolute -bottom-3 left-1/2 transform -translate-x-1/2 rounded-full text-xs md:text-sm">
              10%
            </p>
          </div>
          <div className="text-center mt-5 md:text-left">
            <h5 className="text-2xl lg:text-4xl text-gray-800">user name</h5>
            <p className="text-lg lg:text-xl">user Email</p>
          </div>
        </div>

        {!profileComplete ? (<ProfileEmpty />) : (
          <div className="w-full flex flex-col md:flex-row items-start gap-x-5 p-5  bg-gradient-to-br from-gray-200 to-gray-100 backdrop-blur-3xl rounded-2xl">
            <div className="h-auto w-full rounded-2xl bg-white p-3  xl:p-2 flex flex-col lg:flex-row">

              {/* Tabs Sidebar */}
              <div className="w-full lg:px-4 lg:w-[40%] xl:w-[20%] flex items-center lg:items-start lg:flex-col space-y-1 overflow-auto md:overflow-visible">
                {tabs.map((elm, index) => (
                  <button
                    onClick={() => setCurrentTab(elm.tabName)}
                    key={index}
                    className={`${cuurentTab == elm.tabName ? "bg-blue-500 rounded border-2 border-blue-100 text-white" : ""} px-2 py-1 lg:py-2 text-lg block w-full md:w-auto text-nowrap`}
                  >
                    {elm.tabName}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="w-full bg-white mt-4 md:mt-0 p-4">
                {tabs.map((elm, index) => (
                  <div key={index} className={elm.tabName == cuurentTab ? "block" : "hidden"}>
                    {elm.tabVal}
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}


        {completePrfileForm && <CompleteProfileForm setCompleteProfileForm={setCompleteProfileForm} />}


      </div>
    </div>

  );
}
