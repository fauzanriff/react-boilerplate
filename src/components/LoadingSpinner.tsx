import Lottie from 'lottie-react';
import loadingAnimation from '../assets/animations/loadingA.json';

function LoadingSpinner() {
  return <div className='h-[300px] w-[300px]'>
    <Lottie size={0.5} animationData={loadingAnimation} />
  </div>
}

export default LoadingSpinner;