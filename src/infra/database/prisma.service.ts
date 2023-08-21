import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { INestApplication } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
    this.$connect();
  }

  async onModuleInit() {
    console.log('PrismaService initialized');
  }

  async enableShutdownHooks(app: INestApplication) {
    const shutdown = async () => {
      await this.$disconnect();
      await app.close();
      process.exit(0);
    };

    process.on('SIGINT', shutdown); // Capturing Ctrl+C
    process.on('SIGTERM', shutdown); // Capturing termination signal
  }
}
// import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';

// @Injectable()
// export class PrismaService extends PrismaClient implements OnModuleInit {
//   async onModuleInit() {
//     await this.$connect;
//   }

//   async enableShutdownHooks(app: INestApplication) {
//     this.$on('beforeExit', async () => {
//       await app.close();
//     });
//   }
// }


