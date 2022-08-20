const navbarConfig = {
    navLinks: [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Forums",
            path: "/forums"
        } ,
        {
            name: "Store",
            path: "/store"
        },
        {
            name: "Other",
            dropdown: [
                {
                    name: "TOS",
                    path: "/legal/terms"
                },
                {
                    name: "Privacy Policy",
                    path: "/legal/privacy"
                },
            ]
        }
    ],
}

module.exports = navbarConfig;