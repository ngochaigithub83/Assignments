export function formatTime(seconds: any) {
    let h = Math.floor(seconds / 3600)
    let m = Math.floor(seconds % 3600 / 60)
    let s = seconds % 3600 % 60
    let hour: String, min: String, sec: String
    if (h < 10)
        hour = 0 + "" + h;
    else
        hour = h.toString()

    if (m < 10)
        min = 0 + "" + m;
    else
        min = m.toString()

    if (s < 10)
        sec = 0 + "" + s
    else sec = s.toString()

    return hour + ":" + min + ":" + sec
}