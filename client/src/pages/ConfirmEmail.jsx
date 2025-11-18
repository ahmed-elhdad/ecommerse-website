"use client";
import React, { useContext, useState } from "react";
import AppContextProvider, { AppContext } from "../contexts/AppContext.jsx";
const ConfirmEmail = () => {
  const [user, setUser] = useState({
    photo: "../../public/chair.png",
    name: "afdsasfsdf",
  });
  const [status, setStatus] = useState("msg");
  return (
    <AppContextProvider>
      <div className="flex justify-center items-center p-1 min-h-screen bg-[#f0f0f0]">
        <div className="gap-4 flex justify-center flex-col items-center">
          <div
            className="flex gap-2 items-center justify-center border border-gray-500 rounded p-1 px-3"
            name="profile"
          >
            <img
              className="size-12 rounded-full"
              src={`${user.photo}`}
              alt=""
            />
            <div>
              <span>signed in as @{user.name}</span>
            </div>
          </div>
          <div className="p-3 gap-3 flex items-center justify-center flex-col m-1 border border-gray-400 rounded w-3xs">
            {status == "msg" ? (
              <>
                <p className="text-gray-700 font-light text-wrap">
                  When you are ready, trigger a mailer to verify your identity.
                </p>{" "}
                <button
                  onClick={() => {
                    setStatus("input");
                  }}
                  className="cursor-pointer px-12 first-letter:capitalize py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-center transition-colors"
                >
                  verify via email
                </button>
              </>
            ) : (
              <>
                <p>
                  Enter the verification code sent to {user.email}. If it
                  doesn’t appear within a few minutes, check your spam folder.
                </p>{" "}
                <input
                  type="text"
                  maxLength={4}
                  className="border border-gray-900 p-2 py-1 rounded outline-none"
                  placeholder="XXXXXXX"
                />
                <button
                  onClick={() => {}}
                  className="cursor-pointer px-12 first-letter:capitalize py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-center transition-colors"
                >
                  verify
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </AppContextProvider>
  );
};

export default ConfirmEmail;
