const temperatureData = [
    { year: 2022, month: 'January', temp_f: 30.3, temp_c: -0.9 }, // -0.9
    { year: 2022, month: 'February', temp_f: 37.3, temp_c: 2.9 },
    { year: 2022, month: 'March', temp_f: 45.3, temp_c: 7.4 },
    { year: 2022, month: 'April', temp_f: 52.8, temp_c: 11.6 },
    { year: 2022, month: 'May', temp_f: 64.0, temp_c: 17.8 },
    { year: 2022, month: 'June', temp_f: 71.4, temp_c: 21.9 },
    { year: 2022, month: 'July', temp_f: 79.5, temp_c: 26.4 },
    { year: 2022, month: 'August', temp_f: 79.3, temp_c: 26.3 },
    { year: 2022, month: 'September', temp_f: 69.5, temp_c: 20.8 },
    { year: 2022, month: 'October', temp_f: 56.9, temp_c: 13.8 },
    { year: 2022, month: 'November', temp_f: 50.9, temp_c: 10.5 },
    { year: 2022, month: 'December', temp_f: 38.5, temp_c: 3.6 },

    { year: 2023, month: 'January', temp_f: 43.5, temp_c: 6.4 }, // 6.4
    { year: 2023, month: 'February', temp_f: 41.1, temp_c: 5.1 },
    { year: 2023, month: 'March', temp_f: 44.6, temp_c: 7.0 },
    { year: 2023, month: 'April', temp_f: 57.6, temp_c: 14.2 },
    { year: 2023, month: 'May', temp_f: 62.7, temp_c: 17.1 },
    { year: 2023, month: 'June', temp_f: 70.0, temp_c: 21.1 },
    { year: 2023, month: 'July', temp_f: 79.0, temp_c: 26.1 },
    { year: 2023, month: 'August', temp_f: 75.0, temp_c: 23.9 },
    { year: 2023, month: 'September', temp_f: 69.4, temp_c: 20.8 },
    { year: 2023, month: 'October', temp_f: 60.5, temp_c: 15.8 },
    { year: 2023, month: 'November', temp_f: 46.7, temp_c: 8.2 },
    { year: 2023, month: 'December', temp_f: 44.6, temp_c: 7.0 },

    { year: 2024, month: 'January', temp_f: 37.0, temp_c: 2.8 }, // 2.8
    { year: 2024, month: 'February', temp_f: 40.1, temp_c: 4.5 },
    { year: 2024, month: 'March', temp_f: 48.1, temp_c: 8.9 },
    { year: 2024, month: 'April', temp_f: 55.6, temp_c: 13.1 },
    { year: 2024, month: 'May', temp_f: 65.0, temp_c: 18.3 },
    { year: 2024, month: 'June', temp_f: 75.1, temp_c: 23.9 },
    { year: 2024, month: 'July', temp_f: 79.6, temp_c: 26.4 },
    { year: 2024, month: 'August', temp_f: 75.1, temp_c: 23.9 },
    { year: 2024, month: 'September', temp_f: 68.8, temp_c: 20.4 },
    { year: 2024, month: 'October', temp_f: 60.9, temp_c: 16.1 },
    { year: 2024, month: 'November', temp_f: 51.4, temp_c: 10.8 },
    { year: 2024, month: 'December', temp_f: 38.2, temp_c: 3.4 },
];

const NycDataSet = temperatureData.map(item => item.temp_c)

export {NycDataSet};
