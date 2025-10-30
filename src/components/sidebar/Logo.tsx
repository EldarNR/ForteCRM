// libraries
import type {FC} from "react";

const Logo: FC = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img src="./../../assets/images/logo/fortebank_logo.png" alt="ForteBankLogo" height={70} />

    </div>
  );
};

export default Logo;