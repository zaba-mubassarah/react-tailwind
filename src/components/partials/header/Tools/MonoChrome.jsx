import React from "react";
import useMonoChrome from "@/hooks/theme/useMonoChrome";
import Icon from "@/components/ui/Icon";
const MonoChrome = () => {
  const [isMonoChrome, setMonoChrome] = useMonoChrome();
  return (
    <span>
      <div
        className="lg:h-[32px] lg:w-[32px] dark:text-white text-[#FFFFFF] cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"
        onClick={() => setMonoChrome(!isMonoChrome)}>
        <Icon icon="mdi:palette-outline" />
      </div>
    </span>
  );
};

export default MonoChrome;
