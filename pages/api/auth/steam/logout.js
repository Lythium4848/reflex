import router from "../../../../lib/router";

const path = "/api/auth/steam/logout";

export default router
    .get(path, (req, res) => { req.logout(); res.redirect("/") });