import { Timestamp } from 'rxjs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Address{
    public constructor(init?: Partial<Address>) {
        Object.assign(this, init);
      }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    CustomerId;

    @Column('varchar',{length: 50})
    AddressLine1;

    @Column('varchar',{length: 50})
    AddressLine2;

    @Column('varchar',{length: 50})
    City;

    @Column('varchar',{length: 50})
    PostalCode;

    @Column('varchar',{length: 50})
    Country;

    @Column('varchar',{length: 50})
    Phone;

    @Column('varchar',{length: 50})
    Mobile;

    }




