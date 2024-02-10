import "./input.css";
// shadcn
export default function MyInput() {
  return (
    <>
      <div className="flex items-center bg-gray-500  px-[1rem]">
        <div className="border-2 border-red-500 h-[1rem] w-[1rem] rounded-full"></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="!outline-none py-[0.4rem] indent-[1rem] bg-gray-500 w-full"
        />
      </div>
    </>
  );
}
