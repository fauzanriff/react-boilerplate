import { useEffect, useState } from "react";
import ProfileImageForStage from "./ProfileImageForStage";

const mockData = [{
  alias: 'SH',
  url: 'https://github.com/shadcn.png',
  active: false,
}, {
  alias: 'FZ',
  url: 'https://github.com/fauzanriff.png',
}, {
  alias: 'MR',
  url: 'https://github.com/mark.png',
}, {
  alias: 'TY',
  url: 'https://github.com/taylor.png',
}, {
  alias: 'AR',
  url: 'https://github.com/arnold.png',
}];

function StageList() {
  const [indexRandom, setIndexRandom] = useState(0);

  // Interval 3 seconds to reproduce random
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexRandom(Math.floor(Math.random() * mockData.length));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const profiles = mockData
    .map((data, index) => {
      return {
        ...data,
        active: indexRandom === index,
      };
    })
    .map((profile, index) => {
      //random active
      const PROFILE_WIDTH = 48;
      const activeOnLeft = index < indexRandom;
      const activeImageLength = 85+8;
      let deltaLeft = ((index-1)*PROFILE_WIDTH);
      let zIndex: any = "auto";
      if (index !== indexRandom) {
        deltaLeft = activeImageLength + deltaLeft;
        if (activeOnLeft) {
          deltaLeft += PROFILE_WIDTH;
        }
      } else if (indexRandom === index) {
        deltaLeft = 0;
        zIndex = 99;
      }
      return (
        <ProfileImageForStage
          key={profile.alias}
          index={index}
          fallback={profile.alias}
          activeIndex={indexRandom}
          {...profile}
        />
      );
    });
  return (
    <div className='w-full p-2 bg-slate-900 fixed bottom-0'>
      <div className='flex items-center gap-1 relative h-[40px]'>
        {profiles}
      </div>
    </div>
  );
}

export default StageList;