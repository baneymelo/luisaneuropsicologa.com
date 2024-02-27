import { Fragment } from "react"
import messages from "../../Messages/messages"
import "./styles.css"
import { useIntl } from "react-intl";

export default () => {
    const intl = useIntl();
  return (
    <Fragment>
        <div className="div-carousel-item">
            <div className="div-box-cell">
                <div className="overlap">
                <div className="after" />
                <div className="symbol-10"></div>
                <div className="heading-good">{intl.formatMessage(messages.carousel.slogan_1)}</div>
                <p className="heading-meet-the">
                    <span className="text-wrapper-2">
                    Meet the
                    <br />
                    </span>
                    <span className="text-wrapper-3">Best Doctors</span>
                </p>
                <div className="link">
                    <div className="overlap-group-2">
                    <div className="i-fas">
                        <div className="symbol-11"></div>
                    </div>
                    <div className="discover-more"> Discover More</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
