import Header from './index/Header'
import Features from './index/Features'
import Servers from './index/Servers'
import React from "react";

export default function IndexPage() {
    return (
        <div>
            <div className="py-5" id="hero overflow-hidden">
                <div className="container py-5" id="hero-inner">
                    <Header/>
                </div>
            </div>
            <div className="py-5" id="hero overflow-hidden">
                <div className="container py-5" id="hero-inner">
                    <Features/>
                </div>
            </div>
            <div className="py-5" id="hero overflow-hidden">
                <div className="container py-5" id="hero-inner">
                    <Servers/>
                </div>
            </div>
        </div>
    )
}