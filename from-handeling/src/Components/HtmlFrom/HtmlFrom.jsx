/* eslint-disable no-irregular-whitespace */
import { useState } from "react";

const HtmlFrom = () => {
  const [formData, setFromData] = useState({ vehicle: [] });
  console.log(formData);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFromData((prev) => ({
          ...prev,
          [name]: [...prev[name], value],
        }));
      } else {
        setFromData((prev) => ({
          ...prev,
          [name]: prev[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFromData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  return (
    <>
      <div className="container mx-auto bg-slate-100">
        <h2 className="text-center py-10 text-3xl text-rose-400 font-bold">
          This is From Handling
        </h2>
        <div className="flex justify-around">
          <div className="basis=5/12 bg-gray-400">
            <h2 className="text-center my-5 text-2xl text-sky-100 font-bold p-5">
              This is From Elements
            </h2>

            <form className="grid grid-cols-2 gap-0 space-y-2 p-5" action="">
              <label className="m-3 rounded text-white" htmlFor="name">
                Name:
              </label>
              <input
                onChange={handleFormChange}
                className="m-3 rounded p-1"
                type="text"
                name="name"
                id="name"
              />

              <label className="m-3 rounded text-white" htmlFor="email">
                email:
              </label>
              <input
                onChange={handleFormChange}
                className="m-3 rounded p-1"
                type="email"
                name="email"
                id="email"
              />

              <label className="m-3 rounded text-white" htmlFor="name">
                Phone:
              </label>
              <input
                onChange={handleFormChange}
                className="m-3 rounded p-1"
                type="tel"
                name="phoneNumber"
              />

              <label className="m-3 rounded text-white" htmlFor="name">
                Date of Birth:
              </label>
              <input
                onChange={handleFormChange}
                className="m-3 rounded p-1"
                type="date"
                name="birthday"
              />

              <label className="m-3 rounded text-white" htmlFor="name">
                AGE:
              </label>
              <input
                onChange={handleFormChange}
                className="m-3 rounded p-1"
                type="number"
                name="age"
              />

              <div className="px-5 text-white">
                <h2 className="text-xl text-sky-600 font-bold">Gender</h2>
                <input
                  onChange={handleFormChange}
                  type="radio"
                  id="Male"
                  name="gender"
                  value="Male"
                />
                  <label>Male</label>
                <br /> {" "}
                <input
                  onChange={handleFormChange}
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                />
                  <label>Female</label>
                <br /> {" "}
                <input
                  onChange={handleFormChange}
                  type="radio"
                  id="other"
                  name="gender"
                  value="Other"
                />
                  <label>Other</label>
                <br />
                <br />
              </div>

              <div className="px-5 text-white">
                <h2 className="text-xl text-sky-600 font-bold">
                  Have Vehicles
                </h2>
                <input
                  onChange={handleFormChange}
                  type="checkbox"
                  name="vehicle"
                  value="bike"
                />
                  <label>I Have a Bike</label>
                <br /> {" "}
                <input
                  onChange={handleFormChange}
                  type="checkbox"
                  name="vehicle"
                  value="car"
                />
                  <label>I Have a car</label>
                <br /> {" "}
                <input
                  onChange={handleFormChange}
                  type="checkbox"
                  name="vehicle"
                  value="plane"
                />
                  <label>I Have a plane</label>
                <br />
                <br />
              </div>

              <div>
                <label htmlFor="">Chose your Country</label>
              <select onChange={handleFormChange} id="city" name="city" form="cityForm">
                <option value="Dhaka">Dhaka</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
                <option value="Cittagong">Chottogram</option>
              </select>
              </div>

              <label className="text-white p-2" htmlFor="level">
                English Skills{" "}
                <span className="text-blue-500 text-xl font-bold">
                  ({formData?.englishLevel})
                </span>
              </label>
              <input
                onChange={handleFormChange}
                type="range"
                min="0"
                max="100"
                name="englishLevel"
                id=""
              />

              <label htmlFor="Linked">ADD your LinkedIn Profile Url:</label>
              <input
                onChange={handleFormChange}
                type="url"
                name="LinkedIn"
                id=""
              />

              <label htmlFor="week">Add Week</label>
              <input
                onChange={handleFormChange}
                type="week"
                name="week"
                id=""
              />

              <label htmlFor="color">Your Favorite Color</label>
              <input
                onChange={handleFormChange}
                type="color"
                name="favoriteColor"
                id=""
              />

              <label htmlFor="time">Add Local data and Time</label>
              <input
                onChange={handleFormChange}
                type="datetime-local"
                name="localTime"
                id=""
              />

              <label htmlFor="file">Upload Profile pic</label>
              <input
                onChange={handleFormChange}
                type="file"
                name="Your picture"
                id=""
              />

              <label htmlFor="month">this is hidden type</label>
              <input
                onChange={handleFormChange}
                type="month"
                name="month"
                id=""
              />

              <label htmlFor="search">please search here</label>
              <input
                onChange={handleFormChange}
                type="search"
                name="search"
                id=""
              />

              <label htmlFor="time">what time you attend meeting</label>
              <input
                onChange={handleFormChange}
                type="time"
                name="time"
                id=""
              />

              <div className="flex justify-around">
                <input
                  className="w-28 m-3 px-2 text-white py-2 font-semibold  rounded bg-pink-400 cursor-pointer "
                  type="reset"
                  value="Reset Form"
                />
                <input
                  className="w-28 m-3 text-white py-2 font-semibold  rounded bg-sky-500 cursor-pointer "
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
          <div className="basis=5/12 bg-white">
            <h2 className="text-center my-5 text-3xl text-sky-400 font-bold p-5">
              From Output
            </h2>
            <div className="grid grid-cols-1 gap-5 px-5">
              <h2>
                {" "}
                <span className="font-bold">Name:</span> {formData?.name}
              </h2>
              <h2>
                {" "}
                <span className="font-bold">email:</span> {formData?.email}
              </h2>
              <h2>
                {" "}
                <span className="font-bold">Phone:</span>{" "}
                {formData?.phoneNumber}
              </h2>
              <h2>
                {" "}
                <span className="font-bold">Date of Birth:</span>{" "}
                {formData?.birthday}
              </h2>
              <h2>
                {" "}
                <span className="font-bold">Age:</span> {formData?.age}
              </h2>
              <h2>
                {" "}
                <span className="font-bold">Gender:</span> {formData?.gender}
              </h2>
              <h2>
                {" "}
                <span className="font-bold">Vehicles:</span>{" "}
                {formData?.vehicle?.join(", ")}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HtmlFrom;
