export interface User {
    id: number;
    email: string;
    fullName: string;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

export interface LoginResponse {
    user: User;
    token: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterResponse {
    user: User;
    token: string;
}

export interface RegisterCredentials {
    email: string;
    password: string;
    fullName: string;
}
export interface User {
    id: number;
    email: string;
    fullName: string;
}
export interface UsersState {
    users: User[];
    loading: boolean;
    error: string | null;
}
