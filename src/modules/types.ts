export interface ILoginBodyModel{
    email: string;
    password: string;
}

export interface  IProfileResponse {
    data: {
        name: string,
        email: string
    };
}

export interface ICreateProductResponse {
    hash: string,
    name: string,
    created: string,
}

export interface IRegistrationBodyModel extends ILoginBodyModel{
    name: string;
}

export interface IRegistrationResponse{
    data: string;
}

export interface IProductModel {
    name: string,
    category: string,
    price: number,
    reviews?:
    [
        {
            hash: string,
            name: string,
            pros: string,
            cons: string
        },
    ],
    characteristics: {
        memory: number,
        colors: string[],
        processor: string,
        graphics: string,
        brightness: number,
        contrast: string,
        matrix: number,
        cameras: number
    }
}

export interface IProductTempModel {
    name: string, // FormDataEntryValue | null,
    price: string,
    memory: string,
    colors: string,
    processor: string,
    graphics: string,
    brightness: string,
    contrast: string,
    matrix: string,
    cameras: string
}

export interface IGetProductsResponseItem {
    name: string,
    category: string,
    price: number,
    hash: string,
    created: string,
    reviews?:
    [
        {
            hash: string,
            name: string,
            pros: string,
            cons: string
        },
    ],
    characteristics: {
        memory: number,
        colors: string[],
        processor: string,
        graphics: string,
        brightness: number,
        contrast: string,
        matrix: number,
        cameras: number
    },
}

export interface IGetProductsResponse {
    data: IGetProductsResponseItem[]
}

export interface IGetOneProductResponse {
    data: IGetProductsResponseItem
}

export interface IReviewForm {
    name: string,
    pros: string,
    cons: string,
}
