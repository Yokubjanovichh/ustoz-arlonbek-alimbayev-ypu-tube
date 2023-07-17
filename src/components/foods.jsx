import React, { Component } from "react";
import { getFoods } from "../services/fakeFoods";

class Foods extends Component {
  state = {
    foods: getFoods(),
  };
  handleDelete = (food) => {
    const { _id } = food; // distrukturing
    const foods = this.state.foods.filter((food) => food._id !== _id);
    this.setState({ foods });
  };
  render() {
    const { foods } = this.state;
    const count = foods.length;
    return (
      <>
        <p className="h5 m-2 my-4">{count === 0 ? "Bizda malumotlar mavjud emas" : `Bizda  ${count} ta mahsulot bor`}</p>
        {count !== 0 && (
          <table className="table table-bordered text-center m-2">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Unit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food) => (
                <tr key={food._id}>
                  <td>{food.title}</td>
                  <td>{food.category.name}</td>
                  <td>{food.price}</td>
                  <td>{food.amount}</td>
                  <td>{food.unit}</td>
                  <td>
                    <button onClick={() => this.handleDelete(food)} className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }
}

export default Foods;

// o'zgaruvchini nomi bilan backenddan kelayotgan molamotni nomi bir hil bo'lsa o'zgaruvchini {} shu qavs ichiga olib ketishimiz kerak
