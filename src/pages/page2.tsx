import React from "react";

import images from "../assets/images";

const GirlComponent = React.lazy(() => import("../components/Girl"));
const ListComponent = React.lazy(() => import("../components/List"));
const listImage = [
  images.girl6,
  images.girl7,
  images.girl8,
  images.girl9,
  images.girl10,
];
function Page2() {
  return (
    <div className="App">
      <ListComponent
        dataSource={listImage}
        renderItem={(item) => <GirlComponent src={item}></GirlComponent>}
      ></ListComponent>
    </div>
  );
}

export default React.memo(Page2);
