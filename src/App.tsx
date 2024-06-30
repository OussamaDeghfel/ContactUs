import { useState } from "react";

function App() {
  const [valide, setValide] = useState(false)

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
  const handleSubmit = (e) => {
    if (emailRegex.test(e)) {
      setValide(true)
    } else {
      setValide(false)
    }
  }

  return (
    <>
      <div className="shadow-md rounded-lg h-[600px] w-[600px] bg-white m-auto">
        <div className="m-5 p-2">
          <h1 className="font-bold text-2xl py-2">Contact Us</h1>
          <form>
            <div className="flex">
              <div className="flex flex-col">
                <label className="py-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="p-2 cursor-pointer py-2 border-2 w-[262px] border-gray-400 rounded-md flex-wrap focus:outline-none focus:border-green-700"
                />
              </div>
              <div className="flex flex-col ml-5">
                <label className="py-2">Last Name</label>
                <input
                  type="text"
                  className="p-2 cursor-pointer py-2 border-2 w-[262px] border-gray-400 rounded-md flex- focus:outline-none focus:border-green-700"
                />
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <label className="py-2">Email Address</label>
              <input
                type="email"
                className="p-2 py-2 border-2 w-full border-gray-400 rounded-md flex-wrap focus:outline-none focus:border-green-700"
              />
            </div>
            <div className="mt-2">
              <label className="py-4">Query type</label>
              <div className="flex justify-between mt-2 cursor-pointer">
                <div className="py-2 px-6 border-2 w-[262px] border-gray-400 rounded-md flex-wrap cursor-pointer">
                  <input
                    type="radio"
                    id="general"
                    name="general"
                    value="General-enquiry"
                    className="accent-green-700"
                  />
                  <label className="px-4 ">General Enquiry</label>
                </div>
                <div className="py-2 px-6 border-2 w-[262px] border-gray-400 rounded-md flex-wrap cursor-pointer">
                  <input
                    type="radio"
                    id="Support"
                    name="Support"
                    value="Support-request"
                    className="accent-green-700"
                  />
                  <label className="px-4">Support Request</label>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="textmessage" className="my-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="50"
                  className="p-2 border-2 border-gray-400 rounded-md flex-wrap focus:outline-none focus:border-green-700"
                />
              </div>
              <div className="flex my-4">
                <input type="checkbox" className="accent-green-700" />
                <label className="mx-2">
                  I consent to be contacted by the team{" "}
                </label>
              </div>
              <button className="w-full text-center bg-green-700 rounded-md text-white p-2 mt-2 focus:outline-none focus:border-green-700">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
