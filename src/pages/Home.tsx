import StageList from '@/components/ui/StageList';
import LoadingSpinner from '../components/LoadingSpinner';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function HomePage() {
  return (
    <div className='w-full'>
      <StageList />
      <div className='w-fit ml-12 mt-2 mr-2 z-50 relative z-21'>
        <div>
          <div className='py-2 px-4 rounded-md bg-slate-500 backdrop-blur-md bg-opacity-30 text-white'>
            Hai semuanya! Selamat datang di <span className='font-bold'>Clubhouse</span>! 🎉
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <LoadingSpinner />
      </div>
    </div>
  );
}

export default HomePage;
