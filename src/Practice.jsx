import img1 from "./assets/avatar-jessica.jpeg"
import "./practice.css";
function Practice() {

    return(
        <>

            <div className="sm:w-[375px] sm:h-11 sm:p-5 md:w-80 md:h-110 md:py-5  bg-[hsl(0,0%,12%)] flex flex-col items-center gap-4 rounded-md">
                <img src={img1} className="w-15 h-15 rounded-full"/>

                <div className="flex flex-col gap-0.2">
                    <h1 className="text-white text-2xl  text-center">Jessica Randall</h1>
                    <p className="text-[hsl(75,94%,57%)] text-sm text-center">London, United Kingdom</p>
                </div>

                <p className="text-sm text-gray-300">"Front-end developer and avid reader."</p>
                <div className="flex flex-col gap-2">
                    <button className="text-center text-[hsl(0,0%,100%)] bg-[hsl(0,0%,20%)] 
                    w-60 text-sm rounded-sm py-2
                    hover:bg-[hsl(75,94%,57%)]
                    hover:text-[black]">GitHub</button>
                    <button className="text-center text-[hsl(0,0%,100%)] bg-[hsl(0,0%,20%)] 
                    w-60 text-sm rounded-sm py-2 
                    hover:bg-[hsl(75,94%,57%)]
                    hover:text-[black]">Frontend Mentor</button>
                    <button className="text-center text-[hsl(0,0%,100%)] bg-[hsl(0,0%,20%)] 
                    w-60 text-sm rounded-sm py-2 
                    hover:bg-[hsl(75,94%,57%)]
                    hover:text-[black]">LinkedIn</button>
                    <button className="text-center text-[hsl(0,0%,100%)] bg-[hsl(0,0%,20%)] 
                    w-60 text-sm rounded-sm py-2 
                    hover:bg-[hsl(75,94%,57%)]
                    hover:text-[black]">Twitter</button>
                    <button className="text-center text-[hsl(0,0%,100%)] bg-[hsl(0,0%,20%)] 
                    w-60 text-sm rounded-sm py-2 
                    hover:bg-[hsl(75,94%,57%)]
                    hover:text-[black]">Instagram</button>
                </div>
            </div>



        </>
    )
    
}

export default Practice;