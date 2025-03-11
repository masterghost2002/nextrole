export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="space-y-6 text-center sm:space-y-8">
        <h1 className="group relative text-2xl font-black text-[#03051E] sm:text-4xl">
          Next<span className="text-[#D91656]">Role</span>
          <div className="absolute -bottom-2 left-0 h-1 w-0 bg-[#D91656] transition-all duration-300 group-hover:w-full"></div>
        </h1>

        <div className="flex justify-center space-x-3 sm:space-x-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-3 w-3 animate-bounce bg-[#D91656] shadow-retro-sm sm:h-4 sm:w-4"
              style={{
                animationDelay: `${i * 0.15}s`
              }}
            />
          ))}
        </div>

        <div className="h-3 w-48 border-2 border-[#D91656] bg-neutral-100 shadow-retro-sm sm:w-64">
          <div className="animate-progress h-full bg-[#D91656]" />
        </div>

        <p className="animate-blink font-terminal text-base text-[#03051E] sm:text-lg">
          SYSTEM INITIALIZING...
        </p>
      </div>
    </div>
  );
}
