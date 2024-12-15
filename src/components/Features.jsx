import React from 'react'
import { Truck, Lock, RotateCcw, Clock} from 'lucide-react'

const Features = () => {

    const features = [
        {icons: Truck, Text: 'Free Shopping', subtex: 'On Order Over $100'},
        {icons: Lock, Text: 'Secure payment', subtex: '100% protected Payments'},
        {icons: RotateCcw, Text: 'Easy Return', subtex: '30-day return Policy'},
        {icons: Clock, Text: '24/7 Support', subtex: 'Dedicated customar service'},
    ]

  return (
    <div className='bg-gray-100 py-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8'>
                {features.map((feature, index)=> {
               return <div key={index} className='flex items-center justify-center text-center sm:text-left'>
                        <feature.icons className='flex-shrink-0 h-10 w-10 text-gray-600' aria-hidden="true"/>
                        <div className='ml-4'>
                            <p className='text-base font-medim text-gray-900'>{feature.Text}</p>
                            <p className='mt-1 text-sm text-gray-500'>{feature.subtex}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Features;