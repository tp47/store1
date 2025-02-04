import React from "react";
// import "./styles.css";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export const productsGenerator = (quantity) => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Название ${i}`, price: 2100 + i });
  }
  return items;
};

const products = productsGenerator(100);

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
  },
  {
    dataField: "name",
    text: "Название",
    sort: true,
  },
  {
    dataField: "price",
    text: "Цена",
  },
];

export default function Table() {
  return (
    <div className="App">
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
      />
    </div>
  );
}
