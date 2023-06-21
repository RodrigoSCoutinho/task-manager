import { ProductModule } from './products/product.module';
import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';


@Module({
  imports: [UserModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
