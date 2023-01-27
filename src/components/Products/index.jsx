import { useEffect, useState } from "react";
import { DELETE, GET } from "../../libs/HTTP";
import LiProduct from "../LiProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [groupId, setGroupId] = useState([]);

  const reloadItems = () => {
    GET("products").then(data => {
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(() => {
    reloadItems();
  }, []);

  const deleteElement = id => {
    DELETE("products", id).then(data => {
      if (data.status === 200) {
        reloadItems();
      }
    });
  };

  const groupDelete = id => {
    setGroupId([...groupId, id]);
  };

  const deleteLoop = () => {
    groupId.map(item =>
      DELETE("products", item)
        .then(res => res.json())
        .then(data => console.log(data))
    );
  };

  return (
    <div>
      <button onClick={() => deleteLoop()}>
        Elimina {groupId.length} prodotti
      </button>
      <ul>
        {products.map((item, index) => (
          <LiProduct
            groupDelete={groupDelete}
            reloadItems={reloadItems}
            deleteElement={deleteElement}
            item={item}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
