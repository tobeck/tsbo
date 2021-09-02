import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialsBar() {
    return (
        <nav>
            <div className='flex flex-col place-item-end gap-4'>
                <Link href='https://www.linkedin.com/in/tobias-becker-olsson-9a678252'>
                    <a target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin-in']} size='lg' /></a>
                </Link>
                <Link href='https://www.github.com/tobeck'>
                    <a target='_blank'><FontAwesomeIcon icon={['fab', 'github']} size='lg' /></a>
                </Link>
                <Link href='https://www.instagram.com'>
                    <a target='_blank'><FontAwesomeIcon icon={['fab', 'instagram']} size='lg' /></a>
                </Link>
            </div>
        </nav>
    )
}
