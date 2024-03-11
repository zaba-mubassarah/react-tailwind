import React from "react";
import Icon from "@/components/ui/Icon";
import SwitchDark from "./Tools/SwitchDark";
import useWidth from "@/hooks/theme/useWidth";
import useSidebar from "@/hooks/theme/useSidebar";
import useNavbarType from "@/hooks/theme/useNavbarType";
import useRtl from "@/hooks/theme/useRtl";
import useSkin from "@/hooks/theme/useSkin";
import Logo from "./Tools/Logo";
import SearchModal from "./Tools/SearchModal";
import Profile from "./Tools/Profile";
import Notification from "./Tools/Notification";
import Message from "./Tools/Message";
import Language from "./Tools/Language";
import useMobileMenu from "@/hooks/theme/useMobileMenu";
import MonoChrome from "./Tools/MonoChrome";
import { useTranslation } from "react-i18next";
import TextInput from "@/components/ui/TextInput";
import bnsvg from '@/assets/images/svg/headerLogo.svg';
import { useNavigate } from "react-router-dom";
import componentsSvg from '@/assets/images/svg/components.svg';

const Header = ({ className = "custom-class" }) => {
    const navigate = useNavigate();
const [collapsed, setMenuCollapsed] = useSidebar();
    const { width, breakpoints } = useWidth();
    const [navbarType] = useNavbarType();
    const { t } = useTranslation();
    const navbarTypeClass = () => {
        switch (navbarType) {
            case "floating":
                return "floating";
            case "sticky":
                return "sticky top-0 z-[999]";
            case "static":
                return "static";
            case "hidden":
                return "hidden";
            default:
                return "sticky top-0";
        }
    };
const [isRtl] = useRtl();
    const [skin] = useSkin();

    const [mobileMenu, setMobileMenu] = useMobileMenu();

    const handleOpenMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const borderSwitchClass = () => {
        if (skin === "bordered" && navbarType !== "floating") {
            return "border-b border-slate-200 dark:border-slate-700";
        } else if (skin === "bordered" && navbarType === "floating") {
            return "border border-slate-200 dark:border-slate-700";
        } else {
            return "dark:border-b dark:border-slate-700 dark:border-opacity-60";
        }
    };

    const navigateToMainPage = () => {
        navigate("/");
    }
    return (
        <header
            className={className + " " + navbarTypeClass()}
            style={{ zIndex: 1000 }}
        >
            <div className="bg bg-violet-700">
                <div className="h-[80px] mx-[75px] flex justify-between ">
                    <div className="flex flex-row py-[20px] w-[20%]">
                        <img src={bnsvg} alt="bnsvg logo" className="mr-2 h-[40px]" onClick={navigateToMainPage} />
                        <h5 className="text-[#FFFFFF] text-sm mt-2">
                            {t("app.name")}
                        </h5>
                    </div>
                    <div className="flex flex-row py-[20px] w-[80%] justify-end">
                        <TextInput
                            placeholder="এখানে অনুসন্ধান করুন"
                            className="" // Make the input field full-width
                        />
                        <div className="flex flex-row mx-6 ">
                            <img src={componentsSvg} alt="bnsvg logo" className="mx-2 mt-2 h-[20px]" />
                            <div className="text-white mt-2 text-sm">কম্পোনেন্টস</div>
                        </div>
                        <div className="flex items-center md:space-x-4 space-x-2 ml-[8px]">
                            <Notification></Notification>
                            <Language></Language>
                            <Profile></Profile>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
