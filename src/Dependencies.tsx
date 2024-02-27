import IntlProvider from "./Context/Intl/IntlProvider"
import Navbar from "./Components/Navbar";
import translations from "./translations";
import News from "./Components/News";
import Carousel from "./Components/Carousel";

export default () => {
    
    const DefaultApp = () => (
        <IntlProvider translations={translations}>
            <Navbar News={News}/>
            <Carousel/>
        </IntlProvider>
    )
    return <DefaultApp/>
}