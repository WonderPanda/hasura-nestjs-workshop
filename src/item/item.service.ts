import { Injectable, NotFoundException } from '@nestjs/common';
import { gql } from 'graphql-request';
import { GqlSdk, InjectSdk } from 'src/sdk/sdk.module';

gql`
  query getItem($id: Int!) {
    items_by_pk(id: $id) {
      sellerId: user_id
      cost
    }
  }

  mutation purchaseItem(
    $itemId: Int!
    $buyerId: Int!
    $sellerId: Int!
    $decrementBuyerCoins: Int!
    $incrementSellerCoins: Int!
  ) {
    buyer: update_users_by_pk(
      pk_columns: { id: $buyerId }
      _inc: { coins: $decrementBuyerCoins }
    ) {
      coins
    }
    seller: update_users_by_pk(
      pk_columns: { id: $sellerId }
      _inc: { coins: $incrementSellerCoins }
    ) {
      coins
    }
    purchase: insert_purchases_one(
      object: {
        purchase_cost: $incrementSellerCoins
        user_id: $buyerId
        item_id: $itemId
      }
    ) {
      item {
        secret
      }
    }
  }
`;

export interface PurchaseItemArgs {
  itemId: number;
  userId: number;
}

@Injectable()
export class ItemService {
  constructor(@InjectSdk() private readonly sdk: GqlSdk) {}

  async purchaseItem(args: PurchaseItemArgs) {
    const { itemId, userId } = args;

    const { items_by_pk: item } = await this.sdk.getItem({
      id: itemId,
    });

    if (!item) {
      throw new NotFoundException(`Could not find item with id ${itemId}`);
    }

    const { cost, sellerId } = item;

    try {
      const preArgs = {
        buyerId: userId,
        sellerId,
        itemId,
        decrementBuyerCoins: cost * -1,
        incrementSellerCoins: cost - 1,
      };

      const result = await this.sdk.purchaseItem(preArgs);

      return result;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
