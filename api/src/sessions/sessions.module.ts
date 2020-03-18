import { Module, RequestMethod } from '@nestjs/common';
import { NestSessionOptions, SessionModule } from 'nestjs-session';
import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { SessionsController } from './sessions.controller';
import session from 'express-session';
import ConnectSessionSequelize from 'connect-session-sequelize';

@Module({
    imports: [
        SessionModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService): Promise<NestSessionOptions> => {
                let SequelizeStore = ConnectSessionSequelize(session.Store);
                let sequelize = new Sequelize({
                    dialect: 'postgres',
                    host: configService.get<string>('postgres.host'),
                    port: +configService.get('postgres.port'),
                    username: configService.get<string>('postgres.username'),
                    password: configService.get<string>('postgres.password'),
                    database: configService.get<string>('postgres.database'),
                    logging: false,
                    define: {
                        paranoid: true,
                        underscored: true
                    }
                });
                let store = new SequelizeStore({
                    db: sequelize,
                    tableName: 'sessions',
                    expiration: 2592000000
                });
                store.sync();
                return {
                    session: {
                        store,
                        secret: configService.get('sessionSecret'),
                        cookie: {
                            maxAge: 2592000000,
                            httpOnly: true
                        }
                    },
                    exclude: [
                        { path: 'docs', method: RequestMethod.GET }
                    ]
                };
            }
        })
    ],
    controllers: [SessionsController]
})
export class SessionsModule {}
