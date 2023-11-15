import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeSelect from '../ThemeSelect/ThemeSelect'

import './Header.scss'

function TopBarMenu() {
    const [selected, setselected] = useState('Language')
    const selectOption = [
        'English',
        'Urdu',
        'Spanish',
        'French'
    ]
    return (
        <div className='TopBarMenu_main'>
            <ul className='menu_ul'>
                <li className='menu_li'>
                    <Link className='menu_linkk heading-sm' to="/about">
                        About us
                    </Link>
                </li>
                <li className='menu_li'>
                    <Link className='menu_linkk heading-sm' to="/contact">
                        Contact us
                    </Link>
                </li>
                <li className='menu_li'>
                    <Link className='menu_linkk heading-sm'>
                        Account
                    </Link>
                </li>
            </ul>
            <ThemeSelect
                Selected={selected}
                setSelected={setselected}
                options={selectOption}
            />
        </div>
    )
}

export default TopBarMenu