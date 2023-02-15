import React, { useState } from "react";
import BillPayDetails from "./BillPayDetails";
import Cards from "./Cards";
import Head from "./Head";
import '../App_Bem.css'
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
    const activeHandler=(e:any)=>{  
      let nearestCard= e.target.closest('.card') 
      let nearestActive=(nearestCard.nextElementSibling)?nearestCard.nextElementSibling:nearestCard.previousElementSibling
      nearestActive.classList.remove('card--active');
      nearestCard.classList.add('card--active');
    }  
      return (
        <div className="container" key={'withoutBem'}>
          <Head />
          <main className="main w100 row">
            <section className="inputsection sm-100">
              <Cards title="Billing Address" extraClass="flexWrap mb-20">
                <>
                  {" "}
                  {inputs.map((x, i) => (
                    <div
                      className={`inpudiv w100 ${x.widthClass}`}
                    >
                      <input
                        type="text"
                        className="inpudiv__input"
                        placeholder=""
                      />
                      <span className="inpudiv__span">{x.label}</span>
                    </div>
                  ))}
                  <div className="card__accept row w100">
                    <input
                      type="checkbox"
                      className="inpudiv__input input--enable m5"
                      placeholder="Type here..."
                    />
                    <p className="card__accept__description">My billing and shipping address are the same</p>
                  </div>
                  <div className="card__accept row">
                    <input
                      type="checkbox"
                      className="inpudiv__input input--enable m5"
                      placeholder="Type here..."
                    />
                    <p className="card__accept__description">Create an account for later use</p>
                  </div>
                </>
              </Cards>
              <Cards title="Shipping Method" extraClass="mb-20 col">
                <>
                  {[1, 2].map((x) => (
                    <div
                      className={`card card--shipping w100 ${(x==1)&&'card--active'}`}
                  
                    >
                      <div className="shipping__details row">
                        <input type="radio" name="radio" defaultChecked={(x==1)?true:false} onChange={activeHandler} className="shipping__input" />
                        <p className="text-bold">$29</p>
                      </div>
                      <div className="shipping__descriptions__box row">
                        <p className="shipping__descriptions text-grey">
                          USPS First Class With Tracking [5-13 days] COVID 19 Delay
                        </p>
                        <img
                          src="image 36.png"
                          alt="icon"
                          className="shipping__images"
                        />
                      </div>
                    </div>
                  ))}
                </>
              </Cards>
              <Cards title="Payment Method" extraClass="mb-20 col">
                <>
            
                    <div className="card__box row col">
                    <div
                      className="card card--payment w100"
                    >
                      <div className="payment__details row">
                        <input type="radio" onChange={activeHandler} name="radio_payment" className="payment__input" />
                        <p className="text-bold ">PayPal</p>
                      </div>
                      <div className="shipping__payment__box row">
                        <p className="payments__descriptions text-grey">
                        You will be redirected to the PayPal website after submitting your order
                        </p>
                        <img
                          src="PayPal.png"
                          alt="icon"
                          className="payment__images"
                        />
                      </div>
                    </div>
    
                   <div className="w100 card card--pay card--active mb-15" 
           >
                   <div
                      className="paywith w100 row"
                    >
                      <div className="sm-100 card--paywith row">
                        <input type="radio" defaultChecked onChange={activeHandler} name="radio_payment" className="m5" />
                        <p className="text-bold">Pay with Credit Card</p>
                      </div>
                      <div className="paywith__types row">
                       {['Visa.png','Mastercard.png','Maestro.png','Discover.png'].map(x=> <img
                          src={x}
                          alt={x}
                          className='paywith__images'
                        />)}
                      </div>
                    </div>
                    <div className="paywith__inputs row w100 card--details">
                    {[
                        { label: "Card number", widthClass: "col-50" },
                        { label: "Expiration Date", widthClass: "col-50" },
                        { label: "Card Security Code", widthClass: "col-50" },
                ].map((x, i) => (
                    <div
                      className={`inpudiv w100 inpudiv--paywith  ${x.widthClass}`}
                    >
                      <input
                        type="text"
                        className="inpudiv__input"
                        placeholder=""
                      />
                      <span className="inpudiv__span card--span" >{x.label}</span>
                    </div>
                  ))}
                  <div
                      className={`inpudiv w100  inpudiv--paywith col-50`}
                    >
                        <p className="link p-10">What is this?</p>
                    </div>
                    </div>
                    
                   </div>
                    </div>
                   <div className="footbox w100 row">
                        <img src="Frame 1507.png" className="footbox__image" alt="lock image" />
                        <p className="footbox__para  m5 text-grey" >We protect your payment information using encryption to provide bank-level security.</p>
                    </div>
                </>
              </Cards>
            </section>
            <section className="deatils sm-100">
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
                <p className="mb-15">3 items in Cart</p>
                {dropDown.order&&<BillPayDetails/>}
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
                {    dropDown.discount&&<BillPayDetails/>}
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
                {dropDown.billing&&<BillPayDetails/>}
              </Cards>
            </section>
          </main>
        </div>
      );
}

export default Main