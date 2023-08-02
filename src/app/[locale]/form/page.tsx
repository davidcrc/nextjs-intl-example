"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  phone: string;
};

const PersonalInfoForm = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const shared = useTranslations("shared");
  const t = useTranslations("form");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };

  const handleChangeLanguage = (selectedLocale: string) => {
    router.push(pathname, { locale: selectedLocale });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" max-w-lg p-4 space-y-4">
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
      <div>
        <label htmlFor="name" className="block mb-1 text-white">
          {t("name")}
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Este campo es obligatorio" })}
          className="w-full border rounded-md p-2"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 text-white">
          {t("email")}
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Este campo es obligatorio",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email inválido",
            },
          })}
          className="w-full border rounded-md p-2 text-black"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block mb-1 text-white">
          {t("phone")}
        </label>
        <input
          type="text"
          id="phone"
          {...register("phone", {
            required: "Este campo es obligatorio",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Número de teléfono inválido (solo números)",
            },
          })}
          className="w-full border rounded-md p-2"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {shared("send")}
      </button>
    </form>
  );
};

export default PersonalInfoForm;
