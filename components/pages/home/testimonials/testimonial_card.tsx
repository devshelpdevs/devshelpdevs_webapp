
function TestimonialCard({ data, isActive }) {
    return (
        <div className={"flex flex-col justify-between py-[42px]  bg-white border border-gray-200 shadow-2xl rounded-xl" + (isActive ? " w-[530px] h-[480px] " : " w-[308px] h-[296px] py-8 justify-around opacity-50")}>

            {/* user avatar and name */}
            <div className="flex items-center justify-center space-x-4 ">

                <img className={" w-[152px]" + (isActive ? "  " : " w-[74px]")} src={`/assets/images/testimonials/` + data.avatar + `.png`} alt="" />

                <div className="flex flex-col">
                    <span className={" font-semibold text-[#444444]" + (isActive ? " text-2xl" : " text-xl")}>{data.name}</span>
                    <span className={"text-[#444444]" + (isActive ? " text-sm" : " text-xs")} >{data.designation}</span>
                </div>

            </div>

            {/* testimonial */}
            <div className={"flex px-[33.9px] items-center space-x-[39px]  flex-1" + (isActive ? "  text-sm" : " text-xs px-[18px] space-x-[22px] flex-none ")}>
                <div >
                    <svg className={"h-12" + (isActive ? "" : " h-7 w-[22px]")} width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path d="M44.162 11.4524C44.1926 11.8808 44.1926 12.3092 44.1926 12.7376C44.1926 25.8026 34.2485 40.8566 16.0736 40.8566C10.4742 40.8566 5.27267 39.2349 0.897217 36.42C1.69278 36.5117 2.45764 36.5424 3.28381 36.5424C7.90395 36.5424 12.1571 34.9819 15.5534 32.32C11.2085 32.2281 7.56743 29.3826 6.31292 25.4661C6.92492 25.5578 7.53682 25.619 8.17943 25.619C9.06673 25.619 9.95412 25.4966 10.7802 25.2825C6.25179 24.3645 2.85537 20.3869 2.85537 15.5831V15.4608C4.17101 16.1951 5.70101 16.6541 7.32256 16.7152C4.66057 14.9405 2.91659 11.9114 2.91659 8.48445C2.91659 6.64864 3.40606 4.96578 4.26284 3.4971C9.12785 9.49419 16.4407 13.4106 24.6407 13.839C24.4878 13.1047 24.3959 12.3398 24.3959 11.5749C24.3959 6.12847 28.802 1.69189 34.2789 1.69189C37.1244 1.69189 39.6946 2.88519 41.4999 4.81283C43.7334 4.38449 45.8753 3.55832 47.7724 2.42624C47.0379 4.7211 45.4775 6.64874 43.4275 7.87255C45.4164 7.65847 47.344 7.10759 49.1186 6.34274C47.7726 8.30089 46.0896 10.0449 44.162 11.4524Z" fill="#0D87E3" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="48.2216" height="48.2216" fill="white" transform="translate(0.897217)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <span className=" font-medium text-[#505050]  leading-7">
                    {data.testimonial}
                </span>
            </div>
        </div>
    )
}

export default TestimonialCard
