import { QuickBar, SideBar } from "./components";
export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-background">
      {/* Left Sidebar - fixed height with no scroll */}
      <div className="flex-1 fixed md:static w-full md:w-auto bottom-0 border-t-[2px] md:border-t-0 md:border-r-[2px] border-neutral-500 md:flex md:justify-end md:overflow-hidden">
        <SideBar />
      </div>

      {/* Main Content - scrollable */}
      <main className="w-full md:w-[700px] flex-shrink-0 md:flex-shrink md:flex-none flex-1 overflow-y-auto ">
        {children}
      </main>

      {/* Right Section - fixed height with no scroll */}
      <div className="hidden flex-1 border-l-[2px] border-neutral-500 md:flex md:overflow-hidden">
        <QuickBar />
      </div>
    </div>
  );
}
