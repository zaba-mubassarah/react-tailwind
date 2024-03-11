import React from "react";
import Icon from "@/components/ui/Icon";
import useShowHeading from "@/hooks/theme/useShowHeadings";
import { useTranslation } from "react-i18next";
import { Transition } from "@headlessui/react";

const ShowHeadings = () => {
  const { t } = useTranslation();
  const [isShowHeading, setShowHeading] = useShowHeading();
  return (
    <>
      <div
        className={`flex ${
          isShowHeading ? "bg-slate-300" : "bg-slate-100"
        } border-0 rounded-s-md cursor-pointer`}
        onClick={() => setShowHeading(!isShowHeading)}
      >
        <span className="bg-black-500 border-4 border-zinc-600 rounded-lg p-1 -ml-2">
          <Icon className="mx-2 text-xl text-white rounded" icon="bx:heading" />
        </span>
        <div className="text-lg  text-black-500 font-bold p-1">
          {t("showHeading")}
        </div>
      </div>
    </>
  );
};

export default ShowHeadings;
