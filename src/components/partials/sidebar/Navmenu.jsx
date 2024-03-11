import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Collapse } from "react-collapse";
import Icon from "@/components/ui/Icon";
import { useDispatch } from "react-redux";
import useMobileMenu from "@/hooks/theme/useMobileMenu";
import { useTranslation } from "react-i18next";

const Navmenu = ({ menus }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { t, i18n } = useTranslation();
  const language = window.localStorage.getItem("language");

  const toggleSubmenu = (i) => {
    if (activeSubmenu === i) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(i);
    }
  };

  const location = useLocation();
  const locationName = location.pathname.replace("/", "");
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  const dispatch = useDispatch();

  const formatURL = () => {
    const url = locationName.split("/");
    const formatedURL = [];

    url.map((item, i) => {
      if (Number(item)) {
        return;
      } else {
        formatedURL.push(item);
      }
    });
    return formatedURL.join("/");
  };

  useEffect(() => {
    let submenuIndex = null;
    i18n.changeLanguage(language);
    const formatedLinkName = formatURL();
    let menuTitle = "";

    menus.map((item, i) => {
      if (!item.child) {
        if (item.link === locationName) {
          menuTitle = item.title;
        }
        return;
      }
      if (item.link === formatedLinkName) {
        submenuIndex = null;
        menuTitle = item.title;
      } else {
        const ciIndex = item.child.findIndex(
          (ci) => ci.childlink === formatedLinkName
        );
        if (ciIndex !== -1) {
          submenuIndex = i;
          const child = item.child[ciIndex];
          menuTitle = child.childtitle;
        }
      }
    });
    document.title = `IGT | ${t(menuTitle)}`;

    setActiveSubmenu(submenuIndex);

    if (mobileMenu) {
      setMobileMenu(false);
    }
  }, [location, language]);

  return (
    <>
    </>
  );
};

export default Navmenu;
