
import Image from 'next/image';

import MoneyIcon from '../../../public/assets/images/contribute/money-icon';
import HandIcon from '../../../public/assets/images/contribute/hand-icon';
import PatreonIcon from '../../../public/assets/images/contribute/patreon-icon'



function contribute() {
  return (
    <div className='contribute container bg-white'>
      <div className='ml-20 mt-20'>
        <div className='ways'>
          <h4 className='pb-6'>ways to contribute to Devshelpdevs</h4>
        </div>
        <div className='sugestion'>
          <h1 className='font-bold text-4xl'>
            You can contribute to the community
            <br /> by either of the following.
          </h1>
        </div>
      </div>

      <div className='grid grid-cols-3 m-20 gap-12 font-normal'>
        <div className='donate p-10 '>
          <MoneyIcon />
          <h4 className='pt-6 pb-6 text-blue-900'>Donate to Applicant</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            ducimus deleniti quo, harum quae consequatur neque, temporibus iusto
            similique aspernatur excepturi fugiat at ab ut molestias?
            Repellendus cum ea iusto?
          </p>
          <button className='btn p-4 rounded-full bg-purple-900 text-white text-xs mt-10'>
            Click here to Donate
          </button>
        </div>

        <div className='support p-10'>
          <HandIcon />
          <h4 className='pt-6 pb-6 text-blue-900'>Support the vision </h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            ducimus deleniti quo, harum quae consequatur neque, temporibus iusto
            similique aspernatur excepturi fugiat at ab ut molestias?
            Repellendus cum ea iusto?
          </p>
          <button className='btn p-4 rounded-full bg-purple-900 mt-10 text-xs text-white'>
            Click here to Support
          </button>
        </div>

        <div className='patreon p-10'>
          {/* <Image src={vector3} alt='patreon' /> */}
          <PatreonIcon />
          <h4 className='pt-6 pb-6 text-blue-900'>Become a patreon</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            ducimus deleniti quo, harum quae consequatur neque, temporibus iusto
            similique aspernatur excepturi fugiat at ab ut molestias?
            Repellendus cum ea iusto?
          </p>

          <button className='btn p-4 rounded-full bg-purple-900 mt-10 text-xs text-white '>
            Become a Patreon
          </button>
        </div>
      </div>
    </div>
  )
}

export default contribute
