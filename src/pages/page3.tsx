import React from "react";

import images from "../assets/images";

const GirlComponent = React.lazy(() => import("../components/Girl"));
const ListComponent = React.lazy(() => import("../components/List"));
const listImage = [
  images.girl11,
  images.girl12,
  images.girl13,
  images.girl14,
  images.girl15,
];
function Page3() {
  return (
    <div className="App">
      <ListComponent
        dataSource={listImage}
        renderItem={(item) => <GirlComponent src={item}></GirlComponent>}
      ></ListComponent>
    </div>
  );
}

export default React.memo(Page3);
