import React, { useState, useEffect } from 'react';
import SubpageHeader from '../../components/ui/SubpageHeader';
import useSpotify from '../../components/hooks/useSpotify';
import { useRouter } from 'next/router';
import Head from 'next/head';
/**
 * This component renders the dynamic page depending on the user's genre selection.
 */
const GenreResult: React.FC = (): JSX.Element => {
  /**
   * @returns JSX.Element - renders the genre result component.
   */

  const spotifyApi = useSpotify();
  const router = useRouter();
  const { genreId, genreTitle } = router.query;
  const [tracks, setTracks] = useState<any[]>([]);
  const [isLoaded, setLoaded] = useState(false);
  const LIMIT: number = 24;
  let tempGrid: Array<any> = new Array(LIMIT);

  //Initialize array for temporary grid when loading recs
  for (let i = 0; i < tempGrid.length; i++) {
    tempGrid[i] = {};
  }

  //Load the tracks for the genre
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      (async () => {
        try {
          const data = await spotifyApi.getRecommendations({
            seed_genres: [genreId],
            limit: LIMIT,
          });

          setTracks(data.body.tracks);
          setLoaded(true);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [genreId]);

  //Prompt user a refresh may cause data to be lost
  useEffect(() => {
    const unload = (event: any): string => {
      event.preventDefault();
      event.returnValue = '';
      return '';
    };

    window.addEventListener('beforeunload', unload);
    return () => window.removeEventListener('beforeunload', unload);
  }, []);

  return (
    <>
      <Head>
        <title>Odditory | {genreTitle}</title>
        <link rel="icon" href="/logofav.png" />
      </Head>
      <SubpageHeader pageName={genreTitle} />
      <section className="mt-5 mx-5 grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4 2xl:grid-cols-6 xl:gap-7 max-w-screen-4xl justify-center">
        {isLoaded && tracks
          ? tracks.map((track: any, index: number) => (
              <div key={index}>
                <img
                  src={track.album.images[0]?.url ?? '/logo.png'}
                  alt={track?.name}
                  className="track-primary sm:w-[25.5rem] xl:w-[35rem]"
                />
                <div className="flex flex-col justify-center">
                  <h1 className="text-center whitespace-nowrap truncate">{track?.name}</h1>
                  <h2 className="text-center font-bold whitespace-nowrap truncate">
                    {track.artists[0]?.name}
                  </h2>
                </div>
              </div>
            ))
          : tempGrid.map((temp, index) => (
              <div key={index}>
                <img
                  src="/logo.png"
                  alt="loading"
                  className="track-primary sm:w-[25.5rem] 2xl:w-[35rem] opacity-5"
                />
              </div>
            ))}
      </section>
    </>
  );
};

export default GenreResult;
