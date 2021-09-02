import {
  HasuraInsertEvent,
  TrackedHasuraEventHandler,
} from '@golevelup/nestjs-hasura';
import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { Users } from '../sdk/sdk';

@Injectable()
export class AuthEventsService {
  constructor(private readonly emailService: EmailService) {}

  @TrackedHasuraEventHandler({
    schema: 'public',
    tableName: 'users',
    triggerName: 'user-created',
    definition: {
      type: 'insert',
    },
  })
  userCreated(evt: HasuraInsertEvent<Users>) {
    this.emailService.sendEmail(evt.event.data.new.email, 'Welcome!');
  }
}
