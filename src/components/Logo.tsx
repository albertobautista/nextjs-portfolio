import React from "react";

const Logo = (props: any) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        className="rounded-full"
        width={50}
        height={50}
        alt="logo"
        src="https://links.papareact.com/1m8"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Logo;
