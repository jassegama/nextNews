import { useRouter } from "next/router";

export function Toolbar() {
    const router = useRouter();

    return(
        <div className="flex justify-center items-center  mt-2 mx-auto h-12 w-5/6 rounded bg-[#1D2951]">
            <div className="m-6 cursor-pointer text-white hover:text-sky-600" onClick={() => router.push('/')}>Home</div>
            <div className="m-6 cursor-pointer text-white  hover:text-sky-600" onClick={() => router.push('/feed/1')}>Feed</div>
            <div className="m-6 cursor-pointer text-white hover:text-sky-600" onClick={() => router.push('/eom')}>About Me</div>
            <div className="m-6 cursor-pointer text-white hover:text-sky-600" onClick={() => window.location.href = 'https://www.linkedin.com/in/jassegama/'}>Linkedin</div>
        </div>
    )
};