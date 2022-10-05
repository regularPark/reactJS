import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      img="https://unsplash.com/photos/sOdac8nDov4"
      title="A First Meetup"
      address="PCMHro 172, Seoul"
      description="The meetup description"
    />
  );
}

export default MeetupDetails;
