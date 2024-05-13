import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreaturesModule } from './creatures/creatures.module';

import { MyConfigModule } from './config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL, // Use the environment variable here
      autoLoadEntities: true,
      synchronize: false,
    }),
    CreaturesModule,
    MyConfigModule, // Add your config module here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
