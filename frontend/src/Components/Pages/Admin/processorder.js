import React, { Fragment, useEffect, useState } from "react";
// import MetaData from "../Layout/Metadata";
import { Link, useParams } from "react-router-dom";
import { Typography } from '@mui/material';
import SideBar from "./Sidebar";
import {
  getOrderDetails,
  clearErrors,
  updateOrder,
} from "../../../redux/action/orderaction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Layout/Loader/loader";
import { useAlert } from "react-alert";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { UPDATE_ORDER_RESET } from "../../../redux/Constant/orderconstant";
import "./processorder.css";

const ProcessOrder = ({ match }) => {
  const id = useParams().id;
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.order);
  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(updateOrder(id, myForm));
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Order Updated Successfully");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(id));
  }, [dispatch, alert, error, id, isUpdated, updateError]);

  return (
    <Fragment>
      {/* <MetaData title="Process Order" /> */}
      <div className="dashboard processOrder">
        <div className="dSidebar">
          <SideBar />
        </div>
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <div
              className="confirmOrderPage"
              style={{
                // display: order.orderStatus === "Delivered" ? "block" : "grid",
              }}
            >
              <div>
                <div className="confirmshippingArea">
                  <Typography>Checkout Info</Typography>
                  <div className="orderDetailsContainerBox">
                    <div className="pro_box">
                      <div className="proOrder_dtl">
                        <p>Name:</p>
                      </div>
                      <div className="proOrder_dtlSub">
                        <span>{order.user && order.checkout.name}</span>
                      </div>
                    </div>
                    <div className="pro_box">
                      <div className="proOrder_dtl">
                        <p>Email:</p>
                      </div>
                      <div className="proOrder_dtlSub">
                        <span>{order.user && order.user}</span>
                      </div>
                    </div>
                    <div className="pro_box">
                      <div className="proOrder_dtl">
                        <p>Phone:</p>
                      </div>
                      <div className="proOrder_dtlSub">
                        <span>
                          {order.checkout && order.checkout.phoneNo}
                        </span>
                      </div>
                    </div>
                    <div className="pro_box">
                      <div className="proOrder_dtl">
                        <p>University:</p>
                      </div>
                      <div className="proOrder_dtlSub">
                        <span>
                          {order.checkout && order.checkout.university}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Typography>Payment Status</Typography>
                  <div className="orderDetailsContainerBox">
                    <div className="pro_box">
                      <div className="proOrder_dtl">
                        <p
                          className={
                            order.paymentInfo &&
                              order.paymentInfo.status === "succeeded"
                              ? "greenColor"
                              : "redColor"
                          }
                        >
                          {order.paymentInfo &&
                            order.paymentInfo.status === "succeeded"
                            ? "PAID"
                            : "NOT PAID"}
                        </p>
                      </div>
                    </div>

                    <div className="pro_box">
                      <div className="proOrder_dtl">
                        <p>Amount:</p>
                      </div>
                      <div className="proOrder_dtlSub">
                        <span>{order.totalPrice && order.totalPrice}</span>
                      </div>
                    </div>
                    <div>
                      <div className="verification_status">
                        <h3>Payment Verification</h3>
                        <div className="proOrder_dtlSub">
                          <p
                            className={
                              order.orderStatus && order.orderStatus === "Pending"
                                ? "redColor"
                                : "greenColor"
                            }
                          >
                            {order.orderStatus && order.orderStatus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <Typography>Order Status</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <div className="proOrder_dtl">
                        <p
                          className={
                            order.orderStatus && order.orderStatus === "Pending"
                              ? "greenColor"
                              : "redColor"
                          }
                        >
                          {order.orderStatus && order.orderStatus}
                        </p>
                      </div>
                    </div>
                  </div> */}


                </div>
                <div className="confirmCartItems">
                  <Typography>Your Ordered Courses:</Typography>
                  <div className="confirmCartItemsContainer">
                    {order.orderItems &&
                      order.orderItems.map((item) => (
                        <div key={item.course}>
                          <img src={item.image} alt="Product" />
                          <Link to={`/product/${item.product}`}>
                            {item.name}={" "}
                          </Link>{" "}
                          <span>
                            <b>PKR {item.price}</b>
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                style={{
                  // display: order.orderStatus === "Delivered" ? "none" : "block",
                }}
              >
                <form
                  className="updateOrderForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Choose the Payment verification for the course*</h1>

                  <div>
                    <AttachMoneyIcon />
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Payment Option</option>
                      {order.orderStatus === "Processing" && (
                        <option value="Verified">Verified</option>
                      )}

                      {/* {order.orderStatus === "Verified" && (
                        <option value="Delivered">Delivered</option>
                      )} */}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn_primary"
                    disabled={
                      loading ? true : false || status === "" ? true : false
                    }
                  >
                    Process
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProcessOrder;
