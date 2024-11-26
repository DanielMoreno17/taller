import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Tailwind Project",
  description: "Aplicación creada con Next.js y Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <body
        className={`font-Poppins antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-primary text-white p-4">
          <h1 className="text-2xl font-bold">
            Bienvenido a mi Aplicación
          </h1>
        </header>
        <main className="flex-1 p-6">{children}</main>
        <footer className="bg-secondary text-foreground p-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
          </p>
        </footer>
      </body>
    </html>
  );
}
