import Image from 'next/image'

const IllustrationsLayer = () => (
    <>
        <Image alt="flare-left" src="/flare-left.svg" width={486} height={981} className="absolute -top-8" style={{ zIndex: -10 }} />
        <Image alt="flare-right" src="/flare-right.svg" width={618} height={778} className="absolute right-0 -top-8" style={{ zIndex: -10 }} />
        <Image alt="looper-left" src="/looper-left.svg" width={918} height={1635} className="absolute top-8" style={{ zIndex: -20 }} />
        <Image alt="looper-right" src="/looper-right.svg" width={617} height={1507} className="absolute right-0 top-96" style={{ zIndex: -20 }} />
        <Image alt="blur-img-info" src="/blur-img-info.png" width={336} height={368} className="absolute left-0" style={{ zIndex: -20, top: 637 }} />
        <Image
            alt="blur-img-lupa"
            src="/blur-img-lupa.png"
            width={146}
            height={146}
            className="absolute right-0"
            style={{ zIndex: -20, top: 1450, right: 171 }}
        />
        <Image alt="blur-ellipse" src="/blur-ellipse.svg" width={922} height={1385} className="absolute left-0" style={{ zIndex: -20, top: 663 }} />
    </>
)
export default IllustrationsLayer
