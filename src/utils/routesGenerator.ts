import { ReactNode } from "react";

type TAdminRoutes = {
    path: string;
    element: ReactNode;
}      
               
type TProps = {
    name: string,
    path?: string,
    element?: ReactNode;
    children?: TProps[]
}

export const routesGenerator = (items: TProps[]) => {
    const routes = items.reduce((acc: TAdminRoutes[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element
            })
        }

        if (item.children) {
            item.children.forEach(child => {
                acc.push({
                    path: child.path as string,
                    element: child.element
                })
            })
        }
        return acc;
    }, [])
    return routes
}