import Image from "next/image";
import logo from '../public/images/smiling-logo.svg'

export default function Logo() {
    return <Image src={logo} alt="" />
}