import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items, ItemsDocument } from './schema/items.schema';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(
    // Here you can inject models into the service
    @InjectModel(Items.name) private itemsModule: Model<ItemsDocument>,
  ) {}


  async create(createItemDto: CreateItemDto) {
    // DTO createItemDTO --> body data
    const itemCreated = this.itemsModule.create(createItemDto)
    console.log(itemCreated)
    return itemCreated;
  }

 async findAll() {
    const list = await this.itemsModule.find({});
    return list
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
