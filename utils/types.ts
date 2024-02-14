export type createUserProps ={
    clerkId: string;
    username: string;
    email: string;
    iconimage: string;
};

export type updateuserprops ={
    username: string;
    email: string;
    iconimage: string;
};

export type createquestionpropstype={
    title: string
    description: string,
    images: string[],
    examples: any[],
    constraints:string[] ,
    hints: string[],
    companies: string[],
    level: string,
}