'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';

// auth
import { useAuth } from '@/context/AuthContext'

// styles
import styles from '../../../styles';
import stylescss from '../../styles/page.module.css';

// route
import { useRouter } from 'next/navigation';


const ProfilePage = async ({ params }: any) => {

    const { user, getUser } = useAuth();
    const profileUser = await getUser(params.id);

    console.log('profileUser');
    console.log(profileUser);
    

    return (
        <div>
            <h1>Profile/{profileUser.ID}</h1>
            <h1>Profile/{profileUser.userName}</h1>
            <h1>Profile/{profileUser.email}</h1>
        </div>
    );
}

export default ProfilePage;