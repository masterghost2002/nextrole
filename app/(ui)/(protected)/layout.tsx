import { QuickBar, SideBar } from './components';
export default async function ProtectedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full flex-col bg-background md:flex-row">
      {/* Left Sidebar - fixed height with no scroll */}
      <div className="fixed bottom-0 w-full flex-1 border-t-[2px] border-neutral-500 md:static md:flex md:w-auto md:justify-end md:overflow-hidden md:border-r-[2px] md:border-t-0">
        <SideBar />
      </div>

      {/* Main Content - scrollable */}
      <main className="w-full flex-1 flex-shrink-0 overflow-y-auto md:w-[700px] md:flex-none md:flex-shrink">
        {children}
      </main>

      {/* Right Section - fixed height with no scroll */}
      <div className="hidden flex-1 border-l-[2px] border-neutral-500 md:flex md:overflow-hidden">
        <QuickBar />
      </div>
    </div>
  );
}
