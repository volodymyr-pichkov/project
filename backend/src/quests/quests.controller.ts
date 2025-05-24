import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuestsService } from './quests.service';
import { CreateQuestDto } from './dto/create-quest.dto';

@Controller('quests')
export class QuestsController {
  constructor(private readonly questsService: QuestsService) {}

  @Post()
  create(@Body() createQuestDto: CreateQuestDto) {
    return this.questsService.create(createQuestDto);
  }

  @Get()
  findAll() {
    return this.questsService.findAll();
  }
}