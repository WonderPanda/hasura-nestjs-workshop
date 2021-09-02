import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';
import { SdkModule } from 'src/sdk/sdk.module';

@Module({
  imports: [SdkModule],
  providers: [ItemResolver, ItemService],
})
export class ItemModule {}
