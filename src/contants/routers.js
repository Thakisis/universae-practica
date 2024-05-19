import { projects } from "./projects"


const baseRoutes = [
    {
        path: "/",
        element: "App"
    }
]



const routerProjects = projects.map(({ url, id }) => ({    
    path: url,
    element: "Proyecto",
    props: { id }
}))

export const routerConfig = [...baseRoutes, ...routerProjects] 
