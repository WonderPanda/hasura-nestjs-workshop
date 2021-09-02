import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SdkModule } from './sdk/sdk.module';
import { ItemModule } from './item/item.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SdkModule,
    ItemModule,
    GraphQLModule.forRoot({ autoSchemaFile: true, playground: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
