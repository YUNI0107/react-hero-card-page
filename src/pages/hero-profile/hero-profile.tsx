import { useParams } from 'react-router-dom'

function HeroProfilePage() {
  const { heroId } = useParams()

  console.log(heroId)

  return <div>test {heroId}</div>
}

export default HeroProfilePage
