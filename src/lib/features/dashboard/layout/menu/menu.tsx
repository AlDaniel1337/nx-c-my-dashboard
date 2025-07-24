import { JSX } from "react";
import { BrowsersOutline, Football } from '@/lib/config/icons';
import { ROUTES } from "@/lib/config/Routes";


interface MenuItemProps {
    path: string;
    icon: JSX.Element;
    title: string;
    subtitle: string;
}

export const menuItems: MenuItemProps[] = [
    {
        title: "Counter",
        subtitle: "Estado local",
        path: ROUTES.counter,
        icon: <BrowsersOutline size={40} />,
    },

    {
        title: "Pokedex",
        subtitle: "Generación estática",
        path: ROUTES.pokemons,
        icon: <Football size={40} />,
    },
]

