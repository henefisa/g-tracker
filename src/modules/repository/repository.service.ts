import { Injectable } from '@nestjs/common';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import axios from 'axios';

@Injectable()
export class RepositoryService {
  create(createRepositoryDto: CreateRepositoryDto) {
    return 'This action adds a new repository';
  }

  async findAll() {
    const response = await axios.get(
      'https://api.github.com/users/henefisa/repos',
      {
        headers: {
          Authorization: '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',
          Accept: 'application/vnd.github+json',
        },
      },
    );

    return response.data;
  }

  findOne(id: number) {
    return `This action returns a #${id} repository`;
  }

  update(id: number, updateRepositoryDto: UpdateRepositoryDto) {
    return `This action updates a #${id} repository`;
  }

  remove(id: number) {
    return `This action removes a #${id} repository`;
  }
}
