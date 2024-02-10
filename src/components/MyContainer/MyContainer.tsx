import "./mycontainer.css";
// components
import { ControlPanel, NotesContainer } from "@/components";

export default function MyContainer() {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center">
        <div className="border-2 border-black min-w-[26rem] space-y-[2rem]">
          <ControlPanel />
          <NotesContainer />
          <p className="text-center text-[0.8rem]">Drag and drop</p>
        </div>
      </main>
    </>
  );
}
