import ImageCarousel from "./components/ImageCarousel";

import SilderImg01 from '@/public/image1.jpg'
import SilderImg02 from '@/public/image2.jpg'
import SilderImg03 from '@/public/image3.jpg'
import SilderIcon01 from '@/public/circleButton.svg'

function Page() {
  const items = [
    {
      img: SilderImg01,
      desc: 'First Image',
      buttonIcon: SilderIcon01,
    },
    {
      img: SilderImg02,
      desc: 'Second Image',
      buttonIcon: SilderIcon01,
    },
    {
      img: SilderImg03,
      desc: 'Third Image',
      buttonIcon: SilderIcon01,
    },
  ]


  return (
    <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex justify-center">

          <ImageCarousel items={items} />

        </div>
      </div>
    </main>
  )
}

export default Page;
