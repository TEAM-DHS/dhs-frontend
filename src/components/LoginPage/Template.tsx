import { ReactNode } from "react";

const Template = ({ children }: TemplateProps) => {
  return (
    <div
      className="mt-[100px] ml-[8%] mr-[12%] flex justify-between items-start
mobile:flex mobile:flex-col mobile:items-center mobile:ml-auto mobile:mr-auto
"
    >
      {children}
    </div>
  );
};

export default Template;
