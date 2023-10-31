import { GiCoral, GiJellyfish, GiOctopus, GiIceberg, GiJugglingSeal, GiSubmarine, GiCirclingFish, GiShipWheel } from 'react-icons/gi';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useRouter } from 'next/router';
import React from 'react';

export default function SidebarComponent() {

    const [collapsed, setCollapsed] = React.useState(true);

    const route = useRouter();

    return (
        <Sidebar
            collapsed={collapsed}
            width={'20vw'}
            transitionDuration={700}
            backgroundColor='#efefd0'
            rootStyles={{
                position: 'fixed',
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                left: 0,
                opacity: 1,
                zIndex: 100,
                border: 'none',
                backgroundColor: '#efefd0',
                padding: '15px 0px',
                height: '100vh',
            }}
            onMouseEnter={() => setCollapsed(false)}
            onMouseLeave={() => setCollapsed(true)}>
            <Menu
                rootStyles={{
                    position: 'relative',
                    width: '100%',
                }}
                menuItemStyles={{
                    button: ({ level, active, disabled }) => ({
                        backgroundColor: active ? '#f7c59f' : 'transparent',
                        width: '100%',
                        borderRadius: '2rem 0 0 2rem',
                        margin: '0.2rem',
                        '&:hover': {
                            backgroundColor: '#f7c59f',
                        },
                    }),
                    SubMenuExpandIcon: ({ level, active, disabled }) => ({
                        display: 'none',
                    }),
                    subMenuContent: ({ level, active, disabled }) => ({
                        width: '90%',
                        marginLeft: '10%',
                        borderRadius: '2rem 0 0 2rem',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }),
                }}
            >
                {
                    collapsed ? (
                        <div className='min-h-1/4'>
                            <h1 className='font-title text-dorange text-xl text-center'>Planeta</h1>
                            <h1 className='font-title text-dblue text-xl text-center'>Aqua</h1>
                        </div>
                    ) : (
                        <div className='flex flex-row justify-center h-1/4'>
                            <h1 className='font-title text-dorange text-3xl text-center mr-2'>Planeta</h1>
                            <h1 className='font-title text-dblue text-3xl text-center'>Aqua</h1>
                        </div>
                    )
                }
            </Menu>
            <Menu
                rootStyles={{
                    position: 'relative',
                    width: '100%',
                }}
                menuItemStyles={{
                    button: ({ level, active, disabled }) => ({
                        backgroundColor: active ? '#f7c59f' : 'transparent',
                        width: '100%',
                        borderRadius: '2rem 0 0 2rem',
                        margin: '0.5rem 0.2rem',
                        '&:hover': {
                            backgroundColor: '#f7c59f',
                        },
                    }),
                    SubMenuExpandIcon: ({ level, active, disabled }) => ({
                        display: 'none',
                    }),
                    subMenuContent: ({ level, active, disabled }) => ({
                        width: '90%',
                        marginLeft: '10%',
                        borderRadius: '2rem 0 0 2rem',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }),
                }}
            >
                <MenuItem onClick={() => window.location.href = '/'} active={route.pathname == '/'} className='font-title tracking-wide text-dorange' icon={<GiCoral size={'30px'} color='#ff6b35' />}>Ínicio</MenuItem>
                <MenuItem onClick={() => window.location.href = '/explore'} active={route.pathname == '/explore'} className='font-title tracking-wide text-dblue' icon={<GiShipWheel size={'30px'} color='#004e89' />}>Explorador</MenuItem>
                <MenuItem onClick={() => window.location.href = '/gallery'} active={route.pathname == '/gallery'} className='font-title tracking-wide text-dorange' icon={<GiOctopus size={'30px'} color='#ff6b35' />}>Galeria</MenuItem>
                <MenuItem onClick={() => window.location.href = '/pet'} active={route.pathname == '/pet'} className='font-title tracking-wide text-dblue' icon={<GiJugglingSeal size={'30px'} color='#004e89' />}>Seu bichinho</MenuItem>
                <MenuItem onClick={() => window.location.href = '/learning'} active={route.pathname == '/learning'} className='font-title tracking-wide text-dorange' icon={<GiCirclingFish size={'30px'} color='#ff6b35' />}>Centro de aprendizagem</MenuItem>
                <MenuItem onClick={() => window.location.href = '/preservation'} active={route.pathname == '/preservation'} className='font-title tracking-wide text-dblue' icon={<GiIceberg size={'30px'} color='#004e89' />}>Preservação</MenuItem>
                <MenuItem onClick={() => window.location.href = '/faq'} active={route.pathname == '/faq'} className='font-title tracking-wide text-dorange' icon={<GiSubmarine size={'30px'} color='#ff6b35' />}>Perguntas frequentes</MenuItem>
                <MenuItem onClick={() => window.location.href = '/contact'} active={route.pathname == '/contact'} className='font-title tracking-wide text-dblue' icon={<GiJellyfish size={'30px'} color='#004e89' />}>Contato</MenuItem>
            </Menu>
        </Sidebar>
    )
}