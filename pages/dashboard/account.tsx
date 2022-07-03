import React from 'react';
import { useSession } from 'next-auth/react';
import SubpageHeader from '../../components/SubpageHeader';

const Account: React.FC = (): JSX.Element => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <SubpageHeader pagename="ACCOUNT" />
      <div className="flex justify-center gap-5 flex-col items-center">
        <img
          className="h-[12rem] w-[10rem] rounded-xl sm:h-[20rem] sm:w-[17rem]"
          src={session?.user?.image || '/public/white-spotify.png'}
          alt="User Image"
        />

        <div className="flex gap-5 bg-slate-600 p-8 rounded-xl flex-col items-center sm:flex-row">
          <img className="object-contain w-20 h-20" src={'/white-spotify.png'} />
          <div>
            {session?.user &&
              Object.entries(session?.user).map((val) => {
                if (val[0] !== 'image') {
                  return (
                    <div key={val[0]}>
                      <h1 className="inline font-bold">
                        {val[0][0].toLocaleUpperCase() + val[0].slice(1)}:{' '}
                      </h1>
                      <h1 className="inline text-cyan-100 text-sm sm:text-lg">{val[1]}</h1>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;