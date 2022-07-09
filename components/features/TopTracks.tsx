import React from 'react';
import Loading from '../ui/Loading';
import Slider from '../ui/Slider';

interface TrackData {
  tracks: any[];
  isLoaded: boolean;
}

/**
 * This component is used to display the top tracks for the user.
 * Relies on top tracks to be loaded in the state.
 */
const TopTracks: React.FC<TrackData> = ({ tracks, isLoaded }: TrackData): JSX.Element => {
  /**
   * @param {TrackData} - props passed in from the parent component containing tracks and load state.
   * @returns JSX.Element.
   */

  return (
    <section className="flex bg-gradient-to-b to-[#181b20] from-[#282b30] padding-8 w-full ">
      {isLoaded ? (
        <Slider tracks={tracks} id="top-tracks-slider" typeTrack="top-tracks" />
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default TopTracks;
