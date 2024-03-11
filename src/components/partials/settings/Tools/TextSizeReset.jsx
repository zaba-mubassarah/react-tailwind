import React from "react";
import useFontSize from "@/hooks/theme/useFontSize";
import Tooltip from "@/components/ui/Tooltip";
import { useTranslation } from "react-i18next";
import { Transition } from "@headlessui/react";

const TextSizeReset = () => {
  const { t } = useTranslation();
  const [fontSize, setFontSize] = useFontSize();
  return (
    <>
      <Tooltip content={t("a.reset.tooltip")}>
        <button
          className="bg-neutral-900 h-10 w-10 my-2 text-lg text-white font-bold rounded p-2"
          onClick={() => setFontSize(16)}
        >
          {t("a.reset")}
        </button>
      </Tooltip>
    </>
  );
};

export default TextSizeReset;
