import { Fragment } from "react"
import { useIntl } from "react-intl"
import messages from "../../Messages/messages";
import {NavbarProps} from "../../types/"
import "./styles.css"

export default ({News}: NavbarProps) => {
    const intl = useIntl();
    return (
        <Fragment>
            <News/>
            <div className="header-nav">
            <div className="navbar">
            <div className="list">
                <div className="item-link-online">{intl.formatMessage(messages.navBar.appointment)}</div>
                <div className="item-link-webmail">{intl.formatMessage(messages.navBar.appointment)}</div>
            </div>
            <div className="symbol-4"></div>
            <div className="link-logo-png" />
            <div className="list-item-link-home">{intl.formatMessage(messages.navBar.home)}</div>
            <div className="symbol-5"></div>
            <div className="list-item-link-pages">{intl.formatMessage(messages.navBar.about)}</div>
            <div className="symbol-6"></div>
            <div className="list-item-link">{intl.formatMessage(messages.navBar.specializations)}</div>
            <div className="symbol-7"></div>
            <div className="list-item-link-2">DOCTORS</div>
            <div className="symbol-8"></div>
            <div className="list-item-link-blog">{intl.formatMessage(messages.navBar.blog)}</div>
            <div className="symbol-9"></div>
            <div className="list-item-link-3">{intl.formatMessage(messages.navBar.contact)}</div>
            </div>
            </div>
        </Fragment>
    )
}