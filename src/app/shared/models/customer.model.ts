export interface ICustomer {
    name?: string;
    customerPreference: { tastyTags: object, category: string[] }
    email: string;
    password: string,
    image?: string,
    address?: any,
    currentLatLong: { longitude: number, latitude: number }
    longitude?: number,
    latitude?: number,
    dob?: string | string
}