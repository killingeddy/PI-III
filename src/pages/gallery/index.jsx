import Card from "@/components/card";
import React from "react";

export default function Gallery() {

    const [gallery, setGallery] = React.useState([
        {
            id: 1,
            title: 'crab',
            position: '0, 0, 3',
            color: '0xffffff',
        },
        {
            id: 2,
            title: 'killerwhale',
            position: '700, 280, 0',
            color: '0xffffff',
        },
        {
            id: 3,
            title: 'shark',
            position: '3, 0, 1',
            color: '0xffffff',
        },
        {
            id: 4,
            title: 'dolphin',
            position: '1, 0, 1',
            color: '0xffffff',
        },
        {
            id: 5,
            title: 'fish',
            position: '8, 2, 1',
            color: '0xffffff',
        },
        {
            id: 6,
            title: 'jellyfish',
            position: '4, 8, 0',
            color: '0xffffff',
        },
        {
            id: 7,
            title: 'octopus',
            position: '4, 2, -4',
            color: '0xffffff',
        },
        {
            id: 8,
            title: 'seahorse',
            position: '120, 0, 120',
            color: '0xffffff',
        }
    ]);

    return (
        <div className="scrollbar-hide relative w-screen h-screen flex justify-between">
            {gallery.map((item) => (
                <Card obj={item} key={item.id} />
            ))}
        </div>
    )
}