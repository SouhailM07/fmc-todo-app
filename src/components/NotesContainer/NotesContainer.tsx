"use client";
import "./notescontainer.css";
// api functions
import { noteState } from "@/lib/apiFunctions";
// shadcn-ui
import { Skeleton } from "../ui/skeleton";
import { ScrollArea } from "../ui/scroll-area";
// components
import { InfoPanel } from "@/components";
//
import axios from "axios";
import useSWR from "swr";
import { useState, useEffect } from "react";
// assets
import Image from "next/image";

export default function NotesContainer() {
  let [notes, setNotes]: any = useState([""]);
  let [skeleton, setSkeletons] = useState<boolean>(false);
  let getData = () => {
    // setSkeletons(true);
    axios.get("/api/notes").then((data) => {
      // setSkeletons(false);
      setNotes(data.data.notes);
    });
  };
  // @ts-ignore
  let fetcher = (...args) => axios.get(...args);
  let { data, error, isLoading, mutate } = useSWR("/api/notes", fetcher);
  if (isLoading) console.log("loading");

  useEffect(() => {
    console.log("updating");
  }, []);
  return (
    <>
      <article className="w-full border-2 border-green-500">
        <section>
          <ScrollArea className="h-[10rem]">
            <ul className="min-h-[8rem] ">
              {skeleton ? (
                <>
                  <Skeleton className="w-full h-[3rem]" />
                  <Skeleton className="w-full h-[3rem]" />
                  <Skeleton className="w-full h-[3rem]" />
                </>
              ) : (
                data?.data.notes.map((e, i) => {
                  return (
                    <Note
                      key={i}
                      note={e.note}
                      done={e.done}
                      noteId={e["_id"]}
                      f={() => mutate()}
                    />
                  );
                })
              )}
            </ul>
          </ScrollArea>
        </section>
        <InfoPanel />
      </article>
    </>
  );
}

let Note = ({ note, done, noteId, f }) => {
  return (
    <>
      <li className="note px-[1rem] flex py-[0.6rem] bg-gray-400 items-center justify-between">
        <div
          onClick={() => {
            noteState(noteId).then(async () => {
              await axios.put(`/api/notes?id=${noteId}`);
              await f();
              console.log("check render");
            });
          }}
          className="items-center flex"
        >
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
          src="icon-cross.svg"
          role="button"
          alt="logo"
          aria-label="delete button"
        />
      </li>
    </>
  );
};
