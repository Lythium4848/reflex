
import React from "react";
import Header from "./terms/Header";
import Details from "./terms/Details";

export default function TermsPage() {
    return (
        <div>
            <div className="py-5" id="hero overflow-hidden">
                <Header></Header>
            </div>

            <div className="py-5" id="hero overflow-hidden">
                <Details></Details>
            </div>
        </div>
    )
}