import Image from 'next/image'

const IllustrationsLayer = () => (
    <>
        <Image alt="flare-left" src="/flare-left.svg" className="absolute -top-8" style={{ zIndex: -10 }} />
        <Image alt="flare-right" src="/flare-right.svg" className="absolute right-0 -top-8" style={{ zIndex: -10 }} />
        <Image alt="looper-left" src="/looper-left.svg" className="absolute top-8" style={{ zIndex: -20 }} />
        <Image alt="looper-right" src="/looper-right.svg" className="absolute right-0 top-96" style={{ zIndex: -20 }} />
        <Image alt="blur-img" src="/blur-img-info.png" className="absolute left-0" style={{ zIndex: -20, top: 637 }} />
        <Image alt="blur-img" src="/blur-img-lupa.png" className="absolute right-0" style={{ zIndex: -20, top: 1100 }} />
        <Image alt="blur-ellipse" src="/blur-ellipse.svg" className="absolute left-0" style={{ zIndex: -20, top: 663 }} />
    </>
)
export default IllustrationsLayer
