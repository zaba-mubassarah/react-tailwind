import Tooltip from "@/components/ui/Tooltip";
import useFontSize from "@/hooks/theme/useFontSize";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const TextSizePlus = () => {
  const { t } = useTranslation();
  const [fontSize, setSize] = useFontSize();

  useEffect(() => {
    setSize(fontSize);
  }, [fontSize, setSize]);

  return (
    <>
      <Tooltip content={t("a.increase.tooltip")}>
        <button
          className={`h-10 w-10 my-2 text-lg text-white font-bold rounded p-2 ${
            fontSize >= 20 ? "bg-slate-500" : "bg-neutral-900"
          }`}
          onClick={() => setSize(fontSize + 1)}
          disabled={fontSize >= 20}
        >
          {t("a.increase")}
        </button>
      </Tooltip>
    </>
  );
};

export default TextSizePlus;
