import React from 'react';
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <section className="section-container" id="services">
        <div className="bg-card section-card">
            <h1 className="header">Choose the Service you need</h1>
            <div className="grid-display">
                    <div className="card">
                        <div className="description">
                            <h2>Start-up</h2>
                            <h2>$1,999/month</h2>
                            <div>1 expert on any of the service you need.</div>
                        </div>
                        <button className="services-btn">Choose</button>
                    </div>
                    <div className="grid-display">
                    <div className="card">
                        <div className="description">
                            <h2>Start-up</h2>
                            <h2>$5,000/month</h2>
                            <div>3 expert on any of the service you need.</div>
                        </div>
                        <button className="services-btn">Choose</button>
                    </div>
                    <div className="grid-display">
                    <div className="card">
                        <div className="description">
                            <h2>Start-up</h2>
                            <h2>$10,000/month</h2>
                            <div>9 expert on any of the service you need.</div>
                        </div>
                        <button className="services-btn">Choose</button>
                    </div>
            </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ServicesPage