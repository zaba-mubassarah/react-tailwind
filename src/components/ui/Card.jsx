import React from "react";
import useSkin from "@/hooks/theme/useSkin";
import { useTranslation } from "react-i18next";

const Card = ({
  children,
  title,
  subtitle,
  headerslot,
  className = "custom-class",
  bodyClass = "p-6",
  noborder,
  titleClass = "custom-class",
}) => {
  const [skin] = useSkin();
  const { t } = useTranslation();
  return (
    <div
      className={`
        card rounded-md bg-white dark:bg-slate-800 ${
          skin === "bordered"
            ? " border border-slate-200 dark:border-slate-700 "
            : "shadow-base "
        } ${className}
        `}
    >
      {(title || subtitle) && (
        <header className={`card-header ${noborder ? "no-border" : ""}`}>
          <div>
            {title && (
              <div className={`card-title ${titleClass}`}>{t(title)}</div>
            )}
            {subtitle && <div className="card-subtitle">{t(subtitle)}</div>}
          </div>
          {headerslot && <div className="card-header-slot">{headerslot}</div>}
        </header>
      )}
      <main className={`card-body ${bodyClass}`}>{children}</main>
    </div>
  );
};

export default Card;
