// src/quests/quests.module.ts
import { Module } from '@nestjs/common';
import { QuestsService } from './quests.service';
import { QuestsController } from './quests.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [QuestsService],
  controllers: [QuestsController],
})
export class QuestsModule {}
