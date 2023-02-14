import React, { useState } from "react";
import Cards from "./Cards";
import Head from "./Head";
const inputs = [
  { label: "First Name", widthClass: "col-50" },
  { label: "Last Name", widthClass: "col-50" },
  { label: "Email Address", widthClass: "w100" },
  { label: "Street Address", widthClass: "w100" },
  { label: "", widthClass: "w100" },
  { label: "State/Province", widthClass: "col-50" },
  { label: "City", widthClass: "col-50" },
  { label: "Zip/Postal Code", widthClass: "col-50" },
  { label: "Phone", widthClass: "col-50" },
];
const Main = () => {
  const [dropDown, setDropDown] = useState({
    order: false,
    discount: false,
    billing: false,
  });
  return (
    <div className="container">
      <Head />
      <div className="row w100 flexAround">
        <div className="col-60 p-10">
          <Cards title="Billing Address" extraClass="flexWrap mb-20 ">
            <>
              {" "}
              {inputs.map((x, i) => (
                <div
                  className={`inpudiv ${x.widthClass} m5 mb-20 inputAdd--${i}`}
                >
                  <input
                    type="text"
                    className="inpudiv__input"
                    placeholder=""
                  />
                  <span className="inpudiv__span">{x.label}</span>
                </div>
              ))}
              <div className="row flexAIC w100">
                <input
                  type="checkbox"
                  className="inpudiv__input m5"
                  placeholder="Type here..."
                />
                <p>My billing and shipping address are the same</p>
              </div>
              <div className="row flexAIC  w100">
                <input
                  type="checkbox"
                  className="inpudiv__input m5"
                  placeholder="Type here..."
                />
                <p className="">Create an account for later use</p>
              </div>
            </>
          </Cards>
          <Cards title="Shipping Method" extraClass="mb-20 col">
            <>
              {[1, 1].map((x) => (
                <div
                  className="w100 row card mb-15"
                  style={{ padding: "10px" }}
                >
                  <div className="col-20 row flexAIC">
                    <input type="radio" name="radio" className="m5" />
                    <p className="text-bold ">$29</p>
                  </div>
                  <div className="col-80 row flexBetween">
                    <p className="text-grey" style={{ fontSize: "15px" }}>
                      USPS First Class With Tracking [5-13 days] COVID 19 Delay
                    </p>
                    <img
                      src="image 36.png"
                      alt="icon"
                      style={{ margin: "0px 10px" }}
                    />
                  </div>
                </div>
              ))}
            </>
          </Cards>
          <Cards title="Payment Method" extraClass="mb-20 col">
            <>
        
                <div
                  className="w100 row card mb-15"
                  style={{ padding: "10px" }}
                >
                  <div className="col-20 row flexAIC">
                    <input type="radio" name="radio_payment" className="m5" />
                    <p className="text-bold ">PayPal</p>
                  </div>
                  <div className="col-80 row flexBetween">
                    <p className="text-grey" style={{ fontSize: "15px" }}>
                    You will be redirected to the PayPal website after submitting your order
                    </p>
                    <img
                      src="PayPal.png"
                      alt="icon"
                      style={{ margin: "0px 10px" }}
                    />
                  </div>
                </div>

               <div className="w100 card card--pay col mb-15" 
                  style={{ padding: "10px" }}>
               <div
                  className="w100 row  flexBetween"
                >
                  <div className="col-40 row flexAIC ">
                    <input type="radio" name="radio_payment" className="m5" />
                    <p className="text-bold ">Pay with Credit Card</p>
                  </div>
                  <div className="col-50 row flexBetween">
                   {['Visa.png','Mastercard.png','Maestro.png','Discover.png'].map(x=> <img
                      src={x}
                      alt={x}
                      style={{ margin: "0px 10px" }}
                    />)}
                  </div>
                </div>
                <div className="w100 row flexWrap card--details">
                {[
                    { label: "Card number", widthClass: "col-50" },
                    { label: "Expiration Date", widthClass: "col-50" },
                    { label: "Card Security Code", widthClass: "col-50" },
            ].map((x, i) => (
                <div
                  className={`inpudiv ${x.widthClass} m5 mb-20 inputAdd--${i}`}
                >
                  <input
                    type="text"
                    className="inpudiv__input"
                    placeholder=""
                    style={{backgroundColor: '#d0e4ff'}}
                  />
                  <span className="inpudiv__span card--span" style={{backgroundColor: '#d0e4ff'}}>{x.label}</span>
                </div>
              ))}
              <div
                  className={`inpudiv w-50 m5 mb-20 `}
                >
                    <p className="link p-10">What is this?</p>
                </div>
                </div>
                
               </div>
               <div className="w-100">
                    <img src="Group 1488.png" alt="" />
                </div>
            </>
          </Cards>
        </div>
        <div className="col-40 p-10">
          <Cards
            title="Order Review"
            extraClass="mb-20 col"
            subtitle={
              <i
                className={`bi bi-caret-${dropDown.order ? "up" : "down"}-fill`}
              ></i>
            }
            func={() => setDropDown({ ...dropDown, order: !dropDown.order })}
          >
            <p>3 items in Cart</p>
            {dropDown.order && (
              <>
                <p>534534</p>
              </>
            )}
          </Cards>
          <Cards
            title="Discount Codes"
            extraClass="mb-20 col"
            subtitle={
              <i
                className={`bi bi-caret-${
                  dropDown.discount ? "up" : "down"
                }-fill`}
              ></i>
            }
            func={() =>
              setDropDown({ ...dropDown, discount: !dropDown.discount })
            }
          >
            {dropDown.discount && (
              <>
                <p>534534</p>
              </>
            )}
          </Cards>
          <Cards
            title="Billing Summary"
            extraClass="mb-20 col"
            subtitle={
              <i
                className={`bi bi-caret-${
                  dropDown.billing ? "up" : "down"
                }-fill`}
              ></i>
            }
            func={() =>
              setDropDown({ ...dropDown, billing: !dropDown.billing })
            }
          >
            {dropDown.billing && (
              <div className="billing">
                {[
                  { title: "Subtotal", doller: "$3720.27" },
                  { title: "Discount", doller: "-$749.99" },
                  { title: "Warranty(Platinum)", doller: "$259.99" },
                  { title: "Shipping", doller: "$0.00" },
                  { title: "Tax", doller: "$228.72" },
                ].map((x) => (
                  <>
                    <div className="row flexBetween mb-15 flexAIC">
                      <p className="text-grey">{x.title}</p>
                      <p className="">{x.doller}</p>
                    </div>
                    {x.title === "Warranty(Platinum)" && (
                      <p className="link  mb-15">Remove</p>
                    )}
                  </>
                ))}
                <hr className="mb-20" />
                <div className="row flexBetween mb-15 flexAIC">
                  <div className="w100 row flexBetween mb-20">
                    <h3 className="">Grand Total</h3>
                    <h3 className="">$4390.00</h3>
                  </div>
                </div>
                <div className="inpudiv w100 m5 mb-20 inputAdd--0 __web-inspector-hide-shortcut__">
                  <input
                    type="text"
                    className="inpudiv__input"
                    placeholder="Type here..."
                  />
                  <span className="inpudiv__span">Order Comment</span>
                </div>
                <div className="w100">
                <div className="row flexAIC w100">
                    {/* #work Here */}
                <input
                  type="checkbox"
                  className="inpudiv__input m5"
                  placeholder="Type here..."
                />
                <p>My billing and shipping address are the same</p>
              </div>
                </div>
              </div>
            )}
          </Cards>
        </div>
      </div>
    </div>
  );
};

export default Main;
