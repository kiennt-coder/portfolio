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