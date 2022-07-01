import "./Dashboard.css";
import Sidebar from './Sidebar';

import { DataGrid } from '@mui/x-data-grid';
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";

import {
  deleteOrder,
  getAllOrders,
  clearErrors,
} from "../../../redux/action/orderaction";
import { DELETE_ORDER_RESET } from "../../../redux/Constant/orderconstant";
import Loader from "../../Layout/Loader/loader";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
const OrderList = () => {
    let history=useNavigate()
  const dispatch = useDispatch();

  const alert = useAlert();

  const {loading, error, orders } = useSelector((state) => state.allOrders);

  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (id) => {
    confirmAlert({
        title: ' Delete Order',
        message: `Are you sure to delete this order.`,
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              loading===true?(<Loader />):(
  dispatch(deleteOrder(id))

              );
            }   
          },
          {
            label: 'No',
            onclose: () => {}
          }
        ]
      });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Order Deleted Successfully");
      history("/courseorder");
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getAllOrders());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.4,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const i=params.getValue(params.id, "id")
        return (
          <Fragment>
            <Link to={`/admin/order/${i}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteOrderHandler(i)
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        amount: item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <Fragment>
 <div className='dashboard_holder students'>
                <div className='dSidebar'>
                    <Sidebar />
                </div>
                <div className='dashboard_content'>
          <h1>All Orders</h1>

          { loading===false ? (
               <DataGrid
               rows={rows}
               columns={columns}
               disableSelectionOnClick
               className="productListTable"
               autoHeight
             />
          ) : ( 
          <Loader/>
           )} 
        </div>
      </div>
    </Fragment>
  );
};

export default OrderList;
