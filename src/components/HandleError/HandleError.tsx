import { ReactNode } from "react";

interface THandleError<T> {
  arr: T[];
  children: ReactNode;
}

const HandleError = <T,>({ arr, children }: THandleError<T>) => {
  return (
    <div>
      {arr?.length ? (
        children
      ) : (
        <div className="flex justify-center py-52 font-semibold capitalize text-lg">
          some error found or the not available
        </div>
      )}
    </div>
  );
};

export default HandleError;
