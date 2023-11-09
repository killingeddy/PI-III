import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdClose } from "react-icons/io";
import Loader from "@/components/loader";
import RegisterModal from "../register";
import { Modal } from "@mui/material";
import api from "@/components/api";
import React from 'react';

export default function LoginModal({ open, isOpen }) {

    const [auth, setAuth] = React.useState({
        email: '',
        senha: ''
    });

    const [registerModal, setRegisterModal] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    const login = () => {
        setLoading(true);
        api
            .post('/users/login', auth)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                isOpen(false);
                setAuth({
                    email: '',
                    senha: ''
                });
            })
            .catch((error) => {
                toast.error(`${error.response?.data?.error}`, {
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
            })
    }

    const closeModal = () => {
        isOpen(false);
        setAuth({
            email: '',
            senha: ''
        });
    }

    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            isOpen(false);
        }
    }, [isOpen, registerModal])

    return (
        <Modal
            open={open}
            onClose={() => isOpen(false)}
            className="h-screen w-screen justify-center items-center flex bg-sky-400 bg-opacity-10 backdrop-filter backdrop-blur-md"
            hideBackdrop={true}
            disableEscapeKeyDown={true}
        >
            <div className="p-10 bg-dorange flex justify-between items-center flex-col border-0 rounded-3xl outline-none focus:outline-none relative w-1/3">
                <button className="absolute top-5 right-5" onClick={() => closeModal()}> <IoMdClose size={30} /> </button>
                <RegisterModal open={registerModal} isOpen={setRegisterModal} />
                {
                    loading ?
                        <Loader />
                        :
                        <>
                            <h1 className="text-white text-2xl font-bold mb-5">Login</h1>
                            <input
                                type="text"
                                placeholder="Email"
                                className="bg-neutral w-full outline-none focus:outline-none rounded-3xl p-3 mb-5 font-bold"
                                value={auth.email}
                                onChange={(e) => setAuth({ ...auth, email: e.target.value })}
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                className="bg-neutral w-full outline-none focus:outline-none rounded-3xl p-3 mb-5 font-bold"
                                value={auth.senha}
                                onChange={(e) => setAuth({ ...auth, senha: e.target.value })}
                                onKeyDown={(e) => { if (e.key === 'Enter') login() }}
                            />
                            <button
                                className="bg-dblue w-full outline-none focus:outline-none rounded-3xl p-3 text-white"
                                onClick={() => login()}
                            >
                                Entrar
                            </button>
                            <p className="text-white text-sm font-bold mt-5">Não tem uma conta? <span className="text-dblue cursor-pointer" onClick={() => setRegisterModal(true)}>Cadastre-se</span></p>
                        </>
                }
                <ToastContainer />
            </div>
        </Modal>
    )

}