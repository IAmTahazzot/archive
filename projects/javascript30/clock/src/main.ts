import './style.scss'

// select clock hands
const second: HTMLDivElement | null = document.querySelector('.clock--hand-second'),
    minute: HTMLDivElement | null = document.querySelector('.clock--hand-minute'),
    hour: HTMLDivElement | null = document.querySelector('.clock--hand-hour');

const clock: () => void = () => {
    const date: Date = new Date();
    const getSecond = date.getSeconds(),
        secondDegrees = (getSecond / 60) * 360 + 90,
        getMinute = date.getMinutes(),
        minuteDegrees = (getMinute / 60) * 360 + 90,
        getHour = date.getHours(),
        hourDegrees = (getHour / 12) * 360 + 90;

    if (second && minute && hour) {
        second.style.transform = `translateY(50%) rotate(${secondDegrees}deg)`
        minute.style.transform = `translateY(50%) rotate(${minuteDegrees}deg)`
        hour.style.transform = `translateY(50%) rotate(${hourDegrees}deg)`
    }

    // console.log(getSecond)
}

// update clock in each second
setInterval(clock, 1000);