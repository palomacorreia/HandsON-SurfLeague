#World Surf League Web(Laravel 5, Angular 2,PHP7) 



##### O Projeto Contém :
-  JSON Api
- Implementação de Banco para armazenamento de Surfistas.
- Full Hero CRUD
 
> ***Laravel / Angular 2*** Development

### Ambiente de Desenvolvimento

1) Criação do Projeto
````
$ composer install
$ npm install
````
2) Crie e adapte o arquivo .env com base no exemplo
````
$ cd .env.example .env
````
3) Crie seu esquema de banco de dados
````
CREATE DATABASE surfeleague
````
4) Execute as migrations para criar as tabelas
````
$ php artisan migrate --seed
````
5) Execute o comando Typescript
````
$ gulp build-typescript && gulp watch-typescript
````
6) Em outra janela de Terminal Execute o sgeuinte comando para dar início ao servidor
````
$ php artisan serve
````
7) Vá para  [localhost:8000](http://localhost:8000) e veja em ação 




## License

This laravel5-angular2-stub Project is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
