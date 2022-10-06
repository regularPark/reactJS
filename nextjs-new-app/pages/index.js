import Head from "next/head";

import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

/** 클라이언트 측에서 실행되지 않음
 * pre-rendering.
 */

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://wjdrb0110:qkr159@cluster0.9bwnjn6.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // revalidate의 수는 적어도 n초마다 서버를 다시 생성한다는 의미
    revalidate: 1,
  };
}
/** props 객체에 포함된 프로퍼티가 이 페이지 컴포넌트에서
 * 사용할 props로 설정됨.
 * getStaticProps를 사용하면 useState, useEffect를 사용할 필요가
 * 없어진다.
 * */

// /** 주기적으로 바뀌는 페이지에 쓰기 좋다 */
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     // no need 'revalidate'
//   };
// }

export default HomePage;
