"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import React, { useState } from "react";

const PersonalInfoForm2 = () => {
  const router = useRouter();
  const locale = useLocale();

  const pathname = usePathname();

  const shared = useTranslations("shared");
  const t = useTranslations("form");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Enviar el formulario al servidor
  };

  const handleChangeLanguage = (selectedLocale: string) => {
    router.replace(pathname, { locale: selectedLocale });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col text-white max-w-lg p-4 space-y-4"
    >
      <div className="flex gap-3">
        <div
          onClick={() => handleChangeLanguage("en")}
          className={`${
            locale === "en" ? "bg-slate-700 text-green-600" : "bg-slate-500"
          } hover:bg-slate-800 px-3 py-2 cursor-pointer`}
        >
          In english
        </div>

        <div
          onClick={() => handleChangeLanguage("es")}
          className={`${
            locale === "es" ? "bg-slate-700 text-green-600" : "bg-slate-500"
          } hover:bg-slate-800 px-3 py-2 cursor-pointer`}
        >
          In Spanish
        </div>
        <br />
        <br />
      </div>

      <input
        type="text"
        placeholder={t("name")}
        value={formData.name}
        className="w-full border rounded-md p-2 text-black"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder={t("email")}
        value={formData.email}
        className="w-full border rounded-md p-2 text-black"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <input
        type="text"
        placeholder={t("phone")}
        value={formData.phone}
        className="w-full border rounded-md p-2 text-black"
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <button type="submit">{shared("send")}</button>
    </form>
  );
};

export default PersonalInfoForm2;
