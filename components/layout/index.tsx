import React,{PropsWithChildren, useState,useEffect,} from 'react';
import { useLockBodyScroll, useMedia, useWindowSize } from "react-use";
import { useRouter } from "next/router";
import NProgress from "nprogress";
// import Logo from '../../public/assets/logo/logo'
import Image from 'next/image';
import Logo from '../../public/assets/logo/dhd-logo.png'




type LayoutProps = PropsWithChildren<{
    title?: string;
    meta?: any;
  }>;

const Layout = ({ children, title, meta }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width, height } = useWindowSize();
  const isWide = useMedia("(min-width: 480px)");
  const router = useRouter();


  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
      setIsOpen(false);
    });
    router.events.on("routeChangeError", () => {
      NProgress.done();
      setIsOpen(false);
    });
  });


    useLockBodyScroll(isWide && isOpen ? true : false);
  
    return (
        <>
           {/* nav  */}
           <nav className="fixed top-0 w-full bg-white z-50">
            <div className="container flex flex-row pr-8 md:pr-4 px-4 py-4">
              <div><Image src={Logo} /></div>
            </div>
           </nav>

           {children}
           {/* footer */}
        </>
    )
}

export default Layout
