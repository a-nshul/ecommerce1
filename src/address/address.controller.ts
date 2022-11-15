import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Address } from'src/db/entitties/address.entity';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    
    constructor(private addressService: AddressService){}
@Get()
  async index(): Promise<Address[]> {
   return await this.addressService.findAll();
   //findAll(): string {
    //return 'this action return all users';
   }

 
 @Post()
    async create(@Body() addressData: Address): Promise<any> {
      return this.addressService.create(addressData);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() addressData: Address): Promise<any> {
      addressData.id = Number(id);
        console.log('Update #' + addressData.id)
        return this.addressService.update(addressData);
    }  


    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.addressService.delete(id);
    }  

}