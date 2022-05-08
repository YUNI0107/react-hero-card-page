import { useSpring, animated, config } from 'react-spring'

function LoadingSection() {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
    config: config.gentle,
  })

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mb-10">
        {[0, 1, 2].map((item) => (
          <animated.div
            key={item}
            className="w-10 h-10 rounded-md bg-white mx-2"
            style={{ ...styles }}
          ></animated.div>
        ))}
      </div>
      <h1 className="text-4xl text-white font-bold">Loading</h1>
    </div>
  )
}

export default LoadingSection
