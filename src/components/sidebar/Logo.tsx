// libraries
import type {FC} from "react";
// images
import ForteBankLogo from "./../../../public/fortebank_logo.png"

const Logo: FC = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img src={ForteBankLogo} alt="ForteBankLogo" height={70} />
    </div>
  );
};

export default Logo;