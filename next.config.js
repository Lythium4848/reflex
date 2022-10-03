/** @type {import('next').NextConfig} */
const navConfig = require("./config/navbar")
const footerConfig = require("./config/footer")
const mainConfig = require("./config/config")
const featuresConfig = require("./config/index/features");
const serversConfig = require("./config/index/servers");
const managementConfig = require("./config/index/management");
const privacyConfig = require("./config/legal/privacy");
const termsConfig = require("./config/legal/terms");

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.STEAM_API_KEY,
    SESSION_SECRET: process.env.SESSION_SECRET
  },
  publicRuntimeConfig: {
    name: mainConfig.name,
    description: mainConfig.description,
    logo: mainConfig.logo,
    url: mainConfig.url,
    featuresTitle: featuresConfig.featuresTitle,
    featuresDesc: featuresConfig.featuresDesc,
    serversTitle: serversConfig.serversTitle,
    serversDesc: serversConfig.serversDesc,
    features: featuresConfig.features,
    navLinks: navConfig.navLinks,
    servers: serversConfig.servers,
    managementTitle: managementConfig.managementTitle,
    managementDesc: managementConfig.managementDesc,
    management: managementConfig.management,
    footerLinks: footerConfig.footerLinks,
    privacyTitle: privacyConfig.title,
    privacyDesc: privacyConfig.description,
    privacyDetails: privacyConfig.details,
    termsTitle: termsConfig.title,
    termsDesc: termsConfig.description,
    termsDetails: termsConfig.details,
    theme: mainConfig.theme
  },
  images: {
    domains: ["cdn.discordapp.com"]
  }
}

module.exports = nextConfig
