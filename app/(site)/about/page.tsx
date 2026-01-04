import {Metadata} from "next";
import {JSX} from "react";

export const metadata: Metadata = {
    title: "About"
};

export default function About(): JSX.Element {
    return (
        <div>
            About
        </div>
    );
}