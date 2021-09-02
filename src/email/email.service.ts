import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  sendEmail(email: string, message: string) {
    console.log(`to: ${email} - message: ${message}`);
  }
}
