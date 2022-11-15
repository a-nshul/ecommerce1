import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { product } from 'src/db/entitties/product.entities';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductReqDto } from './product.dto';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(product)
        private CustomerRepository: Repository<product>,
    ) { }

    async  findAll(): Promise<product[]> {
        return await this.CustomerRepository.find();
    }

    async  create(product: ProductReqDto): Promise<product> {
       const customerData = await this.CustomerRepository.save(product)
       return customerData
        //return await this.CustomerRepository.save(Customer);
    }

    async update(id:number,productReqObj: ProductReqDto): Promise<UpdateResult> {
        return await this.CustomerRepository.update(id, productReqObj);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.CustomerRepository.delete(id);
}
}
