import {
  CommonCronSchedules,
  TrackedHasuraScheduledEventHandler,
} from '@golevelup/nestjs-hasura';
import { Injectable } from '@nestjs/common';
import { gql } from 'graphql-request';
import { EmailService } from 'src/email/email.service';
import { GqlSdk, InjectSdk } from 'src/sdk/sdk.module';

gql`
  query getAggregatePurchases {
    purchases_aggregate {
      aggregate {
        count
      }
      nodes {
        user_id
        purchase_cost
      }
    }
  }
`;

@Injectable()
export class ReportingService {
  constructor(
    @InjectSdk() private readonly sdk: GqlSdk,
    private readonly emailService: EmailService,
  ) {}

  @TrackedHasuraScheduledEventHandler({
    name: 'summarize-purchases',
    cronSchedule: CommonCronSchedules.EveryMinute,
    payload: {},
  })
  public async summarizePurchases() {
    const purchases = await this.sdk.getAggregatePurchases();

    this.emailService.sendEmail(
      'admin@app.com',
      `Total purchases processed: ${purchases.purchases_aggregate.aggregate.count}`,
    );
  }
}
