import { Fragment } from "react"
import "./styles.css"


export default () => {
  return (
    <Fragment>
        <div className="div-top-bar-area">
            <p className="global-update-on">
            <span className="text-wrapper">!Global update on Coronavirus disease </span>
            <span className="span">(COVID-19)</span>
            <span className="text-wrapper"> Pandemic</span>
            </p>
            <div className="div-col-lg">
{/*             <div className="list">
                <div className="item-link-online">Online Appoinment</div>
                <div className="item-link-webmail">WebMail</div>
                <div className="item" />
            </div> */}
            <div className="div-social">
                <div className="symbol"></div>
                <div className="symbol-2"></div>
                <div className="symbol-3"></div>
            </div>
            </div>
        </div>
    </Fragment>
  )
}
