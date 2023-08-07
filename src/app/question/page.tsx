"use client";

import Link from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";

const Question = () => {
  const locale = useLocale();
  const pathname = usePathname();

  const sharedM = useTranslations("shared");
  const t = useTranslations("question");

  return (
    <div className="flex flex-col h-full p-4 gap-6 text-white">
      <div className="flex gap-3">
        <Link
          href={pathname}
          locale="en"
          className={`${
            locale === "en" ? "bg-slate-700 text-green-600" : "bg-slate-500"
          } hover:bg-slate-800 px-3 py-2`}
        >
          In english
        </Link>

        <Link
          href={pathname}
          locale="es"
          className={`${
            locale === "es" ? "bg-slate-700 text-green-600" : "bg-slate-500"
          } hover:bg-slate-800 px-3 py-2`}
        >
          In Spanish
        </Link>
        <br />
        <br />
      </div>

      <p>{sharedM("confirm")} </p>
      <p>Rendering messages</p>

      <div className="flex flex-col h-full gap-3 p-4">
        <p>{t("static")} </p>
        <p>{t("interpolation", { name: "Jane" })} </p>
        <p>{t("plural", { numMessages: 3 })} </p>
        <p>{t("select", { gender: "female" })} </p>
        <p>{t("selectordinal", { year: 11 })} </p>
        <p>{t("escaped", { name: "David" })} </p>
      </div>

      <div className="flex flex-col h-full gap-3 p-4">
        <p>Rich text</p>
        <div>
          {t.rich("richText", {
            important: (chunks) => <b>{chunks}</b>,
            very: (chunks) => <i>{chunks}</i>,
          })}
        </div>
      </div>

      <div className="flex flex-col h-full gap-3 p-4">
        <p>Arrays of messages</p>
        <div>
          <ul>
            {["zero-config", "customizable", "fast"].map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>

          <ul>
            {t.rich("Benefits.items", {
              item: (chunks) => <li>{chunks}</li>,
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Question;
