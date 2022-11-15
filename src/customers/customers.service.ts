import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/db/entitties/customer.entity';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CustomersService {
    
    constructor(
        @InjectRepository(Customer)
        private CustomerRepository: Repository<Customer>,
        private dataSource: DataSource 
    ) { }

    async  findAll(): Promise<Customer[]> {
        return await this.CustomerRepository.find();
    }

    async  create(customer: Customer): Promise<Customer> {
       const customerData = await this.CustomerRepository.save(customer)
       return customerData
        //return await this.CustomerRepository.save(Customer);
    }

    async update(customer: Customer): Promise<UpdateResult> {
        return await this.CustomerRepository.update(customer.id, customer);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.CustomerRepository.delete(id);
}
}
