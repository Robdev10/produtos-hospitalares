import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produts')
export class ProdutosController {
  @Post()
  async create(@Body() body) {
    return { body };
  }

  @Get()
  async listaTudo() {
    return { produts: {} };
  }

  @Get(':id')
  async listaUm(@Param() param) {
    return { user: {}, param };
  }

  @Put(':id')
  async update(@Body() body, @Param() param) {
    return {
      method: 'put',
      body,
      param,
    };
  }

  @Patch(':id')
  async updatePartial(@Body() body, @Param() param) {
    return {
      method: 'patch',
      body,
      param,
    };
  }

  @Delete(':id')
  async delete(@Param() param) {
    return {
      param,
    };
  }
}
