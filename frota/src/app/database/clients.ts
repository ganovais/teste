export interface IClient {
    id: number;
    name: string;
    cpf: string;
    age: number;
}

export const clients: IClient[] = [
    { id: 1, name: 'Gabriel Novais', cpf: '123.456.789-00', age: 23 },
];
