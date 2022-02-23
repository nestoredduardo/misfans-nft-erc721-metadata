import Image from 'next/image'

type NFTItemTypes = {
  image: string
}

const NFTItem: React.FC<NFTItemTypes> = ({ image }) => {
  return (
    <article>
      <div>
        {image.slice(image.length - 3) == 'mp4' ? (
          <video autoPlay loop>
            <source src={image} />
          </video>
        ) : (
          <Image src={image} layout="fill" />
        )}
      </div>
    </article>
  )
}

export default NFTItem
