import { useEffect, useMemo, useState } from "react";
import { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { LANGS } from "../../enums/enums";



export default ({translations, children}:{ translations: any, children: ReactNode}) => {
    const [locale, setLocale] = useState<string>(LANGS.DEFAULT);

    const getLocale = (l: string) => l.slice(0,2);

    const handleSetLocale = () => {
        const userLocale = navigator.language;
        setLocale(getLocale(userLocale));
    }

    const isNavLangDefault = useMemo(() => navigator.language === LANGS.DEFAULT, [navigator.language])

    useEffect(() => {
        !isNavLangDefault && handleSetLocale();
    }, [isNavLangDefault]);

    console.log(locale);
    

    return (
      <IntlProvider 
        locale={"es-CO"} 
        //defaultLocale={LANGS.DEFAULT}
        messages={translations["es"]}> //TODO change to 'locale'
            {children}
      </IntlProvider>
    );
}