import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
// import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ItemsModule,
    AuthModule,
    // ConfigModule.forRoot({
      //   isGlobal: true,
      // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
