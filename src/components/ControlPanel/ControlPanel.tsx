import "./controlpanel.css";
// components
import { MyInput } from "@/components";
export default function ControlPanel() {
  return (
    <>
      <article className="border-2 border-blue-500 space-y-[1.7rem]">
        <section className="flex justify-between">
          <h1 className="font-bold text-[2rem]">TODO</h1>
          <button>btn</button>
        </section>
        <section>
          <MyInput />
        </section>
      </article>
    </>
  );
}
