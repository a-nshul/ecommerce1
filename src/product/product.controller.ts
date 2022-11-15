import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { product } from 'src/db/entitties/product.entities';
import { ProductReqDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }


    @Get()
    async index(): Promise<product[]> {
        return await this.productService.findAll();

    }


    @Post()
    async create(@Body() productData: ProductReqDto): Promise<any> {
        return await this.productService.create(productData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() customerData: ProductReqDto): Promise<any> {
       // customerData.id = Number(id);
        console.log('Update #' + customerData)
        return  await this.productService.update(id,customerData);
    }


    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return await this.productService.delete(id);
    }

}
