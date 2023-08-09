import React from "react";

interface DetailHeaderProps {
  detailInfo: string;
  isLoading: boolean; 
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ detailInfo, isLoading }) => {
  return (
    <div className="flex justify-between items-center my-3">
      {!isLoading && (
        <div className="">
          <span className="text-detail-black font-bold">{detailInfo}</span>
          <span className="text-obzen-purple font-bold mx-2">2422</span>
          <span>명</span>
        </div>
      )}
      {!isLoading && (
        <button className="text-default-blue font-bold">SQL 보기</button>
      )}
    </div>
  );
};

export default DetailHeader;
