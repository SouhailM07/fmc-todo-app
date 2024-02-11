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
import { useEffect } from "react";
// assets
import Image from "next/image";

export default function NotesContainer() {
  // * api [start]
  // @ts-ignore
  let fetcher = (...args) => axios.get(...args);
  let { data, error, isLoading, mutate } = useSWR("/api/notes", fetcher);
  if (error) console.log(error);
  // * api [end]

  useEffect(() => {
    console.log("updating");
  }, []);
  return (
    <>
      <article className="w-full bg-very-light-gray rounded-md">
        <section>
          <ScrollArea className="h-[10rem]">
            <ul className="min-h-[8rem] ">
              {isLoading ? (
                <>
                  <Skeleton className="w-full h-[3rem] grid place-items-center">
                    loading
                  </Skeleton>
                  <Skeleton className="w-full h-[3rem] grid place-items-center">
                    loading
                  </Skeleton>
                  <Skeleton className="w-full h-[3rem] grid place-items-center">
                    loading
                  </Skeleton>
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
      <li className="note px-[1rem] flex py-[0.6rem] border-y-very-light-grayish-blue border text-very-dark-grayish-blue bg-transparent items-center justify-between">
        <div
          onClick={async () => {
            await axios.put(`/api/notes?id=${noteId}`);
            await f();
            console.log("check render");
          }}
          className="items-center flex"
        >
          <div
            className={`${
              done &&
              "bg-gradient-to-r from-check-background-start to-check-background-end"
            } border border-dark-grayish-blue h-[1rem] bg-no-repeat bg-center grid place-items-center w-[1rem] rounded-full`}
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
          onClick={async () => {
            await axios.delete(`/api/notes?id=${noteId}`);
            await f();
            console.log("check delete render");
          }}
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
