export interface Language {
    name: string;
    code: string;
}

export interface IntroFeature {
    title: string;
    description: string;
    icon: {
        light: string;
        dark: string;
    };
    alt: string;
}

export interface Award {
    name: string;
    year: number;
    award: string;
    location: string;
    description: string;
    icon: {
        light: string;
        dark: string;
    }
    alt: string;
}

export interface Service {
    title: string;
    description: string;
    icon: string;
    alt: string;
}