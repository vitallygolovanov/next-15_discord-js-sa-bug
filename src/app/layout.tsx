import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minimal Create Next App",
  description: "Generated by create next app, simplified by me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}