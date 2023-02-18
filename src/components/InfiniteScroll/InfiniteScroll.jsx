const { Fragment, useRef, useEffect } = require("react");

const InfiniteScroll = ({ fetchMore, isLoading }) => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      let options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 1.0,
      };
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoading) {
            fetchMore();
          }
        });
      }, options);

      observer.observe(divRef.current);
    }
  }, [divRef.current]);

  return (
    <div ref={divRef} className="infinite-scroll-loading">
      {!isLoading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
