import SidebarLayout from "@web/components/layout/sidebar/sidebar.layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-[100vh] bg-gray-100">
      <SidebarLayout />
      <div className="flex-1">
        <div className="h-[60px] p-4 bg-blue-200"></div>
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
