
const daily = document.querySelector("#daily");
const monthly = document.querySelector("#monthly");
const weekly = document.querySelector("#weekly");

const current = document.querySelectorAll(".current-time");
const past = document.querySelectorAll(".past-time");
const prev = document.querySelectorAll(".prev");
const prevTime = document.querySelectorAll(".prev-time");



//monthly
const getMonthly = async () => {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        return data.map(item => item.timeframes.monthly);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}
const toMonthly = async () => {
    const monthlyData = await getMonthly();

    let i = current.length - 1;
    let j = prevTime.length - 1;

    current.forEach((element) => {
        current[i].innerHTML = monthlyData[i]['current'];
        i = i - 1;
    });

    prev.forEach((element) => {
        element.innerHTML = "Last Month";
    });


    prevTime.forEach((element) => {
        prevTime[j].innerHTML = monthlyData[j]["previous"];
        j = j - 1;
    });

    weekly.style.color = "hsl(236, 100%, 87%) ";
    daily.style.color = "hsl(236, 100%, 87%)";
    monthly.style.color = "white";
}

//weekly

const getWeekly = async () => {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        return data.map(item => item.timeframes.weekly);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const toWeekly = async () => {
    const weeklyData = await getWeekly();

    let i = current.length - 1;
    let j = prevTime.length - 1;

    current.forEach((element) => {
        current[i].innerHTML = weeklyData[i]['current'];
        i = i - 1;
    });

    prev.forEach((element) => {
        element.innerHTML = "Last Week";
    });

    prevTime.forEach((element) => {
        prevTime[j].innerHTML = weeklyData[j]["previous"];
        j = j - 1;
    });

    weekly.style.color = "white";
    daily.style.color = "hsl(236, 100%, 87%)";
    monthly.style.color = "hsl(236, 100%, 87%)";
}

//daily

const getDaily = async () => {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        return data.map(item => item.timeframes.daily);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const toDaily = async () => {
    const dailyData = await getDaily();

    let i = current.length - 1;
    let j = prevTime.length - 1;

    current.forEach((element) => {
        current[i].innerHTML = dailyData[i]['current'];
        i = i - 1;
    });

    prev.forEach((element) => {
        element.innerHTML = "Yesterday";
    });

    prevTime.forEach((element) => {
        prevTime[j].innerHTML = dailyData[j]["previous"];
        j = j - 1;
    });

    weekly.style.color = "hsl(236, 100%, 87%) ";
    daily.style.color = "white";
    monthly.style.color = "hsl(236, 100%, 87%)";

}

toDaily();

daily.addEventListener("click", toDaily);
weekly.addEventListener("click", toWeekly);
monthly.addEventListener("click", toMonthly);

