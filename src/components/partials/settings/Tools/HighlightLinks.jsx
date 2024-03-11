import React from "react";
import Icon from "@/components/ui/Icon";
import useHighLightLink from "@/hooks/theme/useHighLightLink";
import { useTranslation } from "react-i18next";
import { Transition } from "@headlessui/react";

const HighlightLinks = () => {
  const { t } = useTranslation();
  const [isHighLightLink, setHighLightLink] = useHighLightLink();
  return (
    <>
      <div
        className={`flex ${
          isHighLightLink ? "bg-slate-300" : "bg-slate-100"
        } border-0 rounded-s-md cursor-pointer`}
        onClick={() => setHighLightLink(!isHighLightLink)}
      >
        <span className="bg-black-500 border-4 border-zinc-600 rounded-lg p-1 -ml-2">
          <Icon
            className="mx-2 text-xl text-white rounded"
            icon="material-symbols:attach-file-rounded"
          />
        </span>
        <div className="text-lg  text-black-500 font-bold p-1">
          {t("highlightLinks")}
        </div>
      </div>
    </>
  );
};

export default HighlightLinks;
