import "./App.css";
import React, { useState } from "react ";
const snacks = [
  {
    id: 1,
    product_name: "Granola Bar",
    product_weight: "21g",
    price: 299,
    calories: 150,
    ingredients: ["Oats", "Honey", "Nuts", "Dried Fruits"],
  },
  {
    id: 2,
    product_name: "Fruit and Nut Mix",
    product_weight: "73g",
    price: 749,
    calories: 353,
    ingredients: [
      "Almonds",
      "Cashews",
      "Dried Cranberries",
      "Dried Blueberries",
    ],
  },
  {
    id: 3,
    product_name: "Veggie Chips",
    product_weight: "28g",
    price: 279,
    calories: 130,
    ingredients: ["Sweet Potatoes", "Beets", "Kale", "Sea Salt"],
  },
  {
    id: 4,
    product_name: "Protein Balls",
    product_weight: "100g",
    price: 499,
    calories: 318,
    ingredients: ["Dates", "Almond Butter", "Protein Powder", "Chia Seeds"],
  },
];
function App() {
  const [snack, setSnack] = useState(snacks);
  const [searchData, setSerachData] = useState(snacks);
  const [sortType, setSortType] = useState(false);
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };
  const renderHeader = () => {
    return (
      <tr>
        {Object.keys(snacks[0]).map((key) => (
          <th
            style={{
              padding: "10px",
              border: "1px solid black",
              cursor: "pointer",
            }}
            onClick={() => handleClick(key, sortType)}
          >
            {capitalize(key)}
          </th>
        ))}
      </tr>
    );
  };
  const handleClick = (value, sortType) => {
    console.log("sortType", sortType);
    if (value === "id" && sortType) {
      if (sortType) {
        setSerachData(snacks.sort((a, b) => a.id - b.id));
      } else {
        setSerachData(snacks.sort((a, b) => b.id - a.id));
      }
    }
    setSortType(!sortType);
    if (value === "product_name" && sortType) {
      setSerachData(
        snacks.sort((a, b) => {
          if (a.product_name.toLowerCase() < b.product_name.toLowerCase()) {
            return -1;
          }
          if (a.product_name.toLowerCase() > b.product_name.toLowerCase()) {
            return 1;
          }

          return 0;
        })
      );
    }

    setSortType(!sortType);
    if (value === "price" && sortType) {
      setSerachData(snacks.sort((a, b) => a.price - b.price));
    } else {
      setSerachData(snacks.sort((a, b) => b.price - a.price));
    }
    setSortType(!sortType);
    if (value === "calories" && sortType) {
      setSerachData(snacks.sort((a, b) => a.calories - b.calories));
    } else {
      setSerachData(snacks.sort((a, b) => b.calories - a.calories));
    }
    setSortType(!sortType);

    if (value === "ingredients" && sortType) {
      setSerachData(snacks.sort((a, b) => a.ingredients - b.ingredients));
    } else {
      setSerachData(snacks.sort((a, b) => b.ingredients - a.ingredients));
    }
    setSortType(!sortType);
  };
  const handleSearch = (searchName) => {
    setSerachData(
      [...snack].filter((item) =>
        item.product_name.toLowerCase().includes(searchName.toLowerCase())
      )
    );
    console.log("searchData", searchData);
  };

  const renderUsers = () => {
    return searchData.map(
      ({ id, product_name, product_weight, price, calories, ingredients }) => {
        return (
          <tr key={id}>
            <td style={{ padding: "11px", border: "1px solid black" }}>{id}</td>
            <td style={{ padding: "10px", border: "1px solid black" }}>
              {product_name}
            </td>
            <td style={{ padding: "10px", border: "1px solid black" }}>
              {product_weight}
            </td>
            <td style={{ padding: "10px", border: "1px solid black" }}>
              {price}
            </td>
            <td style={{ padding: "10px", border: "1px solid black" }}>
              {calories}
            </td>
            <td style={{ padding: "10px", border: "1px solid black" }}>
              {ingredients}
            </td>
          </tr>
        );
      }
    );
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1>Snack Table</h1>
      <label>
        Search by name or Ingredient:
        <input
          type="search"
          name="search"
          className="search-bar"
          placeholder="Search by name"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </label>
      <table>
        <thead>{renderHeader()}</thead>

        <tbody>{renderUsers()}</tbody>
      </table>
    </div>
  );
}

export default App;
