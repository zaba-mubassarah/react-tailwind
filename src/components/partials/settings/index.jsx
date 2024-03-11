import React, { Fragment } from "react";
import Icon from "@/components/ui/Icon";
import { useSelector, useDispatch } from "react-redux";
import { Transition } from "@headlessui/react";
import { handleCustomizer } from "@/store/layout";
import SimpleBar from "simplebar-react";
import Semidark from "./Tools/Semidark";
import RtlSwicth from "./Tools/Rtl";
import Skin from "./Tools/Skin";
import Theme from "./Tools/Theme";
import ContentWidth from "./Tools/ContentWidth";
import MenuClose from "./Tools/MenuClose";
import MenuHidden from "./Tools/MenuHidden";
import NavbarType from "./Tools/NavbarType";
import FooType from "./Tools/FooterType";
import useWidth from "@/hooks/theme/useWidth";
import Tooltip from "@/components/ui/Tooltip";
import { useTranslation } from "react-i18next";
import Monochrome from "./Tools/Monochrome";
import BigCursor from "./Tools/BigCursor";
import Reset from "./Tools/Reset";
import InvertColors from "./Tools/InvertColors";
import HighlightLinks from "./Tools/HighlightLinks";
import ShowHeadings from "./Tools/ShowHeadings";
import TextSizePlus from "./Tools/TextSizePlus";
import TextSizeReset from "./Tools/TextSizeReset";
import TextSizeMinus from "./Tools/TextSizeMinus";

const Setings = () => {
  const isOpen = useSelector((state) => state.layout.customizer);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // ** Toggles  Customizer Open
  const setCustomizer = (val) => dispatch(handleCustomizer(val));

  const { width, breakpoints } = useWidth();

  return (
    <div>
      {!isOpen && (
        <Tooltip
          content={t("accessibility")}
          placement="left"
          duration="700"
          animation="scale"
        >
          <div
            onClick={() => setCustomizer(true)}
            className="fixed ltr:md:right-[-10px] ltr:right-0 rtl:left-0 rtl:md:left-[-10px] top-1/2 z-[888] translate-y-1/2 bg-slate-800 text-slate-50 dark:bg-slate-700 dark:text-slate-300 cursor-pointer transform flex items-center text-lg font-medium ps-4 pe-6 py-3 shadow-deep ltr:rounded-b ltr:rounded-t rtl:rounded-t"
          >
            <div className="w-full flex justify-center">
              <Icon
                icon="material-symbols:accessibility"
                className="text-slate-50 text-lg"
              />
            </div>
          </div>
        </Tooltip>
      )}

      <div
        className={`
        setting-wrapper fixed ltr:right-0 rtl:left-0  md:w-[252px] w-[252px] dark:bg-slate-800  z-[9999]  shadow-base2  dark:shadow-base3 border border-slate-200 dark:border-slate-700 transition-all duration-150  top-1/4 rounded border-none
          ${
            isOpen
              ? "translate-x-0 opacity-100 visible"
              : "ltr:translate-x-full rtl:-translate-x-full opacity-0 invisible"
          }
        `}
      >
        <SimpleBar className="bg-zinc-600 ps-6 pb-3 ltr:rounded-b ltr:rounded-t">
          <header className="flex items-center justify-between">
            <div>
              <TextSizeMinus />
            </div>
            <div>
              <TextSizeReset />
            </div>
            <div>
              <TextSizePlus />
            </div>

            <div
              className="flex items-center justify-center cursor-pointer text-3xl text-white bg-neutral-900 dark:text-slate-200 me-2 h-7 w-7 rounded hover:bg-black-400"
              onClick={() => setCustomizer(false)}
            >
              <Icon icon="heroicons-outline:x" />
            </div>
          </header>
          <div className="space-y-2">
            <div>
              <Monochrome />
            </div>
            <div>
              <BigCursor />
            </div>
            <div>
              <InvertColors />
            </div>
            <div>
              <HighlightLinks />
            </div>
            <div>
              <ShowHeadings />
            </div>
            <div>
              <Reset />
            </div>
          </div>
        </SimpleBar>
      </div>

      <Transition as={Fragment} show={isOpen}>
        <div
          className="overlay bg-white bg-opacity-0 fixed inset-0 z-[999]"
          onClick={() => setCustomizer(false)}
        ></div>
      </Transition>
    </div>
  );
};

export default Setings;
