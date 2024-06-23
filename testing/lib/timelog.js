class TimeLog {
    constructor(alarms) {
        this.alarms = alarms
    }
    addAlarm(alarm) {
        this.alarms = [...this.alarms, alarm ]
    }
    getAlarms() {
        return (this.alarms.length)
    }
}