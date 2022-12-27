import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { RocketMembersRepository } from '../rocket-member-repository';

@Injectable()
export class PrismaRocketMembersRepository implements RocketMembersRepository {
    constructor(private prisma: PrismaService) {}

    async create(name: string, memeberFunction: string): Promise<void> {
        await this.prisma.rocketTeamMember.create({
            data: {
                id: randomUUID(),
                name,
                function: memeberFunction
            }
        });
    }
}