import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'

// The USERS schema
export type UserDocument = Users & Document;

@Schema()
export class Users {
    @Prop({required: true})
    name: string;

    @Prop({required: true, unique: true})
    email: string;

    @Prop({required:true})
    password: string;

}

export const UsersSchema = SchemaFactory.createForClass(Users)