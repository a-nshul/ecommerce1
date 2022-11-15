import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class OrderReqDto {
    public constructor(init?: Partial<OrderReqDto>) {
        Object.assign(this, init);
    }
    @ApiProperty()
    id: number;
   @ApiProperty()
   CustomerId:number;


    @ApiProperty()
    PaymentId:number;


    @ApiProperty()
    Total:number;

    @ApiProperty()
    AccountNumber:string;

    @ApiProperty()
    Expiry:Date;
    @ApiProperty()
    PaymentType:string;
    @ApiProperty()
    Provider:string;
    @ApiProperty()
    modified_at:Date;
}


export class SignUpResDto {
    
    public constructor(init?: Partial<SignUpResDto>) {
        Object.assign(this, init);
    }

}

function PrimaryGenerated() {
    throw new Error('Function not implemented.');
}