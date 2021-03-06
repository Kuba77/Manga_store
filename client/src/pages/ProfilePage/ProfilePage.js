import React from 'react'
import classes from './ProfilePage.module.scss';
import ProfileForm from '../../components/Forms/ProfileForm'
import { customerData } from "../../store/selectors"
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    
    const store = useSelector((state) => state)

    return (
        <>
            <section className={classes.profilePage}>
                <h3>{customerData(store).firstName}'s Profile</h3>
                <ProfileForm />
            </section>
        </>
    )
}

export default ProfilePage
