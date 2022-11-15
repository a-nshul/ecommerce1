import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Order } from'src/db/entitties/order detail';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    
    constructor(private orderService: OrderService){}
@Get()
  async index(): Promise<Order[]> {
   return await this.orderService.findAll();
   //findAll(): string {
    //return 'this action return all users';
   }

 
 @Post()
    async create(@Body() orderData: Order): Promise<any> {
      return this.orderService.create(orderData);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() orderData: Order): Promise<any> {
      orderData.id = Number(id);
        console.log('Update #' + orderData.id)
        return this.orderService.update(orderData);
    }  


    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.orderService.delete(id);
    }  

}