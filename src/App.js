import React from "react";

function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

const foodIlike = [
  {
    name: "Kimchi",
    image:
      "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2020/12/01/21/0/e209d9b0-9ef0-4d66-ac04-59386c34def1.jpg"
  },
  {
    name: "Samqyeopsal",
    image:
      "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2020/12/01/21/0/e209d9b0-9ef0-4d66-ac04-59386c34def1.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2020/12/01/21/0/e209d9b0-9ef0-4d66-ac04-59386c34def1.jpg"
  },
  {
    name: "Doncasu",
    image:
      "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2020/12/01/21/0/e209d9b0-9ef0-4d66-ac04-59386c34def1.jpg"
  },
  {
    name: "Kimbap",
    image:
      "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2020/12/01/21/0/e209d9b0-9ef0-4d66-ac04-59386c34def1.jpg"
  }
]

function App() {
  return (
    <div>
      {foodIlike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;