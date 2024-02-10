"use client";
import "./notescontainer.css";
// components
import { InfoPanel } from "@/components";
//
import axios from "axios";
import { useState, useEffect } from "react";
// assets
import Image from "next/image";
import deleteIcon from "../../../public/icon-cross.svg";

export default function NotesContainer() {
  let [notes, setNotes]: any = useState([]);
  useEffect(() => {
    axios.get("/api/notes").then((data) => {
      setNotes(data.data.notes);
    });
  }, []);
  return (
    <>
      <article className="w-full border-2 border-green-500">
        <section>
          <ul className="min-h-[8rem] ">
            {notes.map((e, i) => {
              return <Note key={i} note={e.note} done={e.done} />;
            })}
          </ul>
        </section>
        <InfoPanel />
      </article>
    </>
  );
}

let Note = ({ note, done }) => {
  return (
    <>
      <li className="note px-[1rem] flex py-[0.6rem] bg-gray-400 items-center justify-between">
        <div className="items-center flex">
          <div
            className={`${
              done &&
              "bg-gradient-to-r from-check-background-start to-check-background-end"
            } border h-[1rem] bg-no-repeat bg-center grid place-items-center w-[1rem] rounded-full`}
          >
            <Image
              src="icon-check.svg"
              alt="img"
              width={11}
              height={11}
              className={done ? "block" : "hidden"}
            />
          </div>
          <p className="indent-[1rem]">{note}</p>
        </div>
        <Image
          width={14}
          height={14}
          src={deleteIcon}
          role="button"
          alt="logo"
          aria-label="delete button"
        />
      </li>
    </>
  );
};
