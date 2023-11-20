class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.some((alarm) => alarm.time === time)) {
      console.warn("Уже присутствует звонок на это время");
    }
    const newAlarm = {
      time,
      callback,
      canCall: true,
    };
    this.alarmCollection.push(newAlarm);
  }

  removeClock(time) {
    const filteredAlarms = [];
    for (const alarm of this.alarmCollection) {
      if (alarm.time !== time) {
        filteredAlarms.push(alarm);
      }
    }
    this.alarmCollection = filteredAlarms;
  }

  getCurrentFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
