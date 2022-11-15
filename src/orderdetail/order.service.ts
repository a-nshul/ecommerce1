import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/db/entitties/order detail';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class OrderService {
    
    constructor(
        @InjectRepository(Order)
        private OrderRepository: Repository<Order>,
        private dataSource: DataSource 
    ) { }

    async  findAll(): Promise<Order[]> {
        return await this.OrderRepository.find();
    }

    async  create(Order: Order): Promise<Order> {
       const OrderData = await this.OrderRepository.save(Order)
       return OrderData
        //return await this.CustomerRepository.save(Customer);
    }

    async update(order: Order): Promise<UpdateResult> {
        return await this.OrderRepository.update(order.id, order);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.OrderRepository.delete(id);
}
}