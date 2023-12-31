'use client'

export default function ScrollForwardBtn({onClick}: {onClick?: () => void}){
  return <button
  className="rounded-full p-6 bg-white text-black"
  onClick={() => {
    if(onClick){
      onClick()
    }
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 36 14"
    fill="none"
  >
    <path
      d="M35.0175 7.83955L35.0163 7.8406L27.8718 13.5799C27.3366 14.0099 26.4731 14.0054 25.9432 13.5699C25.4133 13.1343 25.4176 12.4327 25.9528 12.0027L30.7497 8.14942L1.86875 8.05543C1.11556 8.05298 0.506635 7.55486 0.508627 6.94282C0.510619 6.33077 1.12277 5.83663 1.87596 5.83908L30.7568 5.93307L25.9853 2.04865C25.4529 1.61517 25.4531 0.913529 25.9858 0.481465C26.5186 0.0492887 27.3821 0.0506035 27.9145 0.483973L35.0215 6.26966L35.0227 6.27071C35.5554 6.70563 35.5514 7.40954 35.0175 7.83955Z"
      fill="blue"
    />
  </svg>
</button>
}