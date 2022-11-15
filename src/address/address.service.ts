import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/db/entitties/address.entity';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AddressService {
    
    constructor(
        @InjectRepository(Address)
        private AddressRepository: Repository<Address>,
        private dataSource: DataSource 
    ) { }

    async  findAll(): Promise<Address[]> {
        return await this.AddressRepository.find();
    }

    async  create(Address: Address): Promise<Address> {
       const AddressData = await this.AddressRepository.save(Address)
       return AddressData
        //return await this.CustomerRepository.save(Customer);
    }

    async update(address: Address): Promise<UpdateResult> {
        return await this.AddressRepository.update(address.id, address);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.AddressRepository.delete(id);
}
}