import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import {useState} from "react"

const ProductsList = () => {
  const [search,setSearch]=useState ("")
  const [filter,setFilter]=useState ("all")
  const handleSearch = (e)=>{
    setSearch(e.target.value.toLowerCase())
  }
  const handleCategories = (e)=>{
    setFilter(e.target.textContent.toLowerCase())
  }
    const filtered= products.filter((item)=>(filter === "all" || item.category.toLowerCase() === filter  ) && item.title.toLowerCase().includes(search))
  return (
    <>
      <Header handleCategories={handleCategories} categories={categories} />

      <Form.Control
        placeholder="Search Produc..."
        type="search"
        className="w-50 m-auto"
        onChange={handleSearch}
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {filtered.map((product)=>(
            <ProductCard {...product} key={product.id} />
          ))
            
          }
          
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
