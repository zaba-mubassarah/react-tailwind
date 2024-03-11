import React from "react";
import Icon from "@/components/ui/Icon";
import useMonoChrome from "@/hooks/theme/useMonoChrome";
import { useTranslation } from "react-i18next";
import { Transition } from "@headlessui/react";

const Monochrome = () => {
  const { t } = useTranslation();
  const [isMonoChrome, setMonoChrome] = useMonoChrome();
  return (
    <>
      <div
        className={`flex ${
          isMonoChrome ? "bg-slate-300" : "bg-slate-100"
        } border-0 rounded-s-md cursor-pointer`}
        onClick={() => setMonoChrome(!isMonoChrome)}
      >
        <span className="bg-black-500 border-4 border-zinc-600 rounded-lg p-1 -ml-2">
          <Icon
            className="mx-2 text-xl text-white rounded"
            icon="material-symbols:accessibility"
          />
        </span>
        <div className="text-lg  text-black-500 font-bold p-1">
          {t("monochrome")}
        </div>
      </div>
    </>
  );
};

export default Monochrome;
