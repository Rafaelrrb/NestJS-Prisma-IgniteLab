import { CancelNotification } from '@application/use-case/cancel-notification';
import { CountRecipientNotifications } from '@application/use-case/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-case/get-recipient-notifications';
import { ReadNotification } from '@application/use-case/read-notification';
import { UnreadNotification } from '@application/use-case/unread-notification';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-case/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
