import { useState } from "react"
import TestimonialCard from "./testimonial_card"

const testimonialdata = [
    {
        name: "Dedde Paul",
        designation: 'Frontend Dev',
        testimonial: 'I want to appreciate @HelpDevs for coming to my aid and helping me fix my laptop screen. Thank you for everything.',
        avatar: 'dedde'
    },
    {
        name: "Peter Osako",
        designation: 'Backend Dev',
        testimonial: 'I want to appreciate @HelpDevs for coming to my aid and helping me fix my laptop screen. Thank you for everything.',
        avatar: 'peter'
    },
    {
        name: "Dedde Paul",
        designation: 'Frontend Dev',
        testimonial: 'I want to appreciate @HelpDevs for coming to my aid and helping me fix my laptop screen. Thank you for everything.',
        avatar: 'dedde'
    },
]

function Testimonials() {

    const [active, setActive] = useState(1)

    return (
        <div className="bg-gray-100 pt-[163px]">
            <div className="ml-[60px]">
                <h2 className="text-[42px] font-semibold leading=[61px] text-[#444444] ">
                    What People are saying about <br />  Devshelpdevs.
                </h2>
                <h3 className="text-xl leading-[34.5px] w-[535px]">
                    The community has <span className="text-[#653695]"> impacted</span> a lot of developers because you donated to the cause. We can do more!
                </h3>
            </div>

            {/* testimonial cards */}
            <div className="flex items-end justify-center space-x-6 mt-[77px] ">
                {testimonialdata.map((testimonial, index) =>
                    <TestimonialCard data={testimonial} isActive={active == index ? true : false} key={index} />
                )}
            </div>

            {/* dot indicators */}

            <div className="flex items-center justify-center space-x-2 py-[190px]">
                {testimonialdata.map((testimonial, index) =>
                    <div
                        className={"rounded-full cursor-pointer border h-5 w-5 border-[#115FA7]" + (active == index ? " bg-[#115FA7]" : " text-xl")}
                        key={index}
                        onClick={() => setActive(index)}
                    >

                    </div>
                )}
            </div>

        </div>
    )
}

export default Testimonials