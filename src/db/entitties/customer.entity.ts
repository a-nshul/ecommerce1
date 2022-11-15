import { Timestamp } from 'rxjs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
    public constructor(init?: Partial<Customer>) {
        Object.assign(this, init);
      }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName:string;

    @Column()
    email:string;

    @Column()
    phone:number;

    @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      created_at?:Date;

    @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      updated_at?:Date;
}
