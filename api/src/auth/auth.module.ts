import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { APIKeyStrategy } from './apikey.strategy';

@Module({
    imports: [PassportModule],
    providers: [AuthService, APIKeyStrategy]
})
export class AuthModule {}
