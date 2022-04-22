import './NewsItem.scss'

const NewsItem = () => {
  return (
    <div className="news-item">
      <div className="news-item__inner">
        <div className="news-item__img-block">
          <img src="img/news_1.jpg" alt="news" className="news-item__img"/>
        </div>
        <div className="news-item__content">
          <h3 className="news-item__title">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="news-item__text">
            Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra
            pharetra, augue neque felis enim dui id cum. At pellentesque diam nulla ac amet quisque quis. Est consectetur
            ullamcorper curabitur quis viverra hac molestie. Elit pulvinar congue ut amet adipiscing felis tincidunt. Amet
            quis varius aliquam hendrerit tempus. Sed sit diam quis scelerisque congu econgu econgu econguecongu
            econguecon guecon guecon guecong ueconguecong uec ongue.
            Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra
            pharetra, augue neque Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo,
            malesuada. Viverra pharetra, augue neque felis enim dui id cum. At pellentesque diam nulla ac amet quisque
            quis. Est consectetur ullamcorper curabitur quis viverra hac molestie. Elit pulvinar congue ut amet adipiscing
            felis tincidunt. Amet quis varius aliquam hendrerit tempus. Sed sit diam quis
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
