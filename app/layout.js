import "./globals.css";

export const metadata = {
  title: "Calculadora para condimentos",
  description: "Calculadora para condimentos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="p-4">{children}</body>
    </html>
  );
}
