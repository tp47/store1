import React, { Component } from "react";

class CartHeader extends Component {
  render() {
    return (
      <div className="cart-upper p-2 row text-center d-none d-md-flex mx-auto">
        <div className="col">
          <h3>Товар</h3>
        </div>
        <div className="col">
          <h3>Название</h3>
        </div>
        <div className="col">
          <h3>Цена</h3>
        </div>
        <div className="col">
          <h3>Количество</h3>
        </div>
        <div className="col">
          <h3>Удалить</h3>
        </div>
        <div className="col">
          <h3>Сумма</h3>
        </div>
      </div>
    );
  }
}

export default CartHeader;

