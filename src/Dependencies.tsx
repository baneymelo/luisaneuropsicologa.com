import IntlProvider from "./Components/Context/Intl/IntlProvider"
import Navbar from "./Components/Navbar";
import translations from "./translations";
import News from "./Components/News";
import {ChildrenProp} from "@/types";
import PageContent from "./Components/PageContent";
import {AppProvider} from "./Components/Context/App";
import {Carousel} from "@/Components";
import {Layout} from "antd";


export default () => {

    const DefaultProviders = ({children}: ChildrenProp) => (
        <AppProvider>
            <IntlProvider
                translations={translations}>
                {children}
            </IntlProvider>
        </AppProvider>
    )

    const DefaultNavBar = () => (
        <Layout>
            <Layout.Header>
                <Navbar/>
            </Layout.Header>
            <Layout.Content>
                <Carousel/>
            </Layout.Content>
        </Layout>
    );

    {/*
    const DefaultContent = () => (
        <Content>
            <Content.Carousel/>
            <Content.About/>
            <Content.Specializations>
                <Specializations>
                    <Specializations.Psychology>
                        <Ages.Child/>
                    </Specializations.Psychology>
                </Specializations>
            </Content.Specializations>
        </Content>
    )
    */}

    
    const DefaultApp = () => (
        <DefaultProviders>
                <DefaultNavBar/>
                {/*<DefaultContent/>

                <DefaultWidget/>
                <DefaultFooter/>
               {/* <Carousel/>*/}
        </DefaultProviders>
    )
    return <DefaultApp/>
}