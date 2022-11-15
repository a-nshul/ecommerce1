import { Timestamp } from 'rxjs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class OrderItems {
    public constructor(init?: Partial<OrderItems>) {
        Object.assign(this, init);
      }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    OrderId:number;

    

    @Column()
    ProductId:number;

    @Column()
    Quantity:number;

    @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      created_at?:Date;

      @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      updated_at?:Date;
    }




