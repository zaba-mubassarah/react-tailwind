import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ensvg from '@/assets/images/svg/en.svg';
import bnsvg from '@/assets/images/svg/bn.svg';

const Language = () => {
  const selectedLanguage = window.localStorage.getItem("language");
  const [checked, setChecked] = useState(selectedLanguage === "bn");
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, []);

  const handleChange = () => {
    const lan = checked ? "en" : "bn";
    setChecked(!checked);
    i18n.changeLanguage(lan);
    window.localStorage.setItem("language", lan);
  };

  return (
    <div>
      {selectedLanguage == 'en' ? (
        <img
          src={ensvg}
          style={{ cursor: 'pointer' }}
          onClick={handleChange}
          alt="language svg"
        />
      ) : (
        <img
          src={bnsvg}
          style={{ cursor: 'pointer' }}
          onClick={handleChange}
          alt="language svg"
        />
      )}
    </div>
  );
};

export default Language;
