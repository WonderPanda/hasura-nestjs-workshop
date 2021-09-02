import { UseGuards } from '@nestjs/common';
import {
  Args,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { GqlJwtAuthGuard } from 'src/auth/jwt.guard';
import { ItemService } from './item.service';

@ObjectType()
class PurchasedItemResult {
  @Field({ nullable: true })
  itemId?: number;
  @Field({ nullable: true })
  secret?: string;
  @Field({ nullable: true })
  remainingCoins?: number;
  @Field({ nullable: true })
  error?: string;
}

@UseGuards(GqlJwtAuthGuard)
@Resolver()
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Query((_) => String)
  health() {
    return 'healthy';
  }

  @Mutation((_) => PurchasedItemResult)
  async purchaseItem(
    @Args({ name: 'itemId', type: () => Int }) itemId: number,
    @CurrentUser() user: { userId: number },
  ): Promise<PurchasedItemResult> {
    const { userId } = user;

    try {
      const purchaseResult = await this.itemService.purchaseItem({
        itemId,
        userId,
      });

      return {
        itemId,
        remainingCoins: purchaseResult.buyer.coins,
        secret: purchaseResult.purchase.item.secret,
      };
    } catch (e) {
      return {
        error: e,
      };
    }
  }
}
