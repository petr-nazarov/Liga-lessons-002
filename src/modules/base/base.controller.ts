import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BaseService } from './base.service';

export abstract class BaseController<TModel, TCreateDto, TUpdateDto> {
  constructor(
    private readonly baseService: BaseService<TModel, TCreateDto, TUpdateDto>,
  ) { }

  @Post()
  create(@Body() createDto: TCreateDto) {
    return this.baseService.create(createDto);
  }

  @Get()
  findAll() {
    return this.baseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: TUpdateDto) {
    return this.baseService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseService.remove(id);
  }
}
