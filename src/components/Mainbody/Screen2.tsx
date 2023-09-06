import React from "react";
import './styles/mainbody.css';
import './styles/screen2.css';

const Screen2 = () => {
    return (
        <div className="screen2">
            <div className="screen2_container">
                <div className="screen2_text">
                    <p className="scool_text">(sh)cool time!</p>
                    <div className="school_b">
                        <p className="scool_text">посмотреть коллекцию</p>
                        <div className="school_button">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>

                <div className="screen2_img">
                    <img className="school_img" src="https://uploads-ssl.webflow.com/63fd0282d1adef725d6cb031/64dead62f546fd3aed581526_ecru-bts-home-image-02.jpg"/>
                    <img className="school_img" src="https://uploads-ssl.webflow.com/63fd0282d1adef725d6cb031/64dead62a34d821435dd27e3_ecru-bts-home-image-01.jpg"/>
                </div>

                <div className="line_with_">
                    <p className="line_with_text">#ecrustle</p>
                    <p className="line_with_text">#ecrugang</p>
                    <p className="line_with_text">#ecrustle</p>
                    <p className="line_with_text">#ecrugang</p>
                </div>

                <div className='screen2_tipe'>
                    <p className='tipe-main'>собери свой образ ECRU</p>
                    <p className='tipe-grey'>делись им с хештегами #ecrustyle, #ecrugang и отмечай @ecrubrand в социальных сетях</p>
                </div>

            </div>
        </div>
    )
}

export default Screen2