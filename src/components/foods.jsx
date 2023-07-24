import React, { Component } from "react";
import { getFoods } from "../services/fakeFoods";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { Paginate } from "../utils/paginate";
import ListGroup from "./common/list-group";
import { getCategories } from "../services/fakeCategories";
import Prefix from "./common/prefix";

class Foods extends Component {
  state = {
    foods: [],
    category: [],
    pageSize: 3,
    currentPage: 1,
    selectedCategory: {},
  };
  handleDelete = (food) => {
    const { _id } = food; // distrukturing
    const foods = this.state.foods.filter((food) => food._id !== _id);
    this.setState({ foods });
  };
  handleToggleLike = (selectedFood) => {
    const { foods } = this.state;
    const index = foods.indexOf(selectedFood);
    foods[index] = { ...selectedFood, liked: !foods[index].liked };
    this.setState({ foods });
  };
  handleChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSelectItem = (seletedItem) => {
    this.setState({ selectedCategory: seletedItem, currentPage: 1 });
  };
  componentDidMount() {
    const foods = getFoods();
    const category = getCategories();
    this.setState({ foods, category: [{ name: "Barchasi" }, ...category] });
  }
  render() {
    const { foods, pageSize, currentPage, category, selectedCategory } = this.state;
    const filteredFoods = selectedCategory._id ? foods.filter((food) => food.category._id === selectedCategory._id) : foods;
    const paginated = Paginate(filteredFoods, currentPage, pageSize);
    const count = filteredFoods.length;
    if (!count) return <p className="h5 m-2 my-4">Bizda malumotlar mavjud emas</p>;
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup category={category} onSelectItem={this.handleSelectItem} selectedItem={selectedCategory} />
        </div>
        <div className="col">
          <Prefix count={count} data={selectedCategory} />
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
              {paginated.map((food) => (
                <tr key={food._id}>
                  <td>{food.title}</td>
                  <td>{food.category.name}</td>
                  <td>{food.price}</td>
                  <td>{food.amount}</td>
                  <td>{food.unit}</td>
                  <td>
                    <Like liked={food.liked} onToggleLike={() => this.handleToggleLike(food)} />
                    <button onClick={() => this.handleDelete(food)} className="btn btn-danger btn-sm ms-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination countItem={count} pageSize={pageSize} onPageChange={this.handleChange} currentPage={currentPage} />
        </div>
      </div>
    );
  }
}

export default Foods;

// o'zgaruvchini nomi bilan backenddan kelayotgan molamotni nomi bir hil bo'lsa o'zgaruvchini {} shu qavs ichiga olib ketishimiz kerak
