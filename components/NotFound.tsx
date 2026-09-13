import NotFoundIcon from "@/public/icons/NotfoundIcon";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-10 sm:mt-16 md:mt-20 px-4 text-center">
      <NotFoundIcon color="var(--theme-color)" />
      <h2
        className="font-medium text-xl sm:text-2xl md:text-3xl text-center"
        style={{ color: "var(--theme-color)" }}
      >
        No Tasks Added Today, Aadhi!
      </h2>
      <p
        className="text-xs sm:text-sm md:text-base text-center max-w-sm"
        style={{
          color: "color-mix(in srgb, var(--theme-color) 80%, transparent)",
        }}
      >
        you haven&apos;t added any tasks for today. Add a new task to get
        started.
      </p>
    </div>
  );
}
