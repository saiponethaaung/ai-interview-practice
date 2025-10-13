"use client";

import Image from "next/image";

interface IProps {
  fileUrl: string;
  mimeType: string;
}

export default function FileViewer({ fileUrl, mimeType }: IProps) {
  switch (mimeType) {
    case "image/png":
    case "image/jpeg":
    case "image/jpg":
    case "image/gif":
    case "image/webp":
      return <Image src={fileUrl} alt="File" style={{ maxWidth: "100%" }} />;

    case "application/pdf":
      return (
        <>
          <iframe
            src={fileUrl}
            width={"100%"}
            height={"100%"}
            style={{ minHeight: "70vh" }}
          />
        </>
      );

    default:
      return (
        <div>
          <h2>File Viewer</h2>
          <p>File URL: {fileUrl}</p>
          <p>MIME Type: {mimeType}</p>
        </div>
      );
  }
}
