import React from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#fb923c] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-[#fb923c] " />
          Go to website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
