import { Timestamp } from 'rxjs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class CartItems {
    public constructor(init?: Partial<CartItems>) {
        Object.assign(this, init);
      }
    @PrimaryGeneratedColumn()
    id: number;

     @Column()
    ProductId:number;

    @Column()
    Quantity:number;

    @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      created_at?:Date;

      @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      updated_at?:Date;
    }




