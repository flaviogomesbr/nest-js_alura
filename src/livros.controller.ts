import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get() //Obtém dados
  obterTodos(): Livro[] {
    return this.livrosService.obterTodos();
  }

  @Get(':id') //Obtém dados
  obterUm(@Param() params): Livro {
    return this.livrosService.obterUm(params.id);
  }

  @Post() //Criar dados
  criar(@Body() livro: Livro) {
    this.livrosService.criar(livro);
  }

  @Put() //Alterar dados
  alterar(@Body() livro: Livro): Livro {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id') //Apagar dados
  apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
