import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Customer } from 'src/db/entitties/customer.entity';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
    
    constructor(private customersService: CustomersService){}
@Get()
  async index(): Promise<Customer[]> {
   return await this.customersService.findAll();
   
   }

 
 @Post()
    async create(@Body() customerData: Customer): Promise<any> {
      return this.customersService.create(customerData);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() customerData: Customer): Promise<any> {
        customerData.id = Number(id);
        console.log('Update #' + customerData.id)
        return this.customersService.update(customerData);
    }  


    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.customersService.delete(id);
    }  

}
