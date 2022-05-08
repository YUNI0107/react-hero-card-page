import { Link } from 'react-router-dom'

// images
import HeroLogoImage from '@/assets/images/logo.png'

function NotFoundPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-800">
      <div className="w-40 border-2 mb-4 md:w-52">
        <Link to="/heros">
          <img className="w-full" src={HeroLogoImage} alt="logo" />
        </Link>
      </div>

      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p>
          Please go back to
          <span className="underline mx-1">
            <Link to="/heros">home</Link>
          </span>
          page.
        </p>
      </div>
    </div>
  )
}

export default NotFoundPage
