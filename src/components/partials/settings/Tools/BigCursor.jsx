import Red from "@/assets/pointer.svg";
import Icon from "@/components/ui/Icon";
import useBigCursor from "@/hooks/theme/useBigCursor";
import React from "react";
import { useTranslation } from "react-i18next";

const BigCursor = () => {
  const { t } = useTranslation();
  const [isBigCursor, toggleBigCursor] = useBigCursor();
  const cursorStyle = isBigCursor ? `url(${Red}), auto` : "";

  const handleToggleBigCursor = () => {
    toggleBigCursor();
  };

  return (
    <>
      <style>
        {`
         body {
           cursor: ${cursorStyle};
         }
       `}
      </style>

      <div
        onClick={handleToggleBigCursor}
        className={`flex ${
          isBigCursor ? "bg-slate-300" : "bg-slate-100"
        } bg-slate-100 border-0 rounded-s-md cursor-pointer`}
      >
        <span className="bg-black-500 border-4 border-zinc-600 rounded-lg p-1 -ml-2">
          <Icon className="mx-2 text-xl text-white rounded" icon="ph:cursor" />
        </span>
        <div className="text-lg text-black-500 font-bold p-1">
          {t("bigCursor")}
        </div>
      </div>
    </>
  );
};

export default BigCursor;
