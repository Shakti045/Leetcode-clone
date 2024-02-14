export const navlinks=[
    {
        label:'Explore',
        path:'/explore'
    },
    {
        label:'Problems',
        path:'/problems'
    },
    {
        label:'Contest',
        path:'/contest'
    },
    {
        label:'Discuss',
        path:'/discuss'
    },
    {
        label:'Interview',
        path:'/interview'
    },
    {
        label:'Store',
        path:'/store'
    },

]

export const cardimages=[
    "/cardimage1.jpeg",
    "/cardimage2.png",
    "/cardimage3.png",
]


type initialcodestype={
    Java:string,
    Python:string,
    Javascript:string,
    'C++':string
}
export const initialcodes:initialcodestype={
    Java:'class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, World!");\n\t}\n}',
    Python:'print("Hello, World!")',
    Javascript:'console.log("Hello, World!")',
    'C++':'#include <iostream>\nusing namespace std;\nint main() {\n\tcout << "Hello, World!";\n\treturn 0;\n}'
}