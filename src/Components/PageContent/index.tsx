import {Layout} from "antd";
import {ChildrenProp} from "@/types";

const PageContent = ({children}: ChildrenProp) => (
    <Layout >
        {children}
    </Layout>
    )

export default PageContent;

