import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import SpotifyWebApi from 'spotify-web-api-node';
import { DefaultSession } from 'next-auth';

interface SessionType {
  accessToken: string | null | undefined;
  email: string;
  image: string;
  name: string;
  refreshToken: string;
  username: string;
}

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

const useSpotify = (): any => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      //If refresh access token attempt fails, go back to login page
      if (session.error === 'RefreshAccessTokenError') {
        signIn();
      }
      spotifyApi.setAccessToken(session?.user?.accessToken);
    }
  }, [session]);

  return spotifyApi;
};

export default useSpotify;
