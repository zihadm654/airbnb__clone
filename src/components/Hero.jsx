import Image from 'next/image'
const Banner = () => {
  return (
    <div className="hero">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="content">
        <p>Not sure where to go? Perfect</p>
        <button>I'm flexible</button>
      </div>
    </div>
  )
}

export default Banner
