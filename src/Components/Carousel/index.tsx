import {Fragment, useEffect, useState} from "react"
import image1 from "@/assets/img/banner/1.jpg"
import image2 from "@/assets/img/banner/2.jpg"
//import "./styles.css"
import "./Carousel.css"


import "animate.css";
import {Button} from "antd";
import { useIntl } from "react-intl";
import messages from "../../Messages/messages.ts";

export default () => {
    const intl = useIntl();
    const covers: string[] = [image1, image2];
    const [position, setPosition] = useState<number>(0);

  /*  useEffect(() => {
        setTimeout(() => {

        })
    }, []);*/


  return (
    <div className="carousel-area">
        <div className="carousel">
            <div className="animate__animated animate__pulse slider-thumb bg-cover" style={{ backgroundImage: `url(${image1})`}}></div>
            <div className="box-table">
                <div className="shadow">
                    <div className="content">
                        <h4 className="animate__animated animate__slideInDown">{intl.formatMessage(messages.carousel.slogan_1)}</h4>
                        <h2 className="animate__animated animate__slideInRight">{intl.formatMessage(messages.carousel.description_2)}</h2>
                        <Button className="animate__animated animate__fadeInUp">{intl.formatMessage(messages.carousel.cta_1)}</Button>
                    </div>
                </div>
            </div>
        </div>

        {/*<div className="banner-area inc-shape content-less">
            <div id="bootcarousel" className="carousel text-light text-large slide carousel-fade animate_text" data-ride="carousel">
                <div className="carousel-inner carousel-zoom">
                    <div className="carousel-item active">
                        <div className="animate__animated animate__pulse  slider-thumb bg-cover" style={{ backgroundImage: `url(${image1})`}}></div>
                        <div className="box-table">
                            <div className="box-cell shadow dark">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="content">
                                                <h4 className="animate__animated animate__slideInDown">{intl.formatMessage(messages.carousel.slogan_1)}</h4>
                                                <h2 className="animate__animated animate__slideInRight">{intl.formatMessage(messages.carousel.slogan_1)}</h2>
                                                <Button className="animate__animated animate__fadeInUp">{intl.formatMessage(messages.carousel.cta_1)}</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slider-thumb bg-cover" style={{ backgroundImage: `url(${image2})`}}></div>
                        <div className="box-table">
                            <div className="box-cell shadow dark">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="content">
                                                <h4 data-animation="animated slideInDown">Best institution, Good services</h4>
                                                <h2 data-animation="animated slideInRight">Meet the <strong>Best Hospital</strong></h2>
                                                <a data-animation="animated fadeInUp" className="btn btn-md btn-gradient" href="#"><i className="fas fa-angle-right"></i> Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/}
    </div>
  )
}
