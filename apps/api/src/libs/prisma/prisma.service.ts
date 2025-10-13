import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  calculatePagination(
    totalItems: number,
    currentPage: number,
    itemsPerPage: number,
  ) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return {
      total: totalItems,
      page: currentPage,
      limit: itemsPerPage,
      totalPages,
    };
  }
}
