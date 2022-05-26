import { useRouter } from "next/router";

export function Toolbar() {
    const router = useRouter();

    return(
        <div className="w-full h-12 flex justify-center">
            <div className="m-6 cursor-pointer hover:text-sky-600" onClick={() => router.push('/')}>Home</div>
            <div className="m-6 cursor-pointer hover:text-sky-600" onClick={() => router.push('/feed/1')}>Feed</div>
            <div className="m-6 cursor-pointer hover:text-sky-600" onClick={() => router.push('/eom')}>About Me</div>
            <div className="m-6 cursor-pointer hover:text-sky-600" onClick={() => window.location.href = 'https://www.linkedin.com/in/jassegama/'}>Linkedin</div>
        </div>
    )
};