import Wrapper from "./Wrapper/Wrapper";
import NewsItem from "./NewsItem/NewsItem";

const News = () => {
  return (
    <div className="news" style={{'paddingTop': 11}}>
      <Wrapper title="Новости">
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </Wrapper>
    </div>
  );
};

export default News;
