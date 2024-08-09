import Lottie from 'lottie-react';
import loadingAnimation from '../assets/animations/loadingA.json';

function LoadingSpinner() {
  return <div className='h-[150px] w-[150px]'>
    <Lottie size={0.5} animationData={loadingAnimation} />
  </div>
}

export default LoadingSpinner;