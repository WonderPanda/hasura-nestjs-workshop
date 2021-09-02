import {
  CommonCronSchedules,
  TrackedHasuraScheduledEventHandler,
} from '@golevelup/nestjs-hasura';
import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';
import { SdkModule } from 'src/sdk/sdk.module';
import { ReportingService } from './reporting.service';

@Module({
  imports: [SdkModule, EmailModule],
  providers: [ReportingService],
})
export class ReportingModule {}
