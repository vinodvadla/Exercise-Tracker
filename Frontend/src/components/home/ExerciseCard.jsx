import { BsTrash3 } from "react-icons/bs";
const ExerciseCard = ({
  duration,
  description,
  title,
  deleteOne,
}) => {
  return (
    <div className="lg:w-[85%] w-[100%] bg-white h-[140px] shadow-sm border border-gray-200 flex items-center justify-between rounded px-3 py-2">
      <div className="w-[90%] lg:w-[70%] h-full">
        <h1 className="text-xl text-blue-400 font-bold">{title}</h1>
        <p className="text-sm">{description}</p>
        <h2 className="text-xs font-bold">{duration}min</h2>
      </div>
      <div className="w-[15%] h-full flex items-center gap-3 justify-center">
        <div className="w-14 h-14 rounded flex items-center justify-center">
          <BsTrash3
            size={20}
            onClick={deleteOne}
            className=" text-blue-400 cursor-pointer font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
