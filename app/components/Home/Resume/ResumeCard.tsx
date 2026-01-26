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
    <div className="mb-4">
      <div className="flex items-start space-x-4 bg-card border border-border transition-all duration-300 p-4 sm:p-5 rounded-md hover:shadow-md hover:border-primary/50">
        <div className="sm:w-10 sm:h-10 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-col shrink-0">
          <Icon className="sm:w-5 sm:h-5 text-primary" />
        </div>
        <div className="flex-1">
          {date && (
            <p className="mb-1 text-xs font-bold text-primary opacity-80">
              {date}
            </p>
          )}
          <h1 className="text-foreground text-lg sm:text-xl font-bold">
            {role}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            {location && <IoLocationOutline className="text-muted-foreground" size={14} />}
            <p className="text-muted-foreground text-xs sm:text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
