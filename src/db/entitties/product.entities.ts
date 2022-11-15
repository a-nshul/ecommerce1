import { Timestamp } from 'rxjs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// by Nitin dhakad
@Entity()
export class product {
  public constructor(init?: Partial<product>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Name: string;

  @Column()
  Desc: string;

  @Column()
  SKU: string;

  @Column({ nullable: true })
  CategoryId: number;

  @Column({ nullable: true })
  InventoryId: number;

  @Column()
  Price: string;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' , nullable:true})
  CreatedAt?: Date;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP', nullable:true })
  UpdatedAt?: Date;
}




