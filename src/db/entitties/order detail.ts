import { Timestamp } from 'rxjs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Order {
    public constructor(init?: Partial<Order>) {
        Object.assign(this, init);
      }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    CustomerId:number;

    

    @Column()
    PaymentId:number;

    @Column()
    Total:number;

    @Column()
    AccountNumber:string;

    @Column()
    Expiry:Date;

    @Column()
    PaymentType:string;

    @Column()
    Provider:string;

    @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
    modified_at?:Date;

}

