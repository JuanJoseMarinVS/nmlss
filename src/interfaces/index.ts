export interface Service {
    id: string;
    title: string;
    description: string;
    background: string;
    miniature: string;
    hero: {
        image: string;
        slogan: string;
        action: string;
        description: string;
        description2?: string;
        descriptionBold: string;
    };
    intro: {
        word: string;
        title: string;
        description: string;
        descriptionBold?: string;
    };
    items: {
        title: string;
        list: {
            title: string;
            description: string;
            image: string;
        }[];
    };
}

export interface Project {
    id: string;
    image: string;
    background: string;
    to: string;
    title: string;
    slogan: string;
    services: string[];
    description: string;
    hero: string;
    images: string[];
}

export interface ProjectsCardProps {
    to: string;
    image: string;
    background: string;
    title: string;
    services: string[];
}

export interface Testimonial {
    id: string;
    image: string;
    author: string;
    role: string;
    text: string;
}
