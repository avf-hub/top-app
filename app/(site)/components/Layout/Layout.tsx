import {LayoutProps} from "@/app/(site)/components/Layout/Layout.props";
import {JSX} from "react";
import {Footer} from "@/app/(site)/components/Footer/Footer";
import {Sidebar} from "@/app/(site)/components/Sidebar/Sidebar";
import {Header} from "@/app/(site)/components/Header/Header";

export const Layout = ({children}: LayoutProps): JSX.Element => {
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