export const runtime = "edge";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-4xl font-black text-[#03051E] relative group">
          Next<span className="text-[#D91656]">Role</span>
          <div className="absolute -bottom-2 left-0 w-0 h-1 bg-[#D91656] group-hover:w-full transition-all duration-300"></div>
        </h1>

        <div className="flex justify-center space-x-3 sm:space-x-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 sm:w-4 sm:h-4 bg-[#D91656] shadow-retro-sm animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        <div className="w-48 sm:w-64 h-3 bg-neutral-100 border-2 border-[#D91656] shadow-retro-sm">
          <div className="h-full bg-[#D91656] animate-progress" />
        </div>

        <p className="font-terminal text-base sm:text-lg text-[#03051E] animate-blink">
          SYSTEM INITIALIZING...
        </p>
      </div>
    </div>
  );
}
