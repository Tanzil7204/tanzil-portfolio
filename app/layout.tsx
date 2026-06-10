import "./globals.css";

export const metadata = {
  title: "Tanzil Portfolio",
  description: "Embedded AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased overflow-x-hidden">
        {/* subtle noise layer to remove AI-template feel */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[url('/noise.png')]" />

        {/* soft global gradient (human premium feel) */}
        <div className="fixed inset-0 bg-gradient-to-b from-black via-[#050816] to-black" />

        {children}
      </body>
    </html>
  );
}