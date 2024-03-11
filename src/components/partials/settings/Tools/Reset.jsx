import React from "react";
import Icon from "@/components/ui/Icon";
import useMonoChrome from "@/hooks/theme/useMonoChrome";
import useInvertColor from "@/hooks/theme/useInvertColor";
import useHighLightLink from "@/hooks/theme/useHighLightLink";
import useShowHeading from "@/hooks/theme/useShowHeadings";
import useTextMinus from "@/hooks/theme/useTextMinus";
import useBigCursor from "@/hooks/theme/useBigCursor";
import useFontSize from "@/hooks/theme/useFontSize";
// import useTextZero from "@/hooks/theme/useTextZero";
import { useTranslation } from "react-i18next";
import { Transition } from "@headlessui/react";

const Reset = () => {
  const { t } = useTranslation();
  const [isMonoChrome, setMonoChrome, resetMonoChrome] = useMonoChrome();
  const [isInvertColor, setInvertColor, resetInvertColor] = useInvertColor();
  const [isHighLightLink, setHighLightLink, resetHighLightLink] =
    useHighLightLink();
  const [isShowHeading, setShowHeading, resetShowHeading] = useShowHeading();
  const [isTextMinus, setTextMinus, resetTextMinus] = useTextMinus();
  const [isBigCursor, toggleBigCursor, resetBigCursor] = useBigCursor();
  const [fontSize, setSize] = useFontSize();
  // const [isTextZero, setTextZero, resetText] = useTextZero();

  const handleReset = () => {
    resetMonoChrome();
    resetInvertColor();
    resetHighLightLink();
    resetShowHeading();
    resetBigCursor();
    resetTextMinus();
    const textSizeElement = document.querySelector("*");
    textSizeElement.style.fontSize = "";
    setSize(16);
  };

  return (
    <>
      <div
        className="flex bg-slate-100 border-0 rounded-s-md cursor-pointer hover:bg-slate-300"
        onClick={handleReset}
      >
        <span className="bg-black-500 border-4 border-zinc-600 rounded-lg p-1 -ml-2">
          <Icon
            className="mx-2 text-xl text-white rounded"
            icon="carbon:reset"
          />
        </span>
        <div className="text-lg text-black-500 font-bold p-1">{t("reset")}</div>
      </div>
    </>
  );
};

export default Reset;
