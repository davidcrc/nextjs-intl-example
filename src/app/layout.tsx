import { notFound } from "next/navigation";
import useTextDirection from "@/hooks/useTextDirection";
import { LocaleProvider } from "@/context/LocaleContext";
import "./globals.css";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  // const direction = useTextDirection(params.locale);

  return (
    <html lang={"en"}>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
