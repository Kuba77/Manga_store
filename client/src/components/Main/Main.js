import React from 'react'
import classes from './Main.module.scss'
import layout from '../../styles/layout/layout.module.scss'
import Button from '../Button/Button'
import { HiArrowSmRight } from 'react-icons/hi'


const Main = () => {
    return (
        <section className={classes.main}>
            <div className={layout.content__container}>
                <div className={classes.main__container}>
                    <h2>Find the best collection of Manga here</h2>
                    <Button type='main' size="m" >
                        {'Go to Collection'} 
                        <HiArrowSmRight size={25}/>
                    </Button>                    
                </div>
            </div>
        </section>
    )
}

export default Main