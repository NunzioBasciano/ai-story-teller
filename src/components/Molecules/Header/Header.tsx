import style from './header.module.scss'
import { labels } from '../../../data/labels';
import Link from 'next/link';
import { MenuNavigation } from '../../../data/menuNavigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface IHeaderProps {
    title: string;
}

function Header(props: IHeaderProps) {
    const router = useRouter();
    const currentPath = router.pathname;
    const { title } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false); // Close the menu
    };

    useEffect(() => {
    }, [isMenuOpen])
    return (
        <header className={style.container}>
            <Link href={'/'}>
                <h1>{title}</h1>
            </Link>
            <nav className={style.hidden}>
                <ul className={style.container_link}>
                    {MenuNavigation.map((item) => (
                        <li
                            key={item.label}
                            className={`${style.link} ${currentPath === item.path && style.active}`}
                        >
                            <Link
                                href={item.path}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={style.button_hamburger_container}>
                <img
                    onClick={handleClick}
                    className={style.hamburger}
                    src="/more.png"
                    alt={labels.hamburgerMenuLabel} />
            </div>
            {isMenuOpen &&
                <ul className={style.hamburger_menu}>
                    {MenuNavigation.map((item) => (
                        <li
                            key={item.label}
                            className={style.hamburgerLink}
                            onClick={handleMenuItemClick} // Close the menu when clicking on an item
                        >
                            <Link href={item.path}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            }
        </header>
    )
}

export default Header