import "./globals.css";

export const metadata = {
  title: "Candidate Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <main className="max-w-3xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
