import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/db/entitties/customer.entity';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
  ],

  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {
  static forRoot(arg0: { isGlobal: boolean; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
    throw new Error('Method not implemented.');
}
}
