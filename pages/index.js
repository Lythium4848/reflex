import Header from '../components/index/Header'
import Features from '../components/index/Features'
import Servers from '../components/index/Servers'
import Management from '../components/index/Management'
import React from "react";

export default function Home() {
  return (
      <div>
          <div className="flex align-center justify-center">
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
                  <div className="py-5" id="hero overflow-hidden">
                      <div className="container py-5" id="hero-inner">
                          <Management/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}