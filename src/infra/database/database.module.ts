import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaAttachmentsRepository } from './prisma/repositories/prisma-attachments-repository'
import { AttachmentsRepository } from '@/domain/marketplace/application/repositories/attachments-repository'
import { PrismaUserAttachmentsRepository } from './prisma/repositories/prisma-user-attachments-repository'
import { UserAttachmentsRepository } from '@/domain/marketplace/application/repositories/user-attachments-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: AttachmentsRepository,
      useClass: PrismaAttachmentsRepository,
    },
    {
      provide: UserAttachmentsRepository,
      useClass: PrismaUserAttachmentsRepository,
    },
  ],
  exports: [
    PrismaService,
    AttachmentsRepository,
    UserAttachmentsRepository,
  ],
})
export class DatabaseModule {}
