export interface AdminAttractionFormInterface {
    name: string,
    location: number,
    latitude: string,
    longitude: string,
    price: string,
    ranking: number,
    hours: string,
    duration: string,
    image: string,
    description: string,
    isActive: boolean,
}

export interface PostAttractionFormInterface {
    id: number,
    name: string,
    location: number,
    latitude: string,
    longitude: string,
    price: string,
    ranking: number,
    hours: string,
    duration: string,
    image: string,
    description: string,
    isActive: boolean,
}

export interface AttractionsCartInterface {
    id: number;
    name: string;
    isActive: boolean;
    hours: string;
    city: string;
    country: string;
    latitude: string;
    ranking: number;
    longitude: string;
    price: number;
    duration: string;
    image: string;
    quantity: number;
}

export interface AttractionInterface {
    id: number,
    name: string,
    Location: { city: string, country: string },
    latitude: string,
    longitude: string,
    price: number,
    ranking: number,
    hours: string,
    duration: string,
    image: string,
    description: string,
    isActive: boolean,
}

export interface LocationInterface {
    id: number,
    city: string,
    country: string,
}

export interface LocationFormInterface {
    city: string,
    country: string,
}

export interface PropCards {
    data: AttractionInterface[];
    flag: boolean;
    setFlag: (newState: boolean) => void;
}

export interface UserInterface {
    id: number,
    name: string,
    dni: string,
    image: string,
    email: string,
    password: string,
    isActive: boolean,
    roleID: number
}

export interface UserEditInterface {
    id: number,
    name: string,
    email: string,
    isActive: boolean,
    roleID: number
}

export interface UserFormInterface {
    name: string,
    dni: string,
    image: string,
    email: string,
    password: string,
    isActive: boolean,
    roleID: number
}
export interface ButtonProps {
    text: string,
    size: string,
};