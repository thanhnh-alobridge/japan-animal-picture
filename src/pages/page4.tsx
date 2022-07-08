import React from "react";

import images from "../assets/images";

const GirlComponent = React.lazy(() => import("../components/Girl"));
const ListComponent = React.lazy(() => import("../components/List"));
const listImage = [
  images.girl16,
  images.girl17,
  images.girl18,
  images.girl19,
  images.girl20,
];
function Page4() {
  return (
    <div className="App">
      <ListComponent
        dataSource={listImage}
        renderItem={(item) => <GirlComponent src={item}></GirlComponent>}
      ></ListComponent>
    </div>
  );
}

export default React.memo(Page4);
