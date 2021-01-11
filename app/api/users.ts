export interface User {
    id: string
    firstName: string,
    picture: string,
    email: string,
    lastName: string,
    gender: string,
    registerDate: string,
    location: Location,

}

export interface Location {
    street: string,
    city: string,
    state: string,
    country: string,
    timezone: string
}

interface UsersResponse {
    data: User[]
}

export async function getUsers(): Promise<User[]> {
    const url = 'https://dummyapi.io/data/api/user?limit=10';
    const headers: HeadersInit = {
        'app-id': '5ffb9d685d8b42683019f0ae',
    };
    const opts: RequestInit = {
        method: 'GET',
        headers,
    };
    const res = await fetch(url, opts)
    const response = await res.json()
    const users: User[] = response.data
    return users

}

export async function getUserInfo(userid): Promise<User> {
    const url = `https://dummyapi.io/data/api/user/${userid}`;
    console.log(url)
    const headers: HeadersInit = {
        'app-id': '5ffb9d685d8b42683019f0ae',
    };
    const opts: RequestInit = {
        method: 'GET',
        headers,
    };
    const res = await fetch(url, opts)
    const user: User = await res.json()
    return user

}