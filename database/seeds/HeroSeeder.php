<?php

use Illuminate\Database\Seeder;

class HeroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Hero::create(["name" => "Colossus"]);
        \App\Hero::create(["name" => "Cyclops"]);
        \App\Hero::create(["name" => "Gambit"]);
        \App\Hero::create(["name" => "Iceman"]);
        \App\Hero::create(["name" => "Jean Grey"]);
        \App\Hero::create(["name" => "Nightcrawler"]);
        \App\Hero::create(["name" => "Storm"]);
        \App\Hero::create(["name" => "Wolverine"]);
    }
}
