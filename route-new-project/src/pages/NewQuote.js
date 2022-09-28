import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes");
    // add 버튼 눌렀을 때 use history로 push하면 새 페이지 위로 페이지 생성 - 뒤로 가기 가능
    // replace 메소드는 뒤로 가기 불가능함
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
