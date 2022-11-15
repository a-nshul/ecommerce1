import { Timestamp } from 'rxjs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class ProductCategroy {
    public constructor(init?: Partial<ProductCategroy>) {
        Object.assign(this, init);
      }
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{length: 50})
    Name;

    @Column()
    desc:Text;

    @Column('varchar', {length:50})
      created_at;

      
    }




