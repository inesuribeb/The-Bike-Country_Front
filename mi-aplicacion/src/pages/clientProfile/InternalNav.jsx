import Button from '../../components/button/Button'


function InternalNav({ menuItems }) {
    return (
        <div>
            <ul>
                {menuItems.map((item) => (
                    <li 
                        key={item.id}
                        className={item.active ? 'active' : ''}
                    >
                        
                            <Button onClick={item.onClick} children={item.label}>
                                
                            </Button>
                        
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InternalNav;