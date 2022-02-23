import Image from 'next/image'

type NFTItemTypes = {
  image: string
  name: string
}

const NFTItem: React.FC<NFTItemTypes> = ({ image, name }) => {
  return (
    <article className="rounded-b-xl border-2 border-gray-500 border-opacity-20 bg-backLight">
      <div>
        {image.slice(image.length - 3) == 'mp4' ? (
          <video autoPlay loop controls>
            <source src={image} />
          </video>
        ) : (
          <img src={image} />
        )}
      </div>
      <p className="p-3 font-medium">{name}</p>
    </article>
  )
}

export default NFTItem
