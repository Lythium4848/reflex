import Header from '../components/index/Header'
import Features from '../components/index/Features'
import Servers from '../components/index/Servers'
import Management from '../components/index/Management'
import React from "react";
import router from "../lib/router";
import Navbar from "../components/Navbar";

export default function Home({user}) {
  return (
      <div>
          <Navbar user={user}/>
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

export async function getServerSideProps({req, res}) {
    await router.run(req, res);
    return { props: { user: req.user || null } };
}
