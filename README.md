# Laravel 5, Angular 2 Stub Project

> Full implementation of Hero Detail Tutorial wit API and Database

##### Project contains :
- Restfull Ajax / JSON Api
- Database implementation for storing heroes.
- Full Hero CRUD
 
> This is only meant as a good starting point for ***Laravel / Angular 2*** Development

### Setup For Development

1) Create root project
````sh
$ git clone https://github.com/chris-cmsoft/laravel5-angular2-stub.git *YOUR_PROJECT_NAME*
$ cd *YOUR_PROJECT_NAME*
$ rm -rf .git/
$ git init
$ composer install
$ npm install
$ git remote add origin *YOUR_PROJECT_REPO*
$ git add .
$ git commit -m "initial laravel angular build"
$ git push origin master
````
2) Create and adapt environment file
````sh 
$ cp .env.example .env
````
3) Create your schema / database
````sh
$ mysql -uYOUR_USER -pYOUR_PASSWORD -e "CREATE SCHEMA tour_of_heroes"
````
4) Migrate and seed your application
````sh
$ php artisan migrate --seed
````
5) Start the gulp typescript watcher. (This will compile typescript & copy any template and CSS files to their relevant positions)
````sh 
$ gulp build-typescript && gulp watch-typescript
````
6) In Another / Split window start up the application
````sh
$ php artisan serve
````
7) Go to [localhost:8000](http://localhost:8000) and see it in action  
8) Start building something amazing

### Typescript Compiler

Typescript is kept in resources/assets/typescript.

When compiled the Javascript files end up in public/app.

To compile typescript and watch for changes `$ gulp build-typescript && gulp watch-typescript`
> This will compile typescript and copy any HTML & CSS files to their correct positions in the public directory

### Angular 2 Packages
If any additional packages are needed ( specialised routers / styling components etc. ):

1) Add them to package.json under devDependencies  
2) Run `npm install`  
3) Add Them to the gulpfile copy string  
4) Run `gulp copy`  

### Testing

> Testing has not been implemented as of yet

## License

This laravel5-angular2-stub Project is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
