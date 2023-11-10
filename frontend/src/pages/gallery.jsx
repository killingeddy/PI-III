import SidebarComponent from "@/components/sidebar";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "@/components/slide";
import { toast } from "react-toastify";
import api from "@/components/api";
import React from "react";

export default function Gallery() {

    const [especies, setEspecies] = React.useState([]);

    const [loading, setLoading] = React.useState(true);

    const getEspecies = async () => {
        api
            .get("/especie")
            .then((res) => {
                setEspecies(res.data);
            })
            .catch((err) => {
                toast.error(`${err.response?.data?.error}`, {
                    position: "top-left",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .finally(() => {
                setLoading(false);
            });
    }

    React.useEffect(() => {
        getEspecies();
    }, []);

    return (
        <>
            <div className="scrollbar-hide relative containe h-screen bg-dblue overflow-hidden hidden lg:block">
                <SidebarComponent />
                <div className="flex flex-col h-full ml-20 relative overflow-hidden scrollbar-hide items-center justify-center">
                    <Carousel slides={especies} />
                </div>
            </div>
        </>
    )
}