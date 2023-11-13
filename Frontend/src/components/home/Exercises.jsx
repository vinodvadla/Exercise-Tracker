import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { useUserContext } from "../../../Hooks/useUserContext";
import axios from "axios";

export const Exercises = () => {
  let [workouts, setWorkouts] = useState([]);
  let { user } = useUserContext();

  let getworkouts = async () => {
    try {
      let res = await axios.get("http://localhost:5000/workouts/", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setWorkouts(res.data.workouts);
    } catch (error) {
      console.log(error);
    }
  };

  let deleteWorkout = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:5000/workouts/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      getworkouts();
    }
  });

  return (
    <div className="lg:w-[70%] w-[100%]  h-full flex justify-center gap-3 flex-wrap p-3 overflow-y-scroll scrollbar-thin">
      {workouts.map((e, i) => {
        return (
          <ExerciseCard
            key={i}
            duration={e.duration}
            description={e.description}
            title={e.title}
            deleteOne={() => {
              deleteWorkout(e._id);
            }}
          />
        );
      })}
    </div>
  );
};
