import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class ProductReqDto {


    public constructor(init?: Partial<ProductReqDto>) {
        Object.assign(this, init);
    }
   
    
    @ApiProperty()
    Name: string;
  
    @ApiProperty()
    Desc: string;
  
    @ApiProperty()
    SKU: string;
  
    @ApiProperty({ nullable: true })
    CategoryId: number;
  
    @ApiProperty({ nullable: true })
    InventoryId: number;
  
    @ApiProperty()
    Price: string;
  

}


export class SignUpResDto {
    
    public constructor(init?: Partial<SignUpResDto>) {
        Object.assign(this, init);
    }

}


