import React, { useEffect, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "@/components/partials/header";
import Sidebar from "@/components/partials/sidebar";
import Settings from "@/components/partials/settings";
import useWidth from "@/hooks/theme/useWidth";
import useSidebar from "@/hooks/theme/useSidebar";
import useContentWidth from "@/hooks/theme/useContentWidth";
import useMenuHidden from "@/hooks/theme/useMenuHidden";
import Footer from "@/components/partials/footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MobileMenu from "../components/partials/sidebar/MobileMenu";
import useMobileMenu from "@/hooks/theme/useMobileMenu";
import MobileFooter from "@/components/partials/footer/MobileFooter";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Loading from "@/components/Loading";
import ilst1 from "@/assets/images/auth/ilst1.svg";

const Layout = () => {
  const { width, breakpoints } = useWidth();
  const [collapsed] = useSidebar();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    
  });

  const switchHeaderClass = () => {
    if (menuHidden) {
      return "ltr:ml-0 rtl:mr-0";
    } else if (collapsed) {
      return "ltr:ml-[72px] rtl:mr-[72px]";
    } else {
      return "ltr:ml-[248px] rtl:mr-[248px]";
    }
  };

  // content width
  const [contentWidth] = useContentWidth();

  const [menuHidden] = useMenuHidden();
  // mobile menu
  const [mobileMenu, setMobileMenu] = useMobileMenu();

  return (
    <>
     
      <Header  />
      

      <MobileMenu
        className={`${
          width < breakpoints.xl && mobileMenu
            ? "left-0 visible opacity-100  z-[9999]"
            : "left-[-300px] invisible opacity-0  z-[-999] "
        }`}
      />
      {/* mobile menu overlay*/}
      {width < breakpoints.xl && mobileMenu && (
        <div
          className="overlay bg-slate-900/50 backdrop-filter backdrop-blur-sm opacity-100 fixed inset-0 z-[999]"
          onClick={() => setMobileMenu(false)}
        ></div>
      )}
      <Settings />
      <div
        className={`content-wrapper transition-all duration-150 }`}
      >
        {/* md:min-h-screen will h-full*/}
     
        <div className="page-content page-min-height bg-whitepointer-50" style={{ backgroundImage: `url(${ilst1})`, backgroundSize: "cover" }}>
          <div
            className={
              contentWidth === "boxed" ? "container mx-auto" : "container-fluid"
            }
          >
            <Suspense fallback={<Loading />}>
              <Breadcrumbs />
              {<Outlet />}
            </Suspense>
          </div>
        </div>
      </div>
      {width < breakpoints.md && <MobileFooter />}
      {width > breakpoints.md && (
        <Footer className={width > breakpoints.xl ? switchHeaderClass() : ""} />
      )}
    </>
  );
};

export default Layout;
