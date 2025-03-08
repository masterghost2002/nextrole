import { QuickBar, SideBar } from "./components";
export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-background ">
      {/* Left Sidebar */}
      <div className="flex-1 border-r-[2px] border-neutral-500 flex justify-end">
        <SideBar />
      </div>

      {/* Main Content */}
      <main className="w-[700px] flex-shrink-0 flex h-full overflow-y-auto">
        {children}
      </main>

      {/* Right Section */}
      <div className="flex-1 border-l-[2px]  border-neutral-500 flex">
        <QuickBar />
      </div>
    </div>
  );
}
