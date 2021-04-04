Generate random usernames based on a list!

# Installation
* Install `npm install`

# Usage
## Arguments
### --import
Mandatory. Imports a name list, use `-i` for shorthand.
### --format
Format the outputted username:
  * name - grab a name from the imported name list
  * spec - insert a special character. Currently defined: `.-+_!`
  * num - use a random number between 0-9.
  * lett - use a random letter between a-z.

If `--format` is not specified, the default format output will follow `name name num`

### --maxnames
Not mandatory. Specifies the number of usernames to generate. Use
`-m` for shorthand.

## Examples
Generate a formatted username
```
node app.js --import names.txt --format name name num spec

nursegamora8!
```

Arbitrary letters/numbers can also be used ('-' can't be used however.). E.g:
```
node app.js --import names.txt --format I love name lett

Ilovejokerb
```

Generate 5 usernames that conforms to a `spec name + name spec` format:

```
node app.js --import names.txt --maxnames 5 --format spec name + name spec 

-maverick+kingpin!
-captain+hulk!
_black+deadpool+
+heart+tarantula.
_schism+caller+
```

# Notes 
Predefined list was compiled from:
1. [Super hero names](https://hobbylark.com/comic-books/superhero-names)
2. [Villian names](https://hobbylark.com/writing/cool-villain-names)
