import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    month: "January",
    sales: 50,
    revenue: 80,
  },
  {
    month: "February",
    sales: 40,
    revenue: 60,
  },
  {
    month: "March",
    sales: 60,
    revenue: 90,
  },
  {
    month: "April",
    sales: 70,
    revenue: 100,
  },
  {
    month: "May",
    sales: 50,
    revenue: 70,
  },
];

const BarChart = () => {
  return (
    <div style={{ height: 300 }}>
      <ResponsiveBar
        data={data}
        keys={["sales", "revenue"]}
        indexBy="month"
        margin={{ top: 80, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "set2" }} // Color scheme for the bars
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Months",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Values",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart example"
        barAriaLabel={(e) =>
          `${e.id}: ${e.formattedValue} in month: ${e.indexValue}`
        }
      />
    </div>
  );
};

export default BarChart;
