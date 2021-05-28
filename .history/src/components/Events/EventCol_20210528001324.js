import React from 'react';
import { Col } from 'react-bootstrap';

const EventCol = ({ data }) => {
    console.log(data);
    return (
        <Col md={12} lg={4}>
            <div className="event-img">
                <img className='w-100' src={data.eventImage} alt="" />
                <a className='ig-btn' href="http">AUTOMATION</a>
            </div>
            <div className="event-content">
                <p>{data.text} 2Mins</p>
                <div className="event-btm-txt">
                    <h5>{data.time}</h5>
                    <p>FUTURE OF AI</p>
                </div>
                <div className='event-btn'><a href="http">REGISTER</a></div>
            </div>
        </Col>
    );
};

export default EventCol;