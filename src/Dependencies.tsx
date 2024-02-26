import IntlProvider from "./Context/Intl/IntlProvider"
import Navbar from "./Components/Navbar";
import translations from "./translations";

export default () => {
    
    const DefaultApp = () => (
        <IntlProvider translations={translations}>
            <Navbar/>   
        </IntlProvider>
    )
    return <DefaultApp/>
}