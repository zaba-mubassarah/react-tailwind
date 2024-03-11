// import React from "react";
// import { Link } from "react-router-dom";
// import LoginForm from "./common/login-form";
// import useDarkMode from "@/hooks/theme/useDarkMode";
// import { ToastContainer } from "react-toastify";
// // image import
// import LogoWhite from "@/assets/images/logo/logo-white.svg";
// import Logo from "@/assets/images/logo/logo.svg";
// import loginLogo from "@/assets/images/svg/loginTopLogo.svg";
// import Card from "@/components/ui/Card";
// import { useTranslation } from "react-i18next";
// import loginImage1 from '@/assets/images/svg/loginImage1.svg';
// import loginImage2 from '@/assets/images/svg/loginImage2.svg';
// import loginImage3 from '@/assets/images/svg/loginImage3.svg';
// import loginImage4 from '@/assets/images/svg/loginImage4.svg';
// import loginImage5 from '@/assets/images/svg/loginImage5.svg';
// import Language from "@/components/partials/header/Tools/Language";


// const login = () => {
//   const [isDark] = useDarkMode();
//   const { t } = useTranslation();
//   const loginCards = [
//     {
//       title: `${t("learningManagementSystem")}`,
//       image: `${loginImage1}`
//     },
//     {
//       title: `${t('eLibrary')}`,
//       image: `${loginImage2}`
//     },
//     {
//       title: `${t('eIgt')}`,
//       image: `${loginImage3}`
//     },
//     {
//       title: ` ${t('formativeAssesment')}`,
//       image: `${loginImage4}`
//     },
//     {
//       title: ` ${t('socialLearningSystem')}`,
//       image: `${loginImage5}`
//     },
//   ];

//   return (
//     <>
//       <ToastContainer />
//       <div className="loginWrapper">
//         <div className="lg-inner-column">
//           <div className="left-column relative z-[1] px-[200px]">
//             <div className="max-w-[220px] pt-10">
//               <Link to="/">
//                 <img src={isDark ? LogoWhite : Logo} alt="" className="mb-6" />
//               </Link>
//             </div>
//             <div className="flex flex-wrap mb-10">
//               {loginCards.map((data, index) => (
//                 <div className="w-1/3 p-2"
//                   key={index}>
//                   <Card
//                     className="relative h-[220px] w-[220px] hover:bg-lightWisteria-400"
//                   >
//                     <img
//                       src={data.image}
//                       style={{ cursor: 'pointer' }}
//                       alt="language svg"
//                     />
//                     <div className="flex justify-center mt-4">
//                       <p className="text-xs font-bold text-center">{data.title}</p>
//                     </div>
//                   </Card>
//                 </div>
//               ))}
//             </div>
//             <div className="text-center mt-15 text-xs mt-10 pt-10">
//              {t('text1')}
//             </div>
//             <div className="text-center text-xs">
//               {t('text2')}
//             </div>
//             <div className="text-center text-xs mb-10">
//               {t('text3')}
//             </div>
//           </div>
//           <div className="right-column relative">
//             <div className="inner-content h-full flex flex-col bg-violet-700">
//               <div className="flex justify-end m-10">
//                 <Language />
//               </div>
//               <div className="auth-box h-full flex flex-col justify-center">
//                 <div className="mobile-logo text-center mb-6 lg:hidden block">
//                   <Link to="/">
//                     <img
//                       src={isDark ? LogoWhite : Logo}
//                       alt=""
//                       className="mx-auto"
//                     />
//                   </Link>
//                 </div>
//                 <div className="text-center 2xl:mb-10 mb-4">
//                   <div className="mb-10">
//                     <img
//                       src={isDark ? loginLogo : loginLogo}
//                       alt=""
//                       className="mx-auto"
//                     />
//                   </div>
//                   <div className="text-whiteddd-50 text-base">
//                     {t('loginToEigt')}
//                   </div>
//                 </div>
//                 <LoginForm />
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default login;
