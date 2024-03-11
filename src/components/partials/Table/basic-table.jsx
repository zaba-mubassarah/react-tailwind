import React, { useState } from "react";
import Pagination from "@/components/ui/Pagination";
import TextInput from "@/components/ui/TextInput";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const GlobalFilter = ({ setFilter }) => {
  const [value, setValue] = useState("");
  const { t } = useTranslation();
  const onChange = (e) => {
    setValue(e.target.value);
    setFilter(e.target.value || undefined);
  };

  return (
    <div>
      <TextInput
        value={value || ""}
        onChange={onChange}
        placeholder={`${t("search")}...`}
      />
    </div>
  );
};

const BasicTable = ({
  children,
  handleSearch,
  handlePageChange,
  totalPage,
  currentPage,
  title,
  filter = false,
  action = "",
  actionTitle = "create",
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="md:flex justify-between items-center mb-6">
        <h4 className="card-title">{t(title)}</h4>
        {(filter || action) && (
          <div className="flex space-x-2">
            {filter && <GlobalFilter setFilter={handleSearch} />}
            {action && (
              <Link
                to={action}
                className="flex btn btn-primary btn-sm text-center items-center">
                {t(actionTitle)}
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="overflow-x-auto -mx-6">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <table className="striped-table">
              {children ? children : null}
            </table>
          </div>
        </div>
      </div>
      <div className="md:flex md:space-y-0 space-y-5 justify-end mt-6 items-center">
        <Pagination
          totalPages={totalPage}
          currentPage={currentPage}
          handlePageChange={(p) => handlePageChange(p)}
        />
      </div>
    </>
  );
};

export default BasicTable;
