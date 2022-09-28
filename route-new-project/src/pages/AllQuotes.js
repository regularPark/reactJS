import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "M", text: "React" },
  { id: "q2", author: "P", text: "Angular" },
  { id: "q3", author: "K", text: "Vue" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
