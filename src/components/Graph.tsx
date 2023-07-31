// import React from "react";
import BarChart from "./BarChart";
import { BarDatum } from "@nivo/bar";
import DetailHeader from "./DetailHeader";
// import ChartWrapper from "./ChartWrapper";

export default function Graph() {
  return (
    // TODO: resize parent height
    <div className="px-6 py-2">
      <DetailHeader
        detailInfo={"최근 1개월동안 모바일 앱에 접속하지 않은 고객은"}
      />
      <BarChart data={data} />
    </div>
  );
}
