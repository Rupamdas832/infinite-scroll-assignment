import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ProfilesList from "./components/ProfilesList/ProfilesList";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import ErrorBox from "./components/Error/ErrorBox";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [isLast, setIsLast] = useState(false);

  useEffect(() => {
    fetchData(currentPageNo);
  }, []);

  const fetchData = async (pageNo) => {
    setIsLoading(true);
    try {
      const result = await axios.get(
        `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${pageNo}`
      );
      if (result?.data?.nodes.length > 0) {
        setProfiles((profiles) => [...profiles, ...result.data.nodes]);
        setCurrentPageNo(currentPageNo + 1);
      } else {
        setIsLast(true);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoreData = () => {
    if (!isLast) {
      fetchData(currentPageNo);
    }
  };

  return (
    <div className="App">
      {isError ? <ErrorBox /> : <ProfilesList profiles={profiles} />}
      {!isLoading && !isError && (
        <InfiniteScroll fetchMore={fetchMoreData} isLoading={isLoading} />
      )}
    </div>
  );
}
