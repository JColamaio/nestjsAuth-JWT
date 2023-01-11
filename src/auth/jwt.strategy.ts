import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport'
import { jwtConstants } from "./jwt.constant";

// Injecting the strategy
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            // Extraction function, it does it automatically, don't need to create the functions
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // validates the secret and checks if the token is from the backend, forbidds external injection.
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        })
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
}
