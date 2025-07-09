'use client'

import { useState } from "react";
import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import NextImage from 'next/image';
import { Button } from 'primereact/button';
import { SideBar } from "./SideBar";


export function Header() {
    const [visible, setVisible] = useState(false);
    return (
        <header className="w-full py-4 px-6 md:px-12 flex flex-col items-center gap-2 bg-[#FFFFFF] fixed top-0 left-0 z-50 shadow-md min-[768px]:gap-4">
            <div className="w-full flex flex-col justify-between items-center min-[1440px]:flex-row min-[768px]:flex-col min-[1280px]:flex-row">
                <NextImage
                    src="/instasplash3.PNG"
                    alt="instasplash logo"
                    width={150}
                    height={50}
                    loading="lazy"
                 />
                <SearchBar />

                <div className="items-center gap-5 max-[640px]:hidden min-[768px]:hidden min-[1280px]:flex">
                    <div className="flex justify-between items-center gap-3">
                        <Button
                        label="Cadastrar"
                        icon="pi pi-user-plus"
                        className="w-full"
                        style={{fontSize:"10px", paddingLeft:10}}
                        />
                        <Button
                        label="Entrar"
                        icon="pi pi-sign-in"
                        className="w-full p-button-outlined"
                        style={{fontSize:"10px"}}
                        />
                    </div>
                </div>
                <i onClick={() => setVisible(!visible)} className="pi pi-bars absolute right-4 cursor-pointer"></i>
            </div>
            <NavBar />
            <SideBar visible={visible} setVisible={setVisible} />
        </header>
    )
}