import React, { Component } from "react";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    const { img, price, name } = this.props.modalInfo;
    return (
      <div>
        {this.props.modalVisibility ? (
          <div className="justify-content-center align-items-center modal-container">
            <div className="container">
              <div className="row ">
                <div className="col-8 mx-auto col-md-6 col-lg-4 p-4 text-capitalize text-center modal">
                  <img src={img} alt="product" className="img-fluid" />
                  <h4>{name}</h4>
                  <span className="mb-1">₽{price}</span>
                  <button
                    className="px-2 py-1 mr-1 btn btn-dark mb-1"
                    onClick={() => {
                      this.props.closeModal();
                    }}
                  >
                    Назад в магазин
                  </button>
                  <Link to="/cart">
                    <button
                      className="px-2 py-1 btn btn-dark text-reset mb-1"
                      onClick={() => this.props.closeModal()}
                    >
                      В корзину
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default Modal;

