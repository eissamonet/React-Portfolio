import React from 'react';

function navigation (props) {
    const tabs = ['About', 'Projects', 'Contact',];
    return (
        <ul className='nav navid'>
            {tabs.map(tab => (
                <li className='nav-item' key={tab}>
                    <a
                        href={'#' + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                        className={
                            props.currentPage === tab ? 'nav-link active' : 'nav-link'}>
                        {tab}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default navigation;