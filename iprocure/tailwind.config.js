module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "1/8": "12.5%",
        "2/8": "25.0%",
        "3/8": "37.5%",
        "4/8": "50.0%",
        "5/8": "62.5%",
        "6/8": "75.0%",
        "7/8": "87.5%",

        "1/20": "5%",
        "2/20": "10%",
        "3/20": "15%",
        "4/20": "20%",
        "5/20": "25%",
        "6/20": "30%",
        "7/20": "35%",
        "8/20": "40%",
        "9/20": "45%",
        "10/20": "50%",
        "11/20": "55%",
        "12/20": "60%",
        "13/20": "65%",
        "14/20": "70%",
        "15/20": "75%",
        "16/20": "80%",
        "17/20": "85%",
        "18/20": "90%",
        "19/20": "95%",
      },

      transitionDuration: ["hover", "focus", "width", "display"],

      transitionProperty: ["hover", "focus", "width", "display"],

      fontFamily: {
        body: ["Roboto"],
      },
    },
  },
  plugins: [],
};