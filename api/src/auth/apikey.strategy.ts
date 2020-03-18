import Strategy from 'passport-headerapikey';
// import {Strategy} from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class APIKeyStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super(
            {
                header: 'Authorization',
                prefix: ''
            },
            null,
            async (apiKey, done) => {
                return await this.validate(apiKey, done);
            }
        );
    }

    async validate(apiKey: any, done: any) {
        let result = await this.authService.validateAPIKey(apiKey);
        if (result) return done(null, { apiKey });
        else return done(null, false);
    }
}
