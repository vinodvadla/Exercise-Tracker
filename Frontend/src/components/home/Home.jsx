import { useState } from "react";
import ExcerciseAdd from "./ExcerciseAdd";
import { Exercises } from "./Exercises";

function Home() {;


  return (
    <div className=" w-[100vw] lg:h-[88vh] h-[100vh] lg:flex-row flex-col-reverse items-center   flex justify-between">
      <Exercises />
      <ExcerciseAdd />
    </div>
  );
}

export default Home;
