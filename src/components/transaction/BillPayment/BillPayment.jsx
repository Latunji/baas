import React from 'react';
import Bills from './Bills';
import { Mobile, Utilities, Education, Travels, Finance } from '.';
import './Bills.css'

function BillPayment(icon, title) {
  return (
    <div className="bill_sections">
        <div className="mobile">
            {Mobile.map((value) =>{
                return(
                    <div className="bill_container">
                        <Bills
                        icon ={value.icon}
                        title= {value.title}
                        />
                    </div>
                )
            })}
        </div>
        <div className="sections">
            <h1>Utilities</h1>
            <div className="section_content">
                {Utilities.map((value) => {
                    return (
                        <div className="bill_container">
                            <Bills
                            icon = {value.icon}
                            title ={value.title}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="sections">
            <h1>Education</h1>
            <div className="section_content">
                {Education.map((value) =>{
                    return (
                    <div className="bill_container">
                        <Bills icon={value.icon} title={value.title} />
                    </div>
                    );
                })}
            </div>
        </div>
        <div className="sections">
            <h1>Travels</h1>
            <div className="section_content">
                {Travels.map((value) =>{
                    return (
                    <div className="bill_container">
                        <Bills icon={value.icon} title={value.title} />
                    </div>
                    );
                })}
            </div>
        </div>
        <div className="sections">
            <h1>Finance</h1>
            <div className="section_content">
                {Finance.map((value) =>{
                    return (
                    <div className="bill_container">
                        <Bills icon={value.icon} title={value.title} />
                    </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default BillPayment
