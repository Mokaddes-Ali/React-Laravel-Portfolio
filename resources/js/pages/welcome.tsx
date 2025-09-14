import { dashboard} from '@/routes';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import Header from '../components/fontend/Header';
import Portfolio from '../components/fontend/Portfolio'
import Contact from '../components/fontend/Contact'
import FollowMe from '../components/fontend/FollowMe'
import UpButton from '../components/fontend/UpButton'
import Testimonial from '../components/fontend/Testimonial'
import Working from '../components/fontend/Working'
import Services from '../components/fontend/Services'
import AboutSection from '../components/fontend/AboutSection'
import HeroSection from '../components/fontend/HeroSection'
import Footer from '../components/fontend/Footer'


export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <div className="flex flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a]">
                <header className="w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>


                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="w-full px-[5%] md:px-[7.5%] 2xl:px-[10%]">
                       <Header />
       <HeroSection />
      <AboutSection />
      <Services />
      <Portfolio />
      <Working />
      <UpButton />
      <FollowMe />
      <Footer />
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
