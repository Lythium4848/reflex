import passport from "../../../../lib/passport";
import router from "../../../../lib/router";

const path = "/api/auth/steam/return";

export default router
    .use(path, passport.authenticate("steam", { failureRedirect: "/" }))
    .get(path, (_, res) => { res.redirect("/") });