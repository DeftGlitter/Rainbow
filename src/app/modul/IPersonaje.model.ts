export interface Welcome {
    results: Result[];
}

export interface Result {
    id:          number;
    name:        string;
    iconUrl:     string;
    description: string;
}
