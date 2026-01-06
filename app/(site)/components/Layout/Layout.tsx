import {LayoutProps} from "@/app/(site)/components/Layout/Layout.props";
import {FunctionComponent, JSX} from "react";
import {Footer} from "@/app/(site)/components/Footer/Footer";
import {Sidebar} from "@/app/(site)/components/Sidebar/Sidebar";
import {Header} from "@/app/(site)/components/Header/Header";
import styles from "./Layout.module.css";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
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