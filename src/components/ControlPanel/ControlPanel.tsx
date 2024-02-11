import "./controlpanel.css";
import Image from "next/image";
// components
import { MyInput } from "@/components";
export default function ControlPanel() {
  return (
    <>
      <article className=" space-y-[1rem]">
        <section className="flex justify-between items-center">
          <h1 className="font-bold text-[2rem] text-white">TODO</h1>
          <Image
            role="button"
            alt="logo"
            src="/icon-moon.svg"
            width={26}
            height={26}
          />
        </section>
        <section>
          <MyInput />
        </section>
      </article>
    </>
  );
}
