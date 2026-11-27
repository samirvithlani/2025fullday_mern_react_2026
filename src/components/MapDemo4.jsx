import React from "react";

export const MapDemo4 = () => {
  var products = [
    {
      id: 1,
      name: "iphone17",
      price: 1200,
      color: "blue",
      status: true,
      cap: 512,
    },
    {
      id: 2,
      name: "Samsung S25",
      price: 1100,
      color: "black",
      status: true,
      cap: 256,
    },
    {
      id: 3,
      name: "MacBook Air",
      price: 1500,
      color: "silver",
      status: true,
      cap: 512,
    },
    {
      id: 4,
      name: "Dell Inspiron",
      price: 900,
      color: "grey",
      status: false,
      cap: 1024,
    },
    {
      id: 5,
      name: "iPad Pro",
      price: 1300,
      color: "white",
      status: true,
      cap: 256,
    },
    {
      id: 6,
      name: "Apple Watch",
      price: 500,
      color: "black",
      status: true,
      cap: 64,
    },
    {
      id: 7,
      name: "OnePlus 13",
      price: 850,
      color: "green",
      status: true,
      cap: 512,
    },
    {
      id: 8,
      name: "Sony Headphones",
      price: 300,
      color: "blue",
      status: false,
      cap: 32,
    },
    {
      id: 9,
      name: "HP Pavilion",
      price: 1000,
      color: "silver",
      status: true,
      cap: 512,
    },
    {
      id: 10,
      name: "Samsung Tab S10",
      price: 750,
      color: "grey",
      status: true,
      cap: 256,
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MapDemo4</h1>
      <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>COLOR</th>
                    <th>CAP</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                  products.map((p)=>{
                    return<tr style={{backgroundColor:"yellow"}}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td style={{backgroundColor:p.price>=1000 && "red"}}>{p.price}</td>
                        <td style={{color:p.color}}>{p.color}</td>
                        <td style={{color:p.cap>=512 && "blue"}}>{p.cap} {p.cap>1000 && "*"}</td>
                        <td>{p.status == true ? "Available":"Not Avaialble"}</td>
                    </tr>
                  })  
                }
            </tbody>
      </table>
    </div>
  );
};
