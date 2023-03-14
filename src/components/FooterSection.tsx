import { Button, Divider, Input, Text } from 'dd360-ds'
import Image from 'next/image'

const FooterSection = () => (
    <>
        <section className="px-8 md:px-28" style={{ paddingTop: '56px' }}>
            <Image src="/dd360-black.png" width={130} height={28.5} alt="dd360" />

            <div className="flex justify-start sm:justify-between items-end flex-col sm:flex-row">
                <div className="flex flex-col mt-16 mr-auto">
                    <Text className="mb-2 font-semibold">Keep up to date</Text>
                    <Text variant="p" className="mb-8">
                        Join our newsletter for regular updates. No spam ever.
                    </Text>
                    <div className="flex flex-col">
                        <Text className="block font-semibold" size="sm">
                            Subscribe to our newsletter
                        </Text>
                        <div className="flex flex-wrap flex-col md:flex-row">
                            <Input placeholder="hello@dd360.mx" className="inline-block border-gray-500 w-full mr-3" style={{ maxWidth: 287 }} />
                            <Button className="h-12 inline-block mt-1 px-8 " style={{ maxWidth: 287 }}>
                                Suscribe
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end w-72 mt-16 mr-auto sm:mr-0">
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
            </div>
            <Divider className="border-gray-300 mt-9" />
            <div className="flex justify-between items-center mt-8 mb-4">
                <Text className="text-center text-gray-500 ">© 2021 DD360. All rights reserved.</Text>
                <Text>Privacy</Text>
            </div>
        </section>
    </>
)

export default FooterSection
