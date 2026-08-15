const Marquee = () => {
  return (
    <section
      className="marquee-section relative mx-4 overflow-hidden rounded-xl border border-white/15 bg-bg"
      aria-label="Learning philosophy"
    >
      <div className="bg-panel relative flex items-center gap-3 border-b border-white/10 px-5 py-2 text-sm tracking-[0.18em] text-secondary-text">
        <span className="h-2 w-2 rounded-full bg-green shadow-[0_0_12px_#7ee0a8]" />
        <span>node_modules / philosophy.js</span>
        <span className="ml-auto hidden text-yellow sm:block">LIVE EXPORT</span>
      </div>

      <div className="relative overflow-hidden py-7">
        <div className="marquee-track flex w-max items-center whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div className="flex items-center gap-6 pr-6" key={copy} aria-hidden={copy === 1}>
              <p className="text-3xl tracking-wide text-primary-text sm:text-5xl">
                <span className="text-purple">import</span>{" "}
                <span className="text-yellow">*</span>{" "}
                <span className="text-purple">as</span>{" "}
                <span className="text-blue">knowledge</span>{" "}
                <span className="text-purple">from</span>{" "}
                <span className="text-green">mind</span>{" "}
                <span className="text-secondary-text">to</span>{" "}
                <span className="text-yellow">reality</span>
                <span className="text-secondary-text">;</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-between px-5 pb-3 text-sm tracking-[0.12em] text-secondary-text">
        <span>learning → making → shipping</span>
        <span className="text-green">● compiled successfully</span>
      </div>
    </section>
  );
};

export default Marquee;
