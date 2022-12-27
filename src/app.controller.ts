import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from './database/prisma.service';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-member-repository';

@Controller('app')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post('member')
  async addMember(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
  }

  // @Get('hello')
  // async getHello(@Body() body: CreateTeamMemberBody) {
  //   const { name, function: memberFunction } = body;

  //   const member = await this.prisma.rocketTeamMember.create({
  //     data: {
  //       id: randomUUID(),
  //       name,
  //       function: memberFunction
  //     }
  //   });

  //   return {
  //     member
  //   };
  // }
}
