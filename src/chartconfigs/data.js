let chartData = [];
export const getLastSevendays = () => {
  const uv = [20000, 40000, 30000, 10000, 50000, 60000, 70000, 10000];
  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
 
  const d = new Date();
  const days = new Date(d.getFullYear(), d.getMonth() + 1, d.getDate()).getDate();
  const start = Number(days) - 7;
  let c = 0;

  for(let i = start; i < days; i++) {
    let date = new Date(d.getFullYear(), d.getMonth(), i);
    const dd = monthNames[date.getMonth()].substring(0, 3) + " " + date.getDate(); 
    chartData.push({
      label : dd,
      value : uv[c]
    })

    c++;
  }

  return chartData;
}

export const chartConfigs = {
    chart: {
      caption: "Users By Country",
      subCaption: "",
      xAxisName: "Country",
      yAxisName: "Users",
      numberSuffix: "",
      theme: "fusion"
    },
    // Chart Data
    data:  [
  {
    label: "Venezuela",
    value: "29000"
  },
  {
    label: "Saudi",
    value: "30000"
  },
  {
    label: "Canada",
    value: "180000"
  },
  {
    label: "Iraq",
    value: "140000"
  },
  {
    label: "Russia",
    value: "115000"
  },
  {
    label: "U.K",
    value: "100000"
  },
  {
    label: "U.S.A",
    value: "300000"
  },
  {
    label: "China",
    value: "30000"
  }
]
  }

export const dataSource = {
  chart: {
    caption: "Impression for the last seven days",
    yaxisname: "Impression",
    subcaption: "",
    numbersuffix: "",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "fusion"
  },
  data: getLastSevendays()
};


export const pieSource = {
  chart: {
    caption: "Device Type",
    plottooltext: "",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Tablet",
      value: "32647479"
    },
    {
      label: "Mobile Phones",
      value: "22100932"
    },
    {
      label: "Others",
      value: "14376"
    },
    {
      label: "Desktop",
      value: "18674221"
    }
  ]
};

export const dSource = {
  chart: {
    caption: "Android Distribution for our app",
    subcaption: "For all users in " + new Date().getFullYear(),
    showpercentvalues: "1",
    defaultcenterlabel: "Android Distribution",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    plottooltext:
      "<b>$percentValue</b> of our Android users are on <b>$label</b>",
    centerlabel: "# Users: $value",
    theme: "fusion"
  },
  data: [
    {
      label: "Ice Cream Sandwich",
      value: "1000"
    },
    {
      label: "Jelly Bean",
      value: "5300"
    },
    {
      label: "Kitkat",
      value: "10500"
    },
    {
      label: "Lollipop",
      value: "18900"
    },
    {
      label: "Marshmallow",
      value: "17904"
    }
  ]
};

