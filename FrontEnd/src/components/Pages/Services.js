import React, { useEffect, useState } from "react";
import FoodData from "../FoodData";
import "../style.css";
import Form from "react-bootstrap/Form";
import { Cards } from "../FoodCard";
import Set from "../set";
import Footer from "../Footer";

const Service = () => {
  const [fdata, setFdata] = useState(FoodData);
  // console.log(fdata);

  const [copydata, setCopyData] = useState([]);

  // console.log(copydata);

  const chanegData = (e) => {
    let getchangedata = e.toLowerCase();

    if (getchangedata == "") {
      setCopyData(fdata);
    } else {
      let storedata = copydata.filter((ele, k) => {
        return ele.rname.toLowerCase().match(getchangedata);
      });

      setCopyData(storedata);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCopyData(FoodData);
    }, 3000);
  }, []);

  return (
    <>
      <Form className="Text_bar_wrapper ">
        <Form.Group className="tb" controlId="formBasicEmail">
          <Form.Control
            className="Text_bar"
            type="text"
            onChange={(e) => chanegData(e.target.value)}
            placeholder="Search"
          />
        </Form.Group>
      </Form>

      <section className="c ">
        <h2 className="RIA" style={{ fontWeight: 400 }}>
          MENU
        </h2>

        <div className="row ">
          {copydata && copydata.length ? (
            copydata.map((product) => <Cards data={product} />)
          ) : (
            <Set sdata={fdata} />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service;
