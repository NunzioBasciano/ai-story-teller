import React from 'react';
import style from './footer.module.scss';
import { labels } from '@/data/labels';

const footerLinks = [
    {
        href: 'https://github.com/NunzioBasciano',
        src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/github-2749268-2284658.png?f=webp&w=256",
        alt: labels.githubIconAlt,
    },
    {
        href: 'https://www.linkedin.com/in/nunzio-basciano/',
        src: '/linkedin.png',
        alt: labels.linkedinIconAlt,
    }
];


function Footer() {
    return (
        <div className={style.container}>
            <div className={style.container_icons}>
                {footerLinks.map((item) => (
                    <a key={item.alt} className={style.container_icon} href={item.href}>
                        <img className={style.icon} src={item.src} alt={item.alt} />
                    </a>
                ))}
            </div>
            <div className={style.copyright}>
                <h4>
                    {labels.copyrightLabel}
                </h4>
            </div>
        </div>
    )
}

export default Footer;