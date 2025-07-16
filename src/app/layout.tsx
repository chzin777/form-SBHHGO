// app/layout.tsx
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Workshop Inovação & Eficiência em Hotelaria</title>
        <meta
          name="description"
          content="Inscreva-se no nosso simpósio e descubra como transformar seus processos na hotelaria."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="relative">
        {children}
      </body>
    </html>
  );
}
