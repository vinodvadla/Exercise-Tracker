import React, { useState } from "react";
import { MdTitle, MdOutlineDescription } from "react-icons/md";
import { GiDuration } from "react-icons/gi";
import axios from "axios";
import { useUserContext } from "../../../Hooks/useUserContext";
function ExcerciseAdd() {
  let [title, setTitle] = useState("");
  let [des, setDes] = useState("");
  let [duration, setDuration] = useState("");
  let { user } = useUserContext();

  let addWorkout = async () => {
    let res = await axios.post(
      "http://localhost:5000/workouts/add",
      {
        title,
        description: des,
        duration,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    console.log(res.data);
    setDes("");
    setDuration("");
    setTitle("");
  };

  return (
    <div className="w-[100%] lg:w-[30%] h-full py-3 flex justify-center pt-10">
      <div className="w-[270px] lg:h-[70%] h-full  shadow-md rounded border border-gray-200 flex flex-col items-center pt-4 gap-4">
        <h1 className="text-blue-600 text-xl font-bold">Add New</h1>
        <div className="w-[90%] h-[45px] rounded shadow-sm border flex items-center justify-center border-gray-200">
          <div className="w-[15%] h-full flex items-center justify-center">
            <MdTitle size={20} />
          </div>
          <div className="w-[80%] h-full">
            <input
              type="text"
              placeholder="Enter Title..."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-full h-full text-md border-none outline-none font-semibold"
            />
          </div>
        </div>
        <div className="w-[90%] h-[45px] rounded shadow-sm border flex items-center justify-center border-gray-200">
          <div className="w-[15%] h-full flex items-center justify-center">
            <MdOutlineDescription size={20} />
          </div>
          <div className="w-[80%] h-full">
            <input
              type="text"
              value={des}
              onChange={(e) => {
                setDes(e.target.value);
              }}
              placeholder="Description"
              className="w-full h-full text-md border-none outline-none font-semibold"
            />
          </div>
        </div>
        <div className="w-[90%] h-[45px] rounded shadow-sm border flex items-center justify-center border-gray-200">
          <div className="w-[15%] h-full flex items-center justify-center">
            <GiDuration size={20} />
          </div>
          <div className="w-[80%] h-full">
            <input
              type="text"
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              placeholder="Duration..."
              className="w-full h-full text-md border-none outline-none font-semibold"
            />
          </div>
        </div>
        <button
          onClick={addWorkout}
          className="w-[100px] h-[40px] bg-blue-400 text-white font-bold rounded border border-gray-200 shadow-md"
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default ExcerciseAdd;
