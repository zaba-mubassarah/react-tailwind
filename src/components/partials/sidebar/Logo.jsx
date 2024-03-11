import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import useDarkMode from "@/hooks/theme/useDarkMode";
import useSidebar from "@/hooks/theme/useSidebar";
import useSemiDark from "@/hooks/theme/useSemiDark";
import useSkin from "@/hooks/theme/useSkin";

// import images
import MobileLogo from "@/assets/images/logo/logo-c.svg";
import MobileLogoWhite from "@/assets/images/logo/logo-c-white.svg";

const SidebarLogo = ({ menuHover }) => {
  const [isDark] = useDarkMode();
  const [collapsed, setMenuCollapsed] = useSidebar();
  // semi dark
  const [isSemiDark] = useSemiDark();
  // skin
  const [skin] = useSkin();
  return (
    <>
    </>
  );
};

export default SidebarLogo;
