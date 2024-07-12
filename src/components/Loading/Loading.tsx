import Container from "../Container/Container";

const Loading = ({ className = "" }) => {
  return (
    <Container>
      <div role="status" className={`animate-pulse ${className}`}>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </Container>
  );
};

export default Loading;
