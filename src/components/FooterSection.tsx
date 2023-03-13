import { Button, Divider, Input, Text } from 'dd360-ds'
import Image from 'next/image'

const FooterSection = () => (
    <>
        <section className="flex flex-wrap justify-around items-center" style={{ padding: '56px 120px' }}>
            <div className="flex flex-col" style={{ width: 433 }}>
                <Image src="/dd360-black.png" width={130} height={28.5} alt="dd360" className="mb-16" />
                <Text className="mb-2 font-semibold">Keep up to date</Text>
                <Text variant="p" className="mb-8">
                    Join our newsletter for regular updates. No spam ever.
                </Text>
                <div className="flex flex-col">
                    <Text className="block font-semibold" size="sm">
                        Subscribe to our newsletter
                    </Text>
                    <div className="flex flex-wrap ">
                        <Input placeholder="hello@dd360.mx" className="inline-block border-gray-500 w-72" />
                        <Button className="h-12 inline-block mt-1 px-8 ml-0 md:ml-3">Suscribete</Button>
                    </div>
                </div>
            </div>
            <div className="flex justify-end w-72 my-10">
                <div className="flex flex-col gap-y-6">
                    <Text>Components</Text>
                    <Text>Docs</Text>
                    <Text>Examples</Text>
                    <Text>Figma</Text>
                </div>
                <div className="ml-28">
                    <Text className="font-semibold">Company</Text>
                </div>
            </div>
        </section>
        <Divider className="border-gray-300" />
        <div className="flex justify-around items-center mt-8 mb-4">
            <Text className="text-center text-gray-500 ">© 2021 DD360. All rights reserved.</Text>
            <Text>Privacy</Text>
        </div>
    </>
)

export default FooterSection
