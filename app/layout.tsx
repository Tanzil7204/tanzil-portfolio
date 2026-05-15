import "./globals.css";

export const metadata = {
  title: "Tanzil Portfolio",
  description: "Embedded AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}