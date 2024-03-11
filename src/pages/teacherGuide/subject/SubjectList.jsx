import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import sub1 from "@/assets/images/svg/sub1.svg";
import sub2 from "@/assets/images/svg/sub2.svg";
import { useNavigate } from "react-router-dom";

const CommonFormat = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const selectedLanguage = window.localStorage.getItem("language");
  const subjects = [
    {
      title: `বাংলা ১ম পত্র`,
      image: `${sub1}`,
      iconColor: "[#1A79BD]",
      count: `${t("5")}`,
    },
    {
      title: `আইসিটি`,
      image: `${sub2}`,
      iconColor: "[#F42A41]",
      count: `${t("5")}`,
    },
    {
      title: `বাংলা ১ম পত্র`,
      image: `${sub1}`,
      iconColor: "[#1A79BD]",
      count: `${t("5")}`,
    },
    {
      title: `আইসিটি`,
      image: `${sub2}`,
      iconColor: "[#F42A41]",
      count: `${t("5")}`,
    },

  ];

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, []);

  
  return (
    <div className="flex justify-center mb-6">
      <h5>Hi Anin...design your page here</h5>
    </div>
  );
};

export default CommonFormat;
