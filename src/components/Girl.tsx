import React from "react";

interface Props {
  src: string;
}
const Girl: React.FC<Props> = ({ src }) => {
  return <img src={src} alt="girl" width="30%" />;
};

export default React.memo(Girl);
