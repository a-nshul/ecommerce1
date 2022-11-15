import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class AddressReqDto {
    public constructor(init?: Partial<AddressReqDto>) {
        Object.assign(this, init);
    }
    @ApiProperty()
    customerId: number;
   @ApiProperty()
   lastName:string;


    @ApiProperty()
    AddressLine1:string;


    @ApiProperty()
    AddressLine2:number;

    @ApiProperty()
    City:Date;

    @ApiProperty()
    PostalCode:Date;
    @ApiProperty()
    Country:string;
    @ApiProperty()
    Phone:string;
    @ApiProperty()
    Mobile:string;
}


export class SignUpResDto {
    
    public constructor(init?: Partial<SignUpResDto>) {
        Object.assign(this, init);
    }

}

function PrimaryGenerated() {
    throw new Error('Function not implemented.');
}