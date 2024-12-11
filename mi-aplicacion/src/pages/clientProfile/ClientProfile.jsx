import NavBar from '../../components/navbar/NavBar'
import InternalNav from './InternalNav'
import PersonalData from './PersonalData'
import Bookings from './Bookings';
import { useState } from 'react';

function ClientProfile (){
    const menuItems = [
        {
            id: 1,
            label: 'Personal Data',
            onClick: () => handleMenus('personalData'),
            // icon: '👤',
            active: true
        },
        {
            id: 2,
            label: 'My bookings',
            onClick: () => handleMenus('myBookings'),
            // icon: '📅',
            active: false
        }
    ];

    const [currentMenu, setCurrentMenu] = useState("personalData");
    const menus = {personalData: PersonalData, myBookings: Bookings};
    const MenuComponent = menus[currentMenu];

    function handleMenus (menuName){
        setCurrentMenu(menuName);
    }

    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <div>
                    <InternalNav menuItems={menuItems} />   
                </div>
                <div>
                    <MenuComponent/>
                </div>  
            </main>
        </>
    );
}

export default ClientProfile;