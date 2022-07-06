import React from "react";

import "./App.css";
import images from "./assets/images";

const GirlComponent = React.lazy(() => import("./components/Girl"));
const ListComponent = React.lazy(() => import("./components/List"));
const listImage = [
  images.girl1,
  images.girl2,
  images.girl3,
  images.girl4,
  images.girl5,
  images.girl6,
  images.girl7,
  images.girl8,
  images.girl9,
  images.girl10,
  images.girl11,
  images.girl12,
  images.girl13,
  images.girl14,
  images.girl15,
  images.girl16,
  images.girl17,
  images.girl18,
  images.girl19,
  images.girl20,
  images.girl21,
  images.girl22,
  images.girl23,
  images.girl24,
  images.girl25,
  images.girl26,
];
function App() {
  return (
    <div className="App">
      <ListComponent
        dataSource={listImage}
        renderItem={(item) => <GirlComponent src={item}></GirlComponent>}
        pagination={{ pageSize: 5 }}
      ></ListComponent>
    </div>
  );
}

export default App;
