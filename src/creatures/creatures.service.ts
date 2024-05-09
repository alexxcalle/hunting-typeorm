import { Injectable } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Creatures } from './entities/creature.entity';

@Injectable()
export class CreaturesService {
  create(createCreatureDto: CreateCreatureDto) {
    return 'This action adds a new creature';
  }

  findAll() {
    return `This action returns all creatures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creature`;
  }

  update(id: number, updateCreatureDto: UpdateCreatureDto) {
    return `This action updates a #${id} creature`;
  }

  remove(id: number) {
    return `This action removes a #${id} creature`;
  }
}
