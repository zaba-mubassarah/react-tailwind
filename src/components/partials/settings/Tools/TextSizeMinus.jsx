import React, { useEffect } from "react";
import useFontSize from "@/hooks/theme/useFontSize";
import Tooltip from "@/components/ui/Tooltip";
import { useTranslation } from "react-i18next";

const TextSizeMinus = () => {
  const { t } = useTranslation();
  const [fontSize, setFontSize] = useFontSize();

  return (
    <>
      <Tooltip content={t("a.decrease.tooltip")}>
        <button
          className={`${
            fontSize <= 12 ? "bg-slate-500" : "bg-neutral-900"
          } h-10 w-10 my-2 text-lg text-white font-bold rounded p-2`}
          onClick={() => setFontSize(fontSize - 1)}
          disabled={fontSize <= 12}
        >
          {t("a.decrease")}
        </button>
      </Tooltip>
    </>
  );
};

export default TextSizeMinus;
