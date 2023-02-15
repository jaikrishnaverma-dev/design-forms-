import React from 'react'

const BillPayDetails = () => {
  return (
    <>
              <div className="billing">
                {[
                  { title: "Subtotal", doller: "$3720.27" },
                  { title: "Discount", doller: "-$749.99" },
                  { title: "Warranty(Platinum)", doller: "$259.99" },
                  { title: "Shipping", doller: "$0.00" },
                  { title: "Tax", doller: "$228.72" },
                ].map((x) => (
                  <>
                    <li className="billing__list w100 row">
                      <p className="text-grey">{x.title}</p>
                      <p className="">{x.doller}</p>
                    </li>
                    {x.title === "Warranty(Platinum)" && (
                      <p className="link  mb-15">Remove</p>
                    )}
                  </>
                ))}
                <hr className="mb-20" />
                <div className="totalbox row">
                  <li className="totalbox__li w100 row">
                    <h3 className="">Grand Total</h3>
                    <h3 className="">$4390.00</h3>
                  </li>
                </div>
                <div className="inpudiv inpudiv--comment w100" >
                  <input
                    type="text"
                    className="inpudiv__input"
                    placeholder="Type here..."
                  />
                  <span className="inpudiv__span">Order Comment</span>
                </div>
                <div className="w100">
                <div className="card__accept row">
                <input
                  type="checkbox"
                  className="inpudiv__input input--enable"
                  placeholder="Type here..."
                />
                <p className="card__accept__description text-grey">Please check to acknowledge our <span className="link">Privacy & Terms Policy</span> </p>
              </div>
                </div>
                <button className="payButton w100">Pay $3,439.00</button>
                <div className="footbox w100 row">
                <img src="Norton Icon.png" alt="norton" />
                </div>
                
              </div>

    </>
  )
}

export default BillPayDetails