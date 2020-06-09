# The API Spec
Here are all of the routes that you can query!

## Translation
This is a GET request in the `/translate/{string}` route, where `{string}` is the string you'd like to translate into Canadian.

## Trivia
This is a GET request in the `/trivia` or `/` routes, and responds with a fun string about Canada!

## S y r u p
Returns ASCII art of your favourite syrup (obviously, it's maple)!

GET `/syrup/{type}`: If {type} is anything except for `maple`, then you will get 403

## Poutine
On querying GET `/poutine`, you will receive a poutine flavour!

## Hello
On querying GET `/hello`, you will receive a classic, kind Canadian greeting!

## Flag
On querying GET `/flag`, you will get an ASCII art representation of the Canadian flag!

## Healthcare
Query GET `/injury` or `/healthcare` to find out how much an injury would cost over here!