import React from "react";
import { IconType } from "react-icons/lib";
import { IoLocationOutline } from "react-icons/io5";
interface Props {
  role: string;
  Icon: IconType;
  date?: string;
  location?: boolean;
  description?: string;
}
const ResumeCard = ({ role, Icon, date, description, location }: Props) => {
  return (
    <div className="mb-6">
      <div className="flex items-start space-x-6 bg-card border border-border transition-all duration-300 p-4 sm:p-8 rounded-md hover:shadow-lg hover:border-primary/50">
        <div className="sm:w-14 sm:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-col shadow-md">
          <Icon className="sm:w-8 sm:h-8 text-primary-foreground" />
        </div>
        <div className="flex-1">
          {date && (
            <h1 className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-secondary text-secondary-foreground w-fit sm:text-lg text-sm font-bold">
              {date}
            </h1>
          )}
          <h1 className="text-foreground text-xl sm:text-2xl font-semibold">
            {role}
          </h1>
          <div className="flex items-center gap-2 mt-2">
            {location && <IoLocationOutline className="text-primary" size={20} />}
            <p className="text-muted-foreground text-sm sm:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
