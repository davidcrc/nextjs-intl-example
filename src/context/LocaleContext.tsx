"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import cookieCutter from "cookie-cutter";
import en from "../../messages/en.json";

export const LocaleContext =
  createContext<{
    locale: any;
    switchLanguage: (locale: string) => void;
    messages: IntlMessages;
  } | null>(null);

const getMessages = async (locale: string): Promise<IntlMessages> => {
  const selected = locale || "en";
  console.log("get", selected);

  let messages;
  try {
    messages = (await import(`../../messages/${selected}.json`)).default;

    console.log("get", messages);
    // setMessages(messages);
    return messages;
  } catch (error) {
    return en;
    // setMessages(messages);
  }
};

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState<IntlMessages>(en);

  // const otroGet = useCallback(async () => {
  //   setMessages(await getMessages(locale));
  // }, [locale]);

  const switchLanguage = async (locale: string) => {
    cookieCutter.set("NEXT_LOCALE", locale);
    setMessages(await getMessages(locale));
  };

  useEffect(() => {
    // Aquí puedes leer la cookie o cualquier otro mecanismo para inicializar el valor del locale
    // const storedLocale = localStorage.getItem("locale");
    // if (storedLocale) {
    //   setLocale(storedLocale);
    // }
    const storedLocale = cookieCutter.get("NEXT_LOCALE");

    console.log("cc", storedLocale);

    if (!!cookieCutter.get("NEXT_LOCALE")) {
      setLocale(storedLocale);
      switchLanguage(storedLocale);
    }
    // otroGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   // Aquí puedes guardar el valor del locale en la cookie o donde prefieras cuando cambie
  //   // localStorage.setItem("locale", locale);
  //   // if(!cookieCutter.get("NEXT_LOCALE")){}
  //   console.log("cambia el contet locale a", locale);
  //   // cookieCutter.set("NEXT_LOCALE", locale);
  //   // otroGet();
  // }, [otroGet, locale]);

  return (
    <LocaleContext.Provider value={{ locale, switchLanguage, messages }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = () => {
  const context = useContext(LocaleContext);

  if (context === null) {
    throw new Error("Locale context was used outside of a provider");
  }

  return context;
};
