import './countdown.css'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@mui/material';



const Countdown = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimeHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('October 15, 2024 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimeHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    })

    return (
        <>
            <div className='timer-container'>
                <div className='countdown'>
                    <span>{timerDays}</span>
                    <p>Jours</p>
                    <span>{timerHours}</span>
                    <p>Hrs</p>
                    <span>{timerMinutes}</span>
                    <p>Min</p>
                    <span>{timerSeconds}</span>
                    <p>Sec</p>
                </div>
                <h3>La saison de la cueillette d'olives approche à grands pas, et avec elle, la promesse d'une huile d'olive vierge bio de qualité exceptionnelle. Notre passion pour l'huile d'olive biologique est telle que nous souhaitons vous offrir l'opportunité de commander dès <Button href='/contact' variant="contained" color='success' >Maintenant</Button></h3>
            </div>
        </>
    )
}

export default Countdown