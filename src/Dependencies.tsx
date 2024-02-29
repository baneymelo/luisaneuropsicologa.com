import IntlProvider from "./Context/Intl/IntlProvider"
import Navbar from "./Components/Navbar";
import translations from "./translations";
import News from "./Components/News";
import Carousel from "./Components/Carousel";

export default () => {

    const DefaultNavBar = () => (
        <Navbar News={News}>
            <Navbar.Logo/>
            <Navbar.Menu/>
            <Navbar.Appointment/>
        </Navbar>
    )
    
    const DefaultApp = () => (
        <IntlProvider translations={translations}>
            <DefaultNavBar/>
            <Carousel/>
        </IntlProvider>
    )
    return <DefaultApp/>
}