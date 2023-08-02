import { useFormatter, useLocale, useTranslations } from "next-intl";
import Link from "next-intl/link";

const MyPage = () => {
  const locale = useLocale();

  const format = useFormatter();
  const intl = useTranslations("home");

  return (
    <div className="flex flex-col p-8">
      <div className="flex flex-col gap-3">
        <div>
          <Link
            href="/question"
            // locale={locale}  // maybe is not necessary send locale
            className="bg-green-500 hover:bg-green-600 px-3 py-2"
          >
            To questions
          </Link>
        </div>
        <div>
          <Link
            href="/form"
            // locale={locale}  // maybe is not necessary send locale
            className="bg-green-500 hover:bg-green-600 px-3 py-2"
          >
            To form
          </Link>
        </div>

        <br />

        <div>
          <Link
            href="/"
            locale="en"
            className={`${
              locale === "en" ? "bg-slate-700 text-green-600" : "bg-slate-500"
            } hover:bg-slate-800 px-3 py-2`}
          >
            In english
          </Link>

          <Link
            href="/"
            locale="es"
            className={`${
              locale === "es" ? "bg-slate-700 text-green-600" : "bg-slate-500"
            } hover:bg-slate-800 px-3 py-2`}
          >
            In Spanish
          </Link>
        </div>
        <br />
        <br />
      </div>
      <h1 className="text-white">{intl("static")}</h1>
    </div>
  );
};

export default MyPage;
