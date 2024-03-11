import React from "react";
import Icon from "@/components/ui/Icon";
import useInvertColor from "@/hooks/theme/useInvertColor";
import { useTranslation } from "react-i18next";
import { Transition } from "@headlessui/react";

const InvertColors = () => {
  const { t } = useTranslation();
  const [isInvertColor, setInvertColor] = useInvertColor();
  return (
    <>
      <div
        className={`flex ${
          isInvertColor ? "bg-slate-300" : "bg-slate-100"
        } border-0 rounded-s-md cursor-pointer`}
        onClick={() => setInvertColor(!isInvertColor)}
      >
        <span className="bg-black-500 border-4 border-zinc-600 rounded-lg p-1 -ml-2">
          <Icon
            className="mx-2 text-xl text-white rounded"
            icon="material-symbols-light:water-drop-rounded"
          />
        </span>
        <div className="text-lg  text-black-500 font-bold p-1">
          {t("invertColor")}
        </div>
      </div>
    </>
  );
};

export default InvertColors;
