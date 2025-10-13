import NextLink from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-[100vh] bg-gray-100">
      <div className="w-[180px] bg-gray-200 flex-col flex">
        <div>Logo</div>
        <div>
          <nav>
            <ul className="flex flex-col gap-2 p-4">
              <NextLink href="/app">Dashboard</NextLink>
              <NextLink href="/app/job">Job</NextLink>
              <NextLink href="/app/file">File</NextLink>
              <NextLink href="/app/file">Biography</NextLink>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex-1">
        <div className="h-[60px] p-4 bg-purple-200">Header</div>
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
