import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'

// The ITEMS schema
export type ItemsDocument = Items & Document;

@Schema()
export class Items {
    @Prop({unique:true})
    name: string;

    @Prop()
    price: number;

    @Prop()
    description: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Items)