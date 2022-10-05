import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://unsplash.com/photos/sOdac8nDov4",
    address: "PCMHro 172, Seoul",
    description: " This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://unsplash.com/photos/0uWbJuWM3Gw",
    address: "PCMHro 11, Seoul",
    description: " This is a Second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

/** 클라이언트 측에서 실행되지 않음
 * pre-rendering.
 */
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
/** props 객체에 포함된 프로퍼티가 이 페이지 컴포넌트에서
 * 사용할 props로 설정됨.
 * getStaticProps를 사용하면 useState, useEffect를 사용할 필요가
 * 없어진다.
 * */

export default HomePage;
