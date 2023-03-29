import React from 'react';
import '../Modal.css';
import { useState } from 'react';
import bank from "../../assets/dashboard/polaris.png";
import money from "../../assets/dashboard/wallet.png";
import email from "../../assets/email.png";
import airtel from "../../assets/airtel.png";
import glo from "../../assets/glo.png";
import mtn from "../../assets/mtn.png";
import ninemobile from "../../assets/9mobile.png";

import right from "../../assets/right.png";
import verified from "../../assets/verified.png";
import logo from "../../assets/logo.png";
import { SummaryData } from '../TransfarData';

function Airtime({ closeModal }) {
    const [change, setChange] = useState("id")

    return (
        <section className="modal">
            {change === "id" && (
                <div className="transfar"><br /><br /><br />
                    <div className="header">
                        <h1>Top Up Airtime</h1>
                        <button
                            onClick={() => {
                                closeModal(false);
                            }}
                        >
                            X
                        </button>
                    </div><br />
                    <hr className="divider" />
                    <div className="transfar_body">

                        <form action="/" className="transfar_form">

                            <div className="form">
                                <label>Mobile Number</label>
                                <input type="number" placeholder="Enter Phone Number" />
                                <br />
                                <div className='airtime_package'>
                                    <p>Select a network Provider</p>
                                    <div className="row">
                                        <div className="bill_container">
                                            <img src={airtel} alt="airtel" />
                                        </div>

                                        <div className="bill_container">
                                            <img src={glo} alt="glo" />
                                        </div>

                                        <div className="bill_container">
                                            <img src={ninemobile} alt="ninemobile" />
                                        </div>

                                        <div className="bill_container">
                                            <img src={mtn} alt="mtn" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="amount_card">
                                            <p>N50</p>
                                        </div>

                                        <div className="amount_card">
                                            <p>N100</p>
                                        </div>

                                        <div className="amount_card">
                                            <p>N200</p>
                                        </div>
                                    </div>
                                    <br /> <br />
                                    <div className="row">
                                        <div className="amount_card">
                                            <p>N300</p>
                                        </div>
                                        <div className="amount_card">
                                            <p>N500</p>
                                        </div>
                                        <div className="amount_card">
                                            <p>N1000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form className="form">
                                <label>Amount</label>
                                <input type="number" placeholder="N10.00 - N5,000,000.00" />
                                <button
                                    onClick={() => {
                                        setChange("id4");
                                    }}
                                >
                                    Next
                                </button>
                            </form>
                        </form>
                    </div>
                </div>
            )}



            {change === "id4" && (
                <div className="transfar_pin_body"><br /><br /><br />
                    <div className="header">
                        <h1>Transaction Pin</h1>
                        <button
                            onClick={() => {
                                closeModal(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                    <hr className="divider" />
                    <div className="transfar_pin">
                        <p>Enter your transaction pin</p>
                        <h1>#5000</h1>
                        <div className="pin_input">
                            <form action="" className="pin_in">
                                <input type="text" className="pin" />
                                <input type="text" className="pin" />
                                <input type="text" className="pin" />
                                <input type="text" className="pin" />
                            </form>
                            <p>Forgot Pin?</p>

                            <form className="form">
                            <input type="button" onClick={() => {
                                setChange("id6");
                            }} value="Confirm" />
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {change === "id6" && (
                <div className="transfar"><br /><br />
                    <div className="header">
                        <button
                            onClick={() => {
                                closeModal(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                    <hr className="divider" />
                    <div className="transfar_pin">
                        <img src={verified} alt="verified.png" />
                        <h1>Successful</h1>
                        <br />
                        <h1>N5000</h1>
                        <div className="success_msg">
                            <div className='success_msg_row'>
                                <p>Network Provider</p><p>Airtel</p>
                            </div>
                            <div className='success_msg_row'>
                                <p>Recipient</p><p>081 345 4466</p>
                            </div>
                            <div className='success_msg_row'>
                                <p>Fee</p><p>N0.00</p>
                            </div>
                            <div className='success_msg_row'>
                                <p>Payment Method</p><p>Balance</p>
                            </div>
                        </div>
                        <div className='success_msg_row'>

                            <input type="button" value="Complete" /><input type="button" onClick={() => {
                                setChange("id7");
                            }} value="View Receipt" />
                        </div>
                    </div>
                </div>
            )}
            {change === "id7" && (
                <div className="receipt">
                    <div className="header_receipt">
                        <button
                            onClick={() => {
                                closeModal(false);
                            }}
                        ><img src={right} className='image' />  <span>Back</span>
                        </button>
                    </div><br /><br />
                    <div className='logo'>
                        <img src={logo} alt="logo.png" />
                    </div>
                    
                    <div className="transfar_pin">
                        <h1>N5000</h1>
                        <p>Successful Transaction</p>
                        <p>05:01, Mar 23, 2023</p>
                        <hr className="divider_receipt" />
                        <div className="success_msg">
                            <div className='success_msg_row'>
                                <p>Transfer Type</p><p>Topup Airtime</p>
                            </div>
                            <div className='success_msg_row'>
                                <p>Bill Provider</p><p>AIRTEL</p>
                            </div>
                            <div className='success_msg_row'>
                                <p>Recipient Mobile Number</p><p>081 343 4544</p>
                            </div>
                            <div className='success_msg_row'>
                                <p>Order Amount</p><p>N200.00</p>
                            </div>
                            <div className='success_msg_row'>
                                <p>Transaction ID</p><p>8177g373738</p>
                            </div>
                            <div className='success_msg_row'>
                                <p>Transaction Date</p><p>08:25, Feb 05,2023</p>
                            </div>
                            <div className='success_msg_row'>
                                <p>Baas Number</p><p>081 303 9098</p>
                            </div>
                            <div className='success_msg_row'>
                                <p>Payer Name</p><p>Ogunmodede Opeoluwa</p>
                            </div>
                            <div className='success_msg_row'>
                                <p>Payment Method</p><p>Balance</p>
                            </div>
                            <div className='success_msg_row'>
                                <p>Status</p><p>Successful</p>
                            </div>
                        </div>

                        <input type="button" value="Download" />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Airtime;
