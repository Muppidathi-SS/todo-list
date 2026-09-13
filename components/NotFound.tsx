import NotFoundIcon from "@/public/icons/NotfoundIcon";

export default function NotFound() {
  return (
    <>
      {" "}
      <div className="flex flex-col justify-center items-center gap-2 mt-50">
        <NotFoundIcon color="var(--theme-color)" />
        <h2
          className="font-medium text-3xl"
          style={{ color: "var(--theme-color)" }}
        >
          No Tasks Added Today, Aadhi!
        </h2>
        <p
          style={{
            color: "color-mix(in srgb, var(--theme-color) 80%, transparent)",
          }}
        >
          you haven't added any tasks for today. Add a new task to get started.
        </p>
      </div>
    </>
  );
}
