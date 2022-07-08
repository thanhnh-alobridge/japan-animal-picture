import React from "react";

import images from "../assets/images";

const GirlComponent = React.lazy(() => import("../components/Girl"));
const ListComponent = React.lazy(() => import("../components/List"));
const listImage = [
  images.girl1,
  images.girl2,
  images.girl3,
  images.girl4,
  images.girl5,
];
function Page1() {
  return (
    <div className="App">
      <ListComponent
        dataSource={listImage}
        renderItem={(item) => <GirlComponent src={item}></GirlComponent>}
      ></ListComponent>
    </div>
  );
}

export default React.memo(Page1);
