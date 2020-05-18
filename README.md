# FakeData
Generate random data for deno modules.

## Add to your project with [land](https://module.land/~alqubo/FakeData)

`land add alqubo/FakeData`


## Data types availablñe
- NAME
- LASTNAME

## Example

```ts
import { Faker, DataType} from 'alqubo/FakeData@master/main.ts'


Faker({
    name: DataType.NAME,
    lastname: DataType.LASTNAME,
    img: DataType.AVATAR,
    email: DataType.EMAIL
});

```
