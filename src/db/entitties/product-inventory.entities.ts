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

    @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      created_at?:Date;

      @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      updated_at?:Date;
    }

      
    




