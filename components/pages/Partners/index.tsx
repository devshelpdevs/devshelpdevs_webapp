import Image from "next/image"


const Partners = () => {
    return (
        <section aria-label='devshelpdevs partners' className='bg-[#F0F0F0] px-8 sm:px-24 py-12 sm:py-32'>
            <div>
                <h4 className='font-medium text-[#115FA7] text-center'>Partnering hubs</h4>
                <div className='flex justify-between items-center overflow overflow-x-scroll partners'>
                    <div className='mr-8 sm:mr-0'>
                        <Image src='/assets/images/partners/nhost.svg' layout='fixed'  width={'100%'} height={'100%'}/>
                    </div>
                    <div className='mr-8 sm:mr-0'>
                        <Image src='/assets/images/partners/greencell.svg'  layout='fixed' width={'100%'} height={'100%'}/>
                    </div>
                    <div className='mr-8 sm:mr-0'>
                        <Image src='/assets/images/partners/hostingde.svg'  layout='fixed' width={'100%'} height={'100%'}/>
                    </div>
                    <div className='mr-8 sm:mr-0'>
                        <Image src='/assets/images/partners/netlify.svg'  layout='fixed' width={'100%'} height={'100%'}/>
                    </div>
                    <div className='mr-8 sm:mr-0'>
                        <Image src='/assets/images/partners/nbl.svg' layout='fixed' width={'100%'} height={'50px'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
