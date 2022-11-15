import { Timestamp } from 'rxjs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class PaymentDetails {
    public constructor(init?: Partial<PaymentDetails>) {
        Object.assign(this, init);
      }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    OrderId:number;

    

    @Column()
    Amount:number;

    @Column('varchar',{length: 50})
    Provider;

    @Column('varchar',{length: 50})
     Status;


    @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      created_at?:Date;

      @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      updated_at?:Date;
    }




