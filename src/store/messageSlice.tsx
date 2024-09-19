export interface MessageSlice {
    username: string;
    message: string;
    time: string;

    setUsername: (username: string) => void;
    setMessage: (message: string) => void;
    setTime: (time: string) => void;
}
