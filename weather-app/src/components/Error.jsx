import React from 'react'
import { Button } from './ui/button';
import error from '../assets/images/icon-error.svg'
import retryIcon from '../assets/images/icon-retry.svg'
const Error = ({retry}) => {
    console.log("API error!")
  return (
    <div className="flex flex-col items-center gap-(--space-s)">
      <img src={error} alt="error-icon" />
      <h1 className="text-center text-white text-(length:--fs-4) font-bold tracking-tight leading-11 md:tracking-wide">
        Something went wrong
      </h1>
      <p className="text-center text-white">
        We couldn't connect to the server &#40;API error&#41;.Please try again
        in a few moments.
      </p>
      <Button
        onClick={() => retry()}
        className="p-(--space-s) bg-(--neutral-700) flex items-center gap-(--space-xs) rounded-md"
      >
        <img src={retryIcon} alt="retry-icon" />
        <span className="text-white">Retry</span>
      </Button>
    </div>
  );
}

export default Error