import passport from "passport";
import SteamStrategy from "passport-steam";
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new SteamStrategy({
    returnURL: `${publicRuntimeConfig.url}/api/auth/steam/return`,
    realm: `${publicRuntimeConfig.url}`,
    apiKey: `${process.env.API_KEY}`
}, (_, profile, done) => {
    // Fetch any more information to populate
    return done(null, profile);
}));

export default passport;