import { Link } from "react-router-dom"
import Footer from "../components/Footer"

const Home = () => {

    return (
        
        <div>
            {/* <!-- Intro section  --> */}
            <section className="bg-gradient-to-b from-teal-300 to-emerald-200 text-slate-700 text-center sm:text-left pb-10">
                <div className="flex">
                    <div className="sm:w-1/2 px-16 mt-24 sm:mt-48">
                        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                            <span className="inline-block text-white ">Introducing</span> StrateGIK
                        </h1>

                        {/* <!-- beta version note --> */}
                        <div className="inline-block mt-2">
                            <button
                                id="beta-btn"
                                className="flex mx-auto sm:mx-0 transition-transform duration-100 hover:-translate-y-1 items-center shadow-sm bg-white bg-opacity-40 rounded-md px-3 py-1 text-light text-slate-600 text-sm"
                            >
                                Beta Version
                                <img
                                    id="beta-arrow-icon"
                                    className="w-2 ml-2"
                                    src="./icons/arrowHeadIcon.svg"
                                    alt="icon"
                                />
                            </button>
                            <p
                                id="beta-note"
                                className="transition-all max-h-0 overflow-hidden duration-1000 delay-100 text-sm w-52 my-1 rounded-md text-slate-700 bg-white bg-opacity-30"
                            >
                                An early version of a program or application that contains most
                                of the major features, but is not yet complete
                            </p>
                        </div>

                        {/* <!-- strategic defination  --> */}
                        <div className="hover:-translate-y-1 md:hover:translate-x-1 md:hover:translate-y-0 transition-transform duration-300 bg-white bg-opacity-10 shadow-xl px-6 py-4 mt-12 rounded-md text-white">
                            <h1 className="font-semibold text-xl sm:text-2xl my-4 text-slate-600">strategic</h1>
                            <h3 className="font-light text-gray-400 mb-2">/strəˈtiːdʒɪk/</h3>
                            <span className="italic mt-3 -ml-3 text-sm sm:text-md text-slate-700">adjective</span>
                            <h2 className="text-xs sm:text-sm py-3 text-slate-500">Relating to the identification of long-term or overall aims and interests and the means of achieving them.</h2>
                        </div>
                        <p className="lg:text-xl px-2 font-light py-6 lg:py-4 text-slate-600">
                            The definition above of the word 'strategic' lays out the underlying objective of this website i.e to provide students of GIKI, with dreams of academic excellence(or just a DHL :P) a platform to help them achieve that, hence the name 'StrateGIK'.
                        </p>

                        <button
                            className="block mx-auto sm:mx-0 duration-500 transition-transform active:shadow-none hover:-translate-y-1 active:translate-y-0 shadow-lg bg-white px-4 py-3 mt-32 rounded-full font-bold"
                        >
                            <Link to="/contribute">
                                Contribute
                            </Link>
                        </button>

                    </div>
                    <img className="w-1/2 hidden sm:inline-block" src="./icons/intro-illustration.svg" alt="" />
                </div>
            </section>

            {/* <!-- intro bg curve --> */}
            <div className="relative h-[150px] w-full overflow-hidden">
                <div
                    className="shadow-inner shadow-teal-800 h-double w-double bg-emerald-200 b-round -translate-x-1/4 -translate-y-1/2 overflow-hidden"
                ></div>
            </div>

            {/* <!-- Quick intro  --> */}
            <section className="px-16">
                <h2 className="font-bold text-center md:text-left text-2xl py-4 mt-32">A QUICK INTRO</h2>
                <p className="text-center sm:text-lg md:text-left md:w-2/3">
                    We felt that it was quite tiresome to search for resources of the different courses taught at GIKI hence, we built this platform with those resources available at one place. Targeting the students of FSc and A Levels, who are used to studying through Past Papers which are readily available online. This is just an attempt to replicate that on a small scale for the students of GIKI.
                </p>
            </section>

            {/* <!-- feature cards  --> */}
            <section className="mt-32">
                {/* <!-- Everything you need  --> */}
                <h2
                    className="sm:mx-auto font-bold text-3xl my-4 mx-10 sm:w-1/3 text-center tracking-widest"
                >
                    Everything You Need
                </h2>
                <hr
                    className="transition-all delay-0 duration-400 hover:w-1/4 h-1 my-4 mb-16 w-1/6 mx-auto bg-teal-500"
                />
                {/* <!-- cards  --> */}
                <div
                    className="flex sm:flex-row flex-col justify-center items-center text-center bg-gradient-to-b from-teal-100 to-emerald-100 p-10"
                >
                    <div
                        className="shadow-lg transition-transform ease-in-out duration-500 hover:-translate-y-4 bg-white rounded-md w-52 xl:w-80 p-8 m-4"
                    >
                        <img src="./icons/sticky-note.svg" alt="icon" className="mx-auto" />
                        <h3 className="text-teal-600 font-bold sm:text-lg md:text-xl py-2 mt-4">
                            Quizzes
                        </h3>

                    </div>
                    <div
                        className="shadow-lg transition-transform ease-in-out duration-500 hover:-translate-y-4 bg-white rounded-md  w-52 xl:w-80 p-8 m-4"
                    >
                        <img src="./icons/poster.svg" alt="icon" className="mx-auto" />
                        <h3 className="text-teal-600 font-bold sm:text-lg md:text-xl py-2 mt-4">
                            Mids&Finals
                        </h3>

                    </div>
                    <div
                        className="shadow-lg transition-transform ease-in-out duration-500 hover:-translate-y-4 bg-white rounded-md w-52 xl:w-80 p-8 m-4"
                    >
                        <img src="./icons/file-folder.svg" alt="icon" className="mx-auto" />
                        <h3 className="text-teal-600 font-bold sm:text-lg md:text-xl py-2 mt-4">
                            Assignments
                        </h3>
                    </div>
                </div>
                
                <Link to="/courses">

                    <button
                        className="border-2 text-xs sm:text-sm md:text-md lg:text-lg transition-colors-transform active:translate-y-1 duration-200 ease-in hover:bg-teal-500 hover:text-white border-teal-500 text-teal-500 px-4 py-2 my-16 mx-auto block"
                        >
                        View All Course Content
                    </button>
                </Link>
                
            </section>
            {/* <!-- FAQs --> */}
            <section>
                <div className="px-16 mt-16">
                    <h2 className="font-bold text-2xl text-center md:text-left">FAQs</h2>

                    {/* <!-- Questions' answers  --> */}
                    <div className="mt-8">
                        {/* <!-- Question #1 --> */}
                        <div>
                            <div
                                className="flex items-center justify-between bg-white w-full relative"
                            >
                                <h3 className="font-semibold sm:text-lg py-2">
                                    Is this platform officially associated with GIK Institute?
                                </h3>
                                <img
                                    className="w-3 mx-4 expand"
                                    src="./icons/plusIcon.svg"
                                    alt="expand-icon"
                                />

                            </div>
                            {/* <!-- Answer1  --> */}

                            <div
                                className="answer-p transition-[max-height] ease-in duration-700 max-h-0 overflow-hidden bg-slate-100"
                            >
                                <p className="p-2">
                                    No, this is a prototype created by students of GIK Institute.
                                </p>
                            </div>
                            <hr className="mb-2 bg-slate-400 h-[2px] w-full" />
                        </div>
                        {/* <!-- Question #2 --> */}
                        <div>
                            <div
                                className="flex items-center justify-between bg-white w-full relative"
                            >
                                <h3 className="font-semibold sm:text-lg py-2">
                                    What is the Contribute feature and how does it work?
                                </h3>
                                <img
                                    className="w-3 mx-4 expand"
                                    src="./icons/plusIcon.svg"
                                    alt="expand-icon"
                                />

                            </div>
                            {/* <!-- Answer#2  --> */}

                            <div
                                className="answer-p transition-[max-height] ease-in duration-700 max-h-0 overflow-hidden bg-slate-100"
                            >
                                <p className="p-2">
                                    The Contribute feature allows you to upload any quiz, assignment and mid/final you have that others may find helpful. For this an account is required.
                                </p>
                            </div>
                            <hr className="mb-2 bg-slate-400 h-[2px] w-full" />
                        </div>
                        {/* <!-- Question #3 --> */}
                        <div>
                            <div
                                className="flex items-center justify-between bg-white w-full relative"
                            >
                                <h3 className="font-semibold sm:text-lg py-2">
                                    I am unable to find my desired course?
                                </h3>
                                <img
                                    className="w-3 mx-4 expand"
                                    src="./icons/plusIcon.svg"
                                    alt="expand-icon"
                                />

                            </div>
                            {/* <!-- Answer#3  --> */}

                            <div
                                className="answer-p transition-[max-height] ease-in duration-700 max-h-0 overflow-hidden bg-slate-100"
                            >
                                <p className="p-2">
                                    If the course isn't listed, you can go to the contribute tab and use the link mentioned.
                                </p>
                            </div>
                            <hr className="mb-2 bg-slate-400 h-[2px] w-full" />
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- We need your help  --> */}
            <div className="px-10 sm:px-16 my-10 text-center md:text-left">
                <h2 className="font-bold text-2xl py-4 md:w-1/3">We need your help</h2>
                <p className="md:w-1/2">
                    If you feel anything needs improvement or is missing, feel free to inform us through the feedback form.
                </p>
                <a href="https://forms.gle/JWHK3JojtfTp3Wrk9" target="_blank" rel="noreferrer">
                    <button
                        className="border-2 transition-colors-transform active:translate-y-1 duration-200 ease-in hover:bg-teal-500 hover:text-white border-teal-500 text-teal-500 px-4 py-2 mt-10 mb-32 mx-auto">
                        Feedback
                    </button>
                </a>
            </div>

            <Footer />
        </div>
    )
}

export default Home
