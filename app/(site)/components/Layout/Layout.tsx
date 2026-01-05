import {LayoutProps} from "@/app/(site)/components/Layout/Layout.props";
import {FunctionComponent, JSX} from "react";
import {Footer} from "@/app/(site)/components/Footer/Footer";
import {Sidebar} from "@/app/(site)/components/Sidebar/Sidebar";
import {Header} from "@/app/(site)/components/Header/Header";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};