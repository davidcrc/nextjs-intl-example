import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    defaultTranslationValues: {
      important: (chunks) => "<b>{chunks}</b>",
      value: 123,
    },
  };
});
