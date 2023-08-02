import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import useTextDirection from "@/hooks/useTextDirection";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const direction = useTextDirection(params.locale);

  const locale = useLocale();
  console.log("params +", { params, locale });

  const messages = useMessages();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} dir={direction}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
