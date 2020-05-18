
export enum DataType {
    NAME,
    LASTNAME,
    ADRESS,
    EMAIL,
    WEBSITE,
    AVATAR
}

const dataGenerator = (type: DataType): string => {

    switch(type) {
        case DataType.NAME:
            return "A";
        case DataType.LASTNAME:
            return "B";
        case DataType.AVATAR:
            return "C";
    }

    return "Not found";
}

export const Faker = (format: {[key: string]: DataType}) => {

    const data: {[key: string]: any} = format;
    for(const key in format) {
        data[key] = dataGenerator(format[key]);
    }

    return data;
}


const fakeUser = Faker({
    name: DataType.NAME,
    lastname: DataType.LASTNAME,
    img: DataType.AVATAR,
    email: DataType.EMAIL
});

console.log(fakeUser);

