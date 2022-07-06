import React from "react";

import { List as AntList, ListProps } from "antd";

interface Props extends ListProps<any> {}

const List: React.FC<Props> = (props) => {
  return <AntList {...props}></AntList>;
};
export default React.memo(List);
