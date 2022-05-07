// images
import GitHubImage from '@/assets/images/github.svg'

function Footer() {
  return (
    <div className="flex items-center text-white mt-20 md:mt-5">
      <a href="https://github.com/YUNI0107/react-hero-card-page" target="_blank" rel="noreferrer">
        <div className="w-5">
          <img src={GitHubImage} className="w-full" alt="github" />
        </div>
      </a>
      <p className="mx-2">|</p>
      <p>2020.05.09 @YUNI0107</p>
    </div>
  )
}

export default Footer
