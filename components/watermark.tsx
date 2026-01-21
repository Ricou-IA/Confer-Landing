export function Watermark() {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="h-[80%] w-[80%] max-w-[900px] max-h-[900px] opacity-[0.03] translate-x-[3%]"
          style={{
            backgroundImage: "url('/logo-watermark.svg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
    );
  }