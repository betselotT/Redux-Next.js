import Headers from "./components/Headers";
import Providers from "./components/Providers";
import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <Headers />
          {children}
        </Providers>
      </body>
    </html>
  );
}
