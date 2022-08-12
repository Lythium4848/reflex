
import React from "react";
import Header from "./privacy/Header";
import Details from "./privacy/Details";

export default function PrivacyPage() {
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