import React from 'react';
import { Col } from 'react-bootstrap';

const EventCol = ({ data }) => {
    console.log(data);
    return (
        <Col md={12} lg={4}>
            <div className="event-img">
                <img className='w-100' src={data.eventImage} alt="" />
                <a href="http">AUTOMATION</a>
            </div>
        </Col>
    );
};

export default EventCol;