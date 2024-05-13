import { Injectable } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Creature } from './entities/creature.entity';
@Injectable()
export class CreaturesService {
  constructor(
    @InjectRepository(Creature)
    private readonly creatureRepository: Repository<Creature>,
  ) {}
  create(createCreatureDto: CreateCreatureDto) {
    return this.creatureRepository.create(createCreatureDto);
  }

  findAll() {
    return this.creatureRepository.find();
  }

  findOne(id: number) {
    return this.creatureRepository.findOneBy({ id });
  }

  update(id: number, updateCreatureDto: UpdateCreatureDto) {
    return this.creatureRepository.update(id, updateCreatureDto);
  }

  remove(id: number) {
    return this.creatureRepository.delete(id);
  }
}
