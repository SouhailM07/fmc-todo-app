import "./infopanel.css";

export default function InfoPanel() {
  return (
    <>
      <section className="flex  py-[0.6rem] justify-between px-[1rem] text-[0.7rem]">
        <p>5 items left</p>
        <ul className="flex space-x-[1rem]">
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
        <button>Clear Completed</button>
      </section>
    </>
  );
}
