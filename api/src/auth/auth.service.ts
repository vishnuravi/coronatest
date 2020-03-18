import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(private readonly configService: ConfigService) {}

    async validateAPIKey(apiKey: string): Promise<any> {
        if (this.configService.get('apiToken') == apiKey) {
            return {
                authenticated: true
            }
        } else {
            return null;
        }
    }
    
}
