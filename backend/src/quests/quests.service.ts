import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateQuestDto } from './dto/create-quest.dto';

@Injectable()
export class QuestsService {
  constructor(private prisma: PrismaService) {}

  async create(createQuestDto: CreateQuestDto) {
    return this.prisma.quest.create({
      data: createQuestDto,
    });
  }

  async findAll() {
    return this.prisma.quest.findMany();
  }
}