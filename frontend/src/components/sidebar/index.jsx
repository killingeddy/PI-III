import { GiCoral, GiJellyfish, GiOctopus, GiIceberg, GiJugglingSeal, GiSubmarine, GiCirclingFish } from 'react-icons/gi';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import React from 'react';
import Link from 'next/link';

export default function SidebarComponent() {

    const [collapsed, setCollapsed] = React.useState(true);

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
                borderBottomRightRadius: collapsed ? '60px' : '100px',
                backgroundColor: '#efefd0',
                padding: '15px 0px',
            }}
            onMouseEnter={() => setCollapsed(false)}
            onMouseLeave={() => setCollapsed(true)}>
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
            <Menu
                rootStyles={{
                    position: 'relative',
                    width: '100%',
                }}
                menuItemStyles={{
                    button: ({ level, active, disabled }) => ({
                        backgroundColor: 'transparent',
                        width: '100%',
                        borderRadius: '2rem 0 0 2rem',
                        margin: '0.2rem',
                        '&:hover': {
                            backgroundColor: '#f7c59f',
                        },
                    }),
                    icon: ({ level, active, disabled }) => ({
                        backgroundColor: 'transparent',
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
                <Link href="/">
                    <MenuItem className='font-title tracking-wide text-dorange' icon={<GiCoral size={'30px'} color='#ff6b35' />}>Ínicio</MenuItem>
                </Link>
                <Link href="/gallery">
                    <MenuItem className='font-title tracking-wide text-dblue' icon={<GiOctopus size={'30px'} color='#004e89' />}>Galeria</MenuItem>
                </Link>
                <Link href="/pet">
                    <MenuItem className='font-title tracking-wide text-dorange' icon={<GiJugglingSeal size={'30px'} color='#ff6b35' />}>Seu bichinho</MenuItem>
                </Link>
                <Link href="/learning">
                    <MenuItem className='font-title tracking-wide text-dblue' icon={<GiCirclingFish size={'30px'} color='#004e89' />}>Centro de aprendizagem</MenuItem>
                </Link>
                <Link href="/preservation">
                    <MenuItem className='font-title tracking-wide text-dorange' icon={<GiIceberg size={'30px'} color='#ff6b35' />}>Preservação</MenuItem>
                </Link>
                <Link href="/faq">
                    <MenuItem className='font-title tracking-wide text-dblue' icon={<GiSubmarine size={'30px'} color='#004e89' />}>Perguntas frequentes</MenuItem>
                </Link>
                <Link href="/contact">
                    <MenuItem className='font-title tracking-wide text-dorange' icon={<GiJellyfish size={'30px'} color='#ff6b35' />}>Contato</MenuItem>
                </Link>
            </Menu>
        </Sidebar>
    )
}