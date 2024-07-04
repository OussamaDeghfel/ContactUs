import { useState } from "react";
import validation from "./validation";

function App() {
  // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    general: false,
    support: false
  });
  const [errors, setErrors] = useState({});
  const [radioBtn, setRadioBtn] = useState(false);

  function handleChange(e: any) {
    const newObj = { ...values, [e.target.name]: e.target.value };
    setValues(newObj);
  }

  function validateForm(e) {
    e.preventDefault();
    setErrors(validation(values));
  }

  return (
    <>
      <div className="shadow-md rounded-lg h-[600px] w-[600px] bg-white m-auto">
        <div className="m-5 p-2">
          <h1 className="font-bold text-2xl py-2">Contact Us</h1>
          <form onSubmit={validateForm}>
            <div className="flex">
              <div className="flex flex-col">
                <label className="py-2">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  className="p-2 cursor-pointer py-2 border-2 w-[262px] border-gray-400 rounded-md flex-wrap focus:outline-none focus:border-green-700"
                  onChange={handleChange}
                />
                {errors.firstname && (
                  <span className="text-red-500">{errors.firstname}</span>
                )}
              </div>
              <div className="flex flex-col ml-5">
                <label className="py-2">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  className="p-2 cursor-pointer py-2 border-2 w-[262px] border-gray-400 rounded-md flex- focus:outline-none focus:border-green-700"
                  onChange={handleChange}
                />
                {errors.lastname && (
                  <span className="text-red-500">{errors.lastname}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <label className="py-2">Email Address</label>
              <input
                type="email"
                className="p-2 py-2 border-2 w-full border-gray-400 rounded-md flex-wrap focus:outline-none focus:border-green-700"
                name="email"
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>
            <div className="mt-2">
              <label className="py-4">Query type</label>
              <div className="flex justify-between mt-2 cursor-pointer">
                <div className="border-gray-400 border-2 rounded-md py-2 w-full m-2">
                  <label className="px-4">
                    <input
                      type="radio"
                      name="general"
                      className="accent-green-700"
                      onClick={() => setRadioBtn(true)}
                    />{" "}
                    <span className="px-4">General Enquiry</span>
                  </label>
                </div>
                <div className="border-gray-400 border-2 rounded-md py-2 w-full m-2">
                  <label className="px-4">
                    <input
                      type="radio"
                      name="support"
                      className="accent-green-700"
                    />{" "}
                    <span className="px-4">Support Request</span>
                  </label>
                </div>

                {/* <input type="radio" id="html" name="fav_language" value="HTML" />
                <label htmlFor="html">HTML</label>
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label htmlFor="css">CSS</label> */}
              </div>
              <div className="flex flex-col">
                <label htmlFor="textmessage" className="my-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  cols="50"
                  className="p-2 border-2 border-gray-400 rounded-md flex-wrap focus:outline-none focus:border-green-700"
                />
                {errors.message && (
                  <span className="text-red-500">{errors.message}</span>
                )}
              </div>
              <div className="flex my-4">
                <input type="checkbox" className="accent-green-700" />
                <label className="mx-2">
                  I consent to be contacted by the team{" "}
                </label>
              </div>
              <button
                type="submit"
                className="w-full text-center bg-green-700 rounded-md text-white p-2 mt-2 focus:outline-none focus:border-green-700"
              >
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
