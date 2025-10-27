import SidebarLayout from "@web/components/layout/sidebar/sidebar.layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-[100vh] bg-background-light dark:bg-background-dark">
      <SidebarLayout />
      <div className="flex-1 bg-[var(--background-light)] dark:bg-[var(--background-dark)] overflow-auto">
        {/* <div className="flex flex-col justify-center items-start h-[60px] p-4 py-10 bg-blue-200"></div> */}
        <div
          className="flex flex-col overflow-auto"
          style={{ height: "calc(100vh - 60px)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
