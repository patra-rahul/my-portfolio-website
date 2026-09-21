import { GitHubCalendar } from "react-github-calendar";

const Github = () => {
  return (
    <div
      className="bg-bg py-12 sm:py-24 md:py-32 border m-4 border-white/15 rounded-xl"
      id="Github"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-purple">
          Github
        </h2>

        <div className="mt-2 text-center">
          <h3 className="text-3xl font-semibold tracking-wider text-balance text-white sm:text-5xl">
            Where the code lives...
          </h3>

          <p className="hidden md:block mt-2 text-sm text-red-600 animate-flicker">
            Hover on any date to get more info
          </p>

          <p className="mt-2 text-sm text-secondary-text md:hidden">
            {"<-"} Scroll left-right to view full calendar {"->"} <br />
            <span className="text-red-600 animate-flicker">
              Tap on any grid to get more info
            </span>
          </p>
        </div>

        {/* Calendar */}
        <div className="text-white tracking-wider mt-10 overflow-x-auto max-w-full scrollbar-none">
          <div className="flex min-w-max justify-center px-4 py-10">
            <GitHubCalendar
              username="patra-rahul"
              year={new Date().getFullYear()}
              tooltips={{
                activity: {
                  text: ({ level, date }) =>
                    `${level} activities on ${new Date(date).toLocaleDateString("en-US")}`,
                  placement: "right",
                  offset: 6,
                  hoverRestMs: 300,
                  transitionStyles: {
                    duration: 100,
                  },
                  withArrow: true,
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
