export default (src, duration, target) => {
    const miliDuration = duration * 1000
    const startTime = Date.now()
    let cancelled = false
    const initState = {}
    Object.keys(target).forEach(k => {
        initState[k] = src[k]
    })
    function frame_callback() {
        if(!cancelled) {
            const currentTime = Date.now()
            const precent = (currentTime - startTime) / miliDuration
            Object.keys(target).forEach(k => {
                src[k] = (target[k] - initState[k]) * Math.min(precent, 1) + initState[k]
            })
            if(precent < 1)
                requestAnimationFrame(frame_callback)
        }
    }
    requestAnimationFrame(frame_callback)
    return {
        cancel() {
            cancelled = true
        }
    }
}
