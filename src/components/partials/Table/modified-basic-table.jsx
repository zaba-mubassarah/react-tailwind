import React, { useState } from "react";
import TextInput from "@/components/ui/TextInput";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "@/components/ui/Button";

const ModifiedBasicTable = ({ children,
  action = "",
  icon = "",
  actionTitle = "create" }) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    // Handle search logic if needed
  };

  const handleSearch = () => {
    // Handle search logic using searchValue
  };

  return (
    <>
      {/* New div for input field and button */}
      <div className="flex mb-8">
        {/* Input Field */}
        <div className="flex-1 mr-2">
          <TextInput
            value={searchValue}
            onChange={handleSearchChange}
            placeholder={t('search')}
            className="w-full" // Make the input field full-width
          />
        </div>

        {/* Search Button */}
        <Link
          to={action}
          className="flex btn btn-primary btn-sm text-center items-center">
          {t(actionTitle)}
        </Link>
      </div>

      <div className="overflow-x-auto rounded-md border border-lilac-400">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <table className="striped-table">
              {children ? children : null}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModifiedBasicTable;
