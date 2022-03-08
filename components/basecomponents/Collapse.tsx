import React, { ReactElement, useState } from 'react';
import ChevronDown from '../../public/icons/chevron-down.svg';
import ChevronRight from '../../public/icons/chevron-right.svg';

interface CollapseProps {
  title: string | ReactElement;
  children: React.ReactNode;
}

export const Collapse = ({ title, children }: CollapseProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white  p-4 border-b-1 border-b-primary-grey ">
      <div className="grid  grid-cols-[90%_10%] items-center " onClick={() => setExpanded(!expanded)}>
        <div>
          <p className="text-primary-blue text-lg font-bold">{title}</p>
        </div>
        <div className="justify-self-end cursor-pointer">{expanded ? <ChevronDown /> : <ChevronRight />}</div>
      </div>
      {children && expanded && <div className="my-2 ">{children}</div>}
    </div>
  );
};
