import React from "react";

interface DetailHeaderProps {
  detailInfo: string;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ detailInfo }) => {
  return (
    <div className="flex justify-between items-center  my-3">
      <div className="">
        <span className="text-detail-black  font-bold">{detailInfo}</span>
        <span className="text-obzen-purple font-bold mx-2">2422</span>
        <span>명</span>
      </div>
      <button className="text-default-blue font-bold">SQL 보기</button>
    </div>
  );
};
export default DetailHeader;
